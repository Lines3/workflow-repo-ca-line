import js from "@eslint/js";
import pluginJs from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        describe: true,
        test: true,
        it: true,
        expect: true,
        require: true, 
        module: true, 
        process: true, 
      },
    },
  },
  pluginJs.configs.recommended,
];
