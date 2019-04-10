module.exports = {
    plugins: [
        require('postcss-import')({ plugins: [require('stylelint')] }),
        require('postcss-apply'),
        require('postcss-nesting'),
        require('postcss-custom-media')({
            preserve: false
        }),
        require('postcss-preset-env')({
            preserve: false,
            calc: false
        }),

    ]
}