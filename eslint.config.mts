import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Ignore globaux
  { ignores: ["dist/**", "node_modules/**"] },

  // JS + TS
  js.configs.recommended,
  ...tseslint.configs.recommended, // sans type info (rapide)

  {
    files: ["**/*.{ts,tsx,js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser, // ou ...globals.node selon le projet
      },
      // Décommente si tu actives les règles type-aware ci-dessous
      // parserOptions: { project: ["./tsconfig.json"] },
    },
    plugins: { import: importPlugin },
    settings: {
      // ✅ Ne garde que le resolver TypeScript (évite les interférences de "node")
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/extensions': ['.ts', '.tsx', '.js', '.jsx'],
      'import/resolver': {
        typescript: {
          project: ['./tsconfig.json'],
          alwaysTryTypes: true,
        },
      },
    },
    rules: {
      "import/no-unresolved": "error",
    },
  },
]);
