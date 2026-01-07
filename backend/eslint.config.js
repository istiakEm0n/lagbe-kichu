import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      "prisma/**",
      "**/generated/**",   
    ],
  },

  {
    files: ["src/**/*.{ts,js}"],

    languageOptions: {
      globals: globals.node,
    },

    plugins: {
      js,
    },

    extends: [
      "js/recommended",
      ...tseslint.configs.recommended,
    ],
  },
]);

