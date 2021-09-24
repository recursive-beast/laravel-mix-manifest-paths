module.exports = {
	root: true,
	env: {
		node: true,
		jest: true,
	},
	parserOptions: {ecmaVersion: "latest"},
	extends: ["eslint:recommended"],
	rules: {
		// Custom rules
		"no-await-in-loop": "error",
		"no-loss-of-precision": "error",
		"curly": "error",
		"no-promise-executor-return": "error",
		"default-case": "error",
		"default-case-last": "error",
		"default-param-last": "error",
		"dot-notation": "error",
		"no-else-return": "error",
		"no-eval": "warn",
		"no-labels": "error",
		"no-loop-func": "error",
		"no-floating-decimal": "error",
		"no-invalid-this": "error",
		"no-multi-str": "error",
		"no-new": "error",
		"no-nonoctal-decimal-escape": "error",
		"no-octal-escape": "error",
		"no-param-reassign": "error",
		"no-return-assign": "error",
		"no-return-await": "error",
		"no-sequences": "error",
		"no-throw-literal": "error",
		"no-unused-expressions": "error",
		"vars-on-top": "error",
		"wrap-iife": ["error", "inside", {functionPrototypeMethods: true}],
		"no-shadow": ["error", {builtinGlobals: true}],
		"no-use-before-define": "error",
		"array-bracket-newline": ["error", {multiline: true}],
		"array-bracket-spacing": "error",
		"array-element-newline": ["error", "consistent"],
		"block-spacing": "error",
		"brace-style": ["error", "1tbs", {allowSingleLine: true}],
		"comma-dangle": ["error", "always-multiline"],
		"comma-spacing": "error",
		"comma-style": "error",
		"computed-property-spacing": "error",
		"eol-last": "error",
		"func-call-spacing": "error",
		"function-call-argument-newline": ["error", "consistent"],
		"function-paren-newline": ["error", "multiline-arguments"],
		"implicit-arrow-linebreak": "error",
		"indent": ["error", "tab"],
		"key-spacing": "error",
		"keyword-spacing": "error",
		"lines-between-class-members": "error",
		"max-depth": "error",
		"max-len": ["error", 100],
		"max-lines-per-function": "error",
		"max-params": ["error", 4],
		"multiline-ternary": ["error", "always-multiline"],
		"operator-linebreak": ["error", "before"],
		"new-cap": "error",
		"new-parens": "error",
		"no-lonely-if": "error",
		"no-multi-assign": "error",
		"no-multiple-empty-lines": ["error", {max: 1, maxEOF: 1, maxBOF: 0}],
		"no-trailing-spaces": "error",
		"no-unneeded-ternary": "warn",
		"no-whitespace-before-property": "error",
		"object-curly-newline": ["error", {multiline: true, consistent: true}],
		"object-curly-spacing": "error",
		"object-property-newline": ["error", {allowAllPropertiesOnSameLine: true}],
		"one-var": ["error", "never"],
		"padding-line-between-statements": [
			"error",
			{blankLine: "always", prev: "*", next: ["function", "class"]},
			{blankLine: "always", prev: ["function", "class"], next: ["function", "class"]},
			{blankLine: "always", prev: ["function", "class"], next: "*"},
			{blankLine: "always", prev: "*", next: ["var", "const", "let"]},
			{blankLine: "always", prev: ["var", "const", "let"], next: "*"},
			{blankLine: "any", prev: ["var", "const", "let"], next: ["var", "const", "let"]},
			{blankLine: "always", prev: ["case", "default"], next: "*"},
			{blankLine: "always", prev: "*", next: "export"},
			{blankLine: "any", prev: "export", next: "export"},
			{blankLine: "always", prev: "import", next: "*"},
			{blankLine: "never", prev: "import", next: "import"},
			{blankLine: "always", prev: "*", next: "return"},
		],
		"quote-props": ["error", "consistent-as-needed"],
		"quotes": ["error", "double", {avoidEscape: true}],
		"semi": "error",
		"semi-spacing": "error",
		"semi-style": "error",
		"space-before-blocks": "error",
		"space-before-function-paren": ["error", {named: "never"}],
		"space-in-parens": "error",
		"space-infix-ops": "error",
		"space-unary-ops": ["error", {words: true, nonwords: false}],
		"spaced-comment": ["error", "always", {block: {balanced: true}}],
		"switch-colon-spacing": "error",
		"template-tag-spacing": "error",
		"wrap-regex": "error",
		"arrow-parens": "error",
		"arrow-spacing": "error",
		"generator-star-spacing": "error",
		"no-confusing-arrow": "error",
		"no-duplicate-imports": "error",
		"no-useless-computed-key": "error",
		"no-useless-constructor": "error",
		"no-useless-rename": "error",
		"no-var": "error",
		"prefer-const": "error",
		"prefer-rest-params": "error",
		"rest-spread-spacing": "error",
		"template-curly-spacing": "error",
		"yield-star-spacing": "error",
	},

	overrides: [
		{
			files: "**/*.ts",
			parser: "@typescript-eslint/parser",
			parserOptions: {project: "./tsconfig.json"},
			plugins: ["@typescript-eslint"],
			extends: [
				"plugin:@typescript-eslint/recommended",
				"plugin:@typescript-eslint/recommended-requiring-type-checking",
			],
			rules: {
				// Recommended rules
				"@typescript-eslint/prefer-regexp-exec": "off",
				"@typescript-eslint/restrict-template-expressions": "off",
				"@typescript-eslint/explicit-module-boundary-types": "off",

				// Custom rules
				"@typescript-eslint/class-literal-property-style": "error",
				"@typescript-eslint/consistent-type-assertions": "error",
				"@typescript-eslint/consistent-type-definitions": ["error", "interface"],
				"@typescript-eslint/explicit-member-accessibility": "error",
				"@typescript-eslint/member-delimiter-style": "error",
				"@typescript-eslint/member-ordering": [
					"error", {
						default: {
							memberTypes: [
							// Index signature
								"signature",

								// Fields
								"public-static-field",
								"protected-static-field",
								"private-static-field",

								"public-decorated-field",
								"protected-decorated-field",
								"private-decorated-field",

								"public-instance-field",
								"protected-instance-field",
								"private-instance-field",

								"public-abstract-field",
								"protected-abstract-field",
								"private-abstract-field",

								"public-field",
								"protected-field",
								"private-field",

								"static-field",
								"instance-field",
								"abstract-field",

								"decorated-field",

								"field",

								// Constructors
								"public-constructor",
								"protected-constructor",
								"private-constructor",

								"constructor",

								// Methods
								"public-static-method",
								"protected-static-method",
								"private-static-method",

								"public-decorated-method",
								"protected-decorated-method",
								"private-decorated-method",

								"public-instance-method",
								"protected-instance-method",
								"private-instance-method",

								"public-abstract-method",
								"protected-abstract-method",
								"private-abstract-method",

								"public-method",
								"protected-method",
								"private-method",

								"static-method",
								"instance-method",
								"abstract-method",

								"decorated-method",

								"method",
							],
						},
					},
				],
				"@typescript-eslint/no-base-to-string": "error",
				"@typescript-eslint/no-confusing-non-null-assertion": "error",
				"@typescript-eslint/no-dynamic-delete": "error",
				"@typescript-eslint/no-extraneous-class": "error",
				"@typescript-eslint/no-implicit-any-catch": ["error", {allowExplicitAny: true}],
				"@typescript-eslint/no-invalid-void-type": "error",
				"@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
				"@typescript-eslint/no-unnecessary-condition": "warn",
				"@typescript-eslint/no-unnecessary-qualifier": "warn",
				"@typescript-eslint/no-unnecessary-type-arguments": "warn",
				"@typescript-eslint/no-unnecessary-type-constraint": "warn",
				"@typescript-eslint/no-unsafe-argument": "error",
				"@typescript-eslint/non-nullable-type-assertion-style": "error",
				"@typescript-eslint/prefer-enum-initializers": "error",
				"@typescript-eslint/prefer-for-of": "error",
				"@typescript-eslint/prefer-function-type": "error",
				"@typescript-eslint/prefer-literal-enum-member": "error",
				"@typescript-eslint/prefer-nullish-coalescing": "error",
				"@typescript-eslint/prefer-optional-chain": "error",
				"@typescript-eslint/prefer-reduce-type-parameter": "error",
				"@typescript-eslint/prefer-return-this-type": "error",
				"@typescript-eslint/prefer-ts-expect-error": "error",
				"@typescript-eslint/promise-function-async": "error",
				"@typescript-eslint/strict-boolean-expressions": "error",
				"@typescript-eslint/switch-exhaustiveness-check": "error",
				"@typescript-eslint/type-annotation-spacing": "error",
				"@typescript-eslint/unified-signatures": "warn",

				// Extension Rules
				"brace-style": "off",
				"comma-dangle": "off",
				"comma-spacing": "off",
				"default-param-last": "off",
				"dot-notation": "off",
				"func-call-spacing": "off",
				"indent": "off",
				"keyword-spacing": "off",
				"lines-between-class-members": "off",
				"no-dupe-class-members": "off",
				"no-duplicate-imports": "off",
				"no-invalid-this": "off",
				"no-loop-func": "off",
				"no-loss-of-precision": "off",
				"no-shadow": "off",
				"no-throw-literal": "off",
				"no-unused-expressions": "off",
				"no-use-before-define": "off",
				"no-useless-constructor": "off",
				"object-curly-spacing": "off",
				"quotes": "off",
				"return-await": "off",
				"semi": "off",
				"space-before-function-paren": "off",
				"space-infix-ops": "off",

				"@typescript-eslint/brace-style": ["error", "1tbs", {allowSingleLine: true}],
				"@typescript-eslint/comma-dangle": ["error", "always-multiline"],
				"@typescript-eslint/comma-spacing": "error",
				"@typescript-eslint/default-param-last": "error",
				"@typescript-eslint/dot-notation": "error",
				"@typescript-eslint/func-call-spacing": "error",
				"@typescript-eslint/indent": ["error", "tab"],
				"@typescript-eslint/keyword-spacing": "error",
				"@typescript-eslint/lines-between-class-members": "error",
				"@typescript-eslint/no-dupe-class-members": "error",
				"@typescript-eslint/no-duplicate-imports": "error",
				"@typescript-eslint/no-invalid-this": "error",
				"@typescript-eslint/no-loop-func": "error",
				"@typescript-eslint/no-loss-of-precision": "error",
				"@typescript-eslint/no-shadow": ["error", {builtinGlobals: true}],
				"@typescript-eslint/no-throw-literal": "error",
				"@typescript-eslint/no-unused-expressions": "error",
				"@typescript-eslint/no-use-before-define": "error",
				"@typescript-eslint/no-useless-constructor": "error",
				"@typescript-eslint/object-curly-spacing": "error",
				"@typescript-eslint/quotes": ["error", "double", {avoidEscape: true}],
				"@typescript-eslint/return-await": "error",
				"@typescript-eslint/semi": "error",
				"@typescript-eslint/space-before-function-paren": ["error", {named: "never"}],
				"@typescript-eslint/space-infix-ops": "error",
			},
		},
		{
			files: ".eslintrc.js",
			rules: {
				// Custom rules
				"max-len": "off",
			},
		},
		{
			files: "tests/**/*.test.ts",
			rules: {
				// Custom rules
				"max-lines-per-function": "off",
			},
		},
	],
};
