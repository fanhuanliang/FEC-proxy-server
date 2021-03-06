/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable quote-props */
module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        // "eslint:recommended",
        "airbnb",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
        2
        ],
        "linebreak-style": [
            "off",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-unused-vars": [
            "off"
        ],
        "react/prop-types": [
            "off"
        ],
        "no-undef": [
            "off"
        ],
        "no-console": [
            "off"
        ],
        "comma-dangle": [
            "error",
            "never"
        ],
        "react/sort-comp": [
            "off"
        ],
        "react/destructuring-assignment": [
            "off",
            "always"
        ],
        "eol-last": [
            "off"
        ],
        "import/extensions": [
            "error",
            "always",
            { "ignorePackages": true }
        ],
        "arrow-body-style": [
            "off"
        ],
        "jsx-quotes": [
            "error",
            "prefer-single"
        ],
        "import/newline-after-import": [
            "off"
        ],
        "camelcase": [
            "off"
        ],
        "no-restricted-syntax": [
            "off",
            "FunctionExpression",
            "WithStatement",
            "BinaryExpression[operator='in']"
        ],
        "no-plusplus": [
            "error",
            { "allowForLoopAfterthoughts": true }
        ],
        "prefer-const": [
            "error",
            { "destructuring": "any" }
        ],
        "quote-props": [
            "error",
            "consistent"
        ],
        "object-curly-newline": [
            "off"
        ],
        "jsx-a11y/alt-text": [
            "off"
        ],
        "default-case": [
            "off"
        ],
        "max-len": [
            "off"
        ],
        "react/jsx-filename-extension": [
            1, { "allow": "as-needed" }
        ]
    }
};
