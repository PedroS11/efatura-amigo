/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.tsx",
        "./node_modules/tw-elements/dist/js/**/*.js"
    ],
    plugins: [require("tw-elements/dist/plugin")],
    theme: {
        extend: {},
    }
}
