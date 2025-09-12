/* eslint-disable quote-props */
module.exports = {
    extends: [
        '@scandipwa',
    ],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
        requireConfigFile: false,
        babelOptions: {
            parserOpts: {
                plugins: ['jsx'],
            },
        },
    },
    rules: {
        // Existing ScandiPWA rules to relax
        "@typescript-eslint/object-curly-spacing": "off",

        // Turn off rules you often disable manually
        "react/jsx-one-expression-per-line": "off",
        "react/jsx-curly-spacing": "off",
        "react/forbid-dom-props": "off",
        "react/jsx-no-bind": "off",
        "react/jsx-tag-spacing": "off",
        "react/destructuring-assignment": "off",
        "react/no-unused-state": "warn", // warn instead of error
        "quotes": "off",
        "semi": "off",
        "comma-dangle": "off",

        // ScandiPWA guideline rules
        "@scandipwa/scandipwa-guidelines/only-render-in-component": "off",
        "@scandipwa/scandipwa-guidelines/use-magic-construct": "off",
        "@scandipwa/scandipwa-guidelines/derived-class-names": "off",
    },
};
