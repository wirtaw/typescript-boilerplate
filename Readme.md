# TypeScript Boilerplate

A minimal TypeScript boilerplate project with modern ESLint configuration, optimized for VSCode and Linux Fedora environments.

## Features

* **TypeScript Setup:** Pre-configured `tsconfig.json` for optimal TypeScript compilation.
* **Modern ESLint:** Uses `eslint.config.mjs` with `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin` for robust linting.
* **VSCode Integration:** Recommended VSCode settings and extensions for a smooth development experience.
* **Linux Fedora Optimized:** Considerations for Fedora-specific configurations.
* **Clean Directory Structure:** Organized `src` and `dist` directories.

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

## Fedora Considerations

* Ensure Node.js and npm are installed correctly using `dnf`.
* Verify file permissions, especially when installing global npm packages.

## Contributing

Feel free to contribute by submitting pull requests or opening issues.

## License

MIT