/* eslint-disable func-names */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable padding-line-between-statements */
module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            "@babel/preset-env",
            "@babel/preset-react"
        ],
        plugins: [
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-transform-runtime"
        ]
    };
};
