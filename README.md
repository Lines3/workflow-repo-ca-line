Workflow CA

#Prerequisites:

Run: 

    npm init -y

#Installations:

##ESLint
  Run: 
  
    npm init @eslint/config@latest

  Answer these questions:  

  - How would you like to use ESLint? · "To check syntax and find problems"
  - What type of modules does your project use? · "JavaScript modules (import/export)"
  - Which framework does your project use? · "None of these"
  - Does your project use TypeScript? · "No"
  - Where does your code run? · "Browser"

  Install necessary dependencies and choose you package manager. For this project npm was used.

Run ESLint on the entire project:
        
    npx eslint
         
Run ESLint on specific file: 
    
    npx eslint myFolder/myFile.js
        
Run ESLint on a directory: 

    npx eslint myFolder/**

  This project use Tailwind configuration so eslint.config.mjs file need to be configured like this to avoid wanrings about undefined globals:
  
    /** @type {import('eslint').Linter.Config[]} */
    export default [
      {
        languageOptions: {
          globals: {
            ...globals.browser,
            describe: true,   // Used for grouping tests
            test: true,       // Used to create tests
            it: true,        // Alternative way to create tests
            expect: true,    // Used for test assertions
            require: true,   // Used in Node.js files like Tailwind config
            module: true,    // Used in Node.js files like Tailwind config
            process: true,   // Used for environment variables later
          },
        },
      },
      pluginJs.configs.recommended,
  
  ##Prettier
 
  Run: 
  
    npm install -D prettier@3

  Create a config file for Prettier in the root of the project and add this:

    {
    "semi": true,
    "singleQuote": false
    }

  Run Prettier:
For the entire project: 
    
        npx prettier . --write
    
For a single file: 

        npx prettier --write myFolder/myFile.js
    
For a folder: 

    npx prettier --write myFolder/


  Add this to package.json after installing ESLint and Prettier:

    "lint-staged": {
    "*.js": "eslint --cache --fix",
    "*.{js,css,md}": "prettier --write"
    }

##Pre-commit hooks/ Husky

  Run: 
  
    npx mrm lint-staged

  Installing it will:
  - Install husky and lint-staged
  - Set up the pre-commit hook
  - Create the basic lint-staged config in your package.json

##Vitest

   Run: 
   
     npm install -D vitest

   Add test script to package.json like this:
   
    "scripts": {
    "test": "vitest"
    }

  Run: 
 
    npm test

  Add this to vitest.config.js to exclude Playwright tests later on to avoid issues when running tests:
  
    import { defineConfig } from "vite";
    export default defineConfig({
      test: {
        exclude: ['**/node_modules/**', '**/tests/**']
      },
    });

##Playwright

  Run: 
  
    npm init playwright@latest

  Answer these questions;
  - Do you want to use TypeScript? "No"
  - Where to put your end-to-end tests? "tests"
  - Add a GitHub Actions workflow? "No"
  - Install Playwright browsers? "Yes"

  A test-folder and a playwright.config.js file will be created. 

  Run the tests with these commands:
Run in all browsers with headless mode:

    npx playwright test

Run tests, open Playwrights interface and see results: 

    npx playwright test --ui

Runs tests while showing the browser while test runs: 

    npx playwright test --headed
    
Run tests step by step: 

    npx playwright test --debug

  Add this to playwright.config.js to configure where the website is located (add the right baseURL for your needs) and start live server when testing:

    export default defineConfig({
      webServer: {
        command: 'npm run start',
        url: 'http://localhost:5500',
        reuseExistingServer: !process.env.CI,
      },
      use: {
        baseURL: 'http://localhost:5500'
      }
    });

  Run this to use live-server: 
  
    npm i live-server -D
  
  Add this to package.json:

    {
      "scripts": {
        "start": "live-server --port=5500"  
      }
    }

##.env

  Install dotenv: 
  
    npm install dotenv --save-dev
  
  Create a .env file and add to gitignore-file
  
  Add this to playwright.config.js: 
  
    require("dotenv").config();

  Required environmental variables:
  
    TEST_USER_EMAIL=example@example.com
    TEST_USER_PASSWORD=example

#Recommendations

  ##Recommended extensions if using VS Code:
  - ESLint extension
  - Prettier


#Contributing

  This project is based on Noroff's project: https://github.com/NoroffFEU/workflow-repo-ca.git


