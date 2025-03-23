#!/usr/bin/env node
'use strict';

// copy-project.js
import fs from 'node:fs/promises';
import path from 'node:path';
import readline from 'node:readline';

const rl = readline.createInterface({
    // eslint-disable-next-line no-undef
    input: process.stdin,
    // eslint-disable-next-line no-undef
    output: process.stdout,
});

const cleanPackageJSON = async ({ destDir, projectName }) => {
    const packageJsonPathTmp = path.join(destDir, 'package.json.tmp');
    const packageJsonPath = path.join(destDir, 'package.json');

    await fs.rename(packageJsonPath, packageJsonPathTmp);
    const packageJsonContent = await fs.readFile(packageJsonPathTmp, 'utf-8');
    const packageJson = JSON.parse(packageJsonContent);
    packageJson.name = projectName;
    packageJson.description = '';
    delete packageJson.bin;
    const scriptsPackageJSON = { ...packageJson.scripts };
    delete scriptsPackageJSON['copy-project'];
    packageJson.scripts = { ...scriptsPackageJSON };
    await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
    await fs.unlink(packageJsonPathTmp);
};

const updateReadme = async ({ destDir, projectName }) => {
    const readmePath = path.join(destDir, 'Readme.md');
    await fs.writeFile(readmePath, `
# ${projectName}
## Getting Started

1.  **Clone the repository:**

    ${'```'}bash
    git clone [repository-url]
    cd typescript-boilerplate
    ${'```'}

2.  **Install dependencies:**

    ${'```'}bash
    npm install
    ${'```'}

3.  **Build the project:**

    ${'```'}bash
    npm run build
    ${'```'}

4.  **Run the project:**

    ${'```'}bash
    npm run start
    ${'```'}

5.  **Lint the project:**

    ${'```'}bash
    npm run lint
    ${'```'}

## VSCode Configuration

* Install the recommended extensions:
    * TypeScript and JavaScript Language Features (built-in)
    * ESLint
    * Prettier - Code formatter

## Contributing

Feel free to contribute by submitting pull requests or opening issues.

## License

MIT
    `);
};

rl.question('Enter the path to the boilerplate project: ', (boilerplatePath) => {
    rl.question('Enter the new project name: ', async (projectName) => {
        const sourceDir = path.resolve(boilerplatePath);
        // eslint-disable-next-line no-undef
        const destDir = path.join(process.cwd(), projectName);

        try {
            await fs.mkdir(destDir, { recursive: true });

            await fs.cp(sourceDir, destDir, {
                recursive: true,
                filter: (src) => {
                    const excluded = ['node_modules', 'dist', '.git', 'bin'];
                    return !excluded.some((exclude) => src.includes(exclude));
                },
            });

            // eslint-disable-next-line no-undef
            console.info(`Project copied to ${destDir}`);

            await cleanPackageJSON({ destDir, projectName });
            await updateReadme({ destDir, projectName });

            // eslint-disable-next-line no-undef
            console.info(`package.json name changed to ${projectName}`);
            rl.close();
        } catch (err) {
            // eslint-disable-next-line no-undef
            console.error('Error copying project:', err);
            rl.close();
        }
    });
});