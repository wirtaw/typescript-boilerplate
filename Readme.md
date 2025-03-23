# TypeScript Boilerplate

A minimal TypeScript boilerplate project with modern ESLint configuration, optimized for VSCode and Linux Fedora environments.

## Features

* **TypeScript Setup:** Pre-configured `tsconfig.json` for optimal TypeScript compilation.
* **Modern ESLint:** Uses `eslint.config.mjs` with `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin` for robust linting.
* **VSCode Integration:** Recommended VSCode settings and extensions for a smooth development experience.
* **Clean Directory Structure:** Organized `src` and `dist` directories.

## Creating a New Project from this Boilerplate

To start a new project using this boilerplate, follow these steps:

1.  **Run the copy script:**

    * **From inside the boilerplate folder:**

        ```bash
        npm run copy-project
        ```

    * **From outside the boilerplate folder:**

        ```bash
        node /path/to/typescript-boilerplate/bin/copy-project.mjs
        ```

        Replace `/path/to/typescript-boilerplate` with the actual path to the boilerplate directory.

        Or if you added the bin entry to the package.json and installed globally:

        ```bash
        create-ts-project
        ```

    You will be prompted to enter the path to the boilerplate project and the new project name.

2.  **Navigate to the new project directory:**

    ```bash
    cd [new-project-name]
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Start coding!**

## Explanation of the copy script

The copy script creates a new folder with the name you input, and copies all of the files from the boilerplate into that new folder, excluding the node_modules, dist and .git folders. It also renames the package.json name to the new project name.


## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone [repository-url]
    cd typescript-boilerplate
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Build the project:**

    ```bash
    npm run build
    ```

4.  **Run the project:**

    ```bash
    npm run start
    ```

5.  **Lint the project:**

    ```bash
    npm run lint
    ```

## VSCode Configuration

* Install the recommended extensions:
    * TypeScript and JavaScript Language Features (built-in)
    * ESLint
    * Prettier - Code formatter

## Contributing

Feel free to contribute by submitting pull requests or opening issues.

## License

MIT