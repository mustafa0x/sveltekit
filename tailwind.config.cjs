module.exports = {
    content: ['./src/**/*.svelte', './node_modules/components/src/*.svelte'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Crimson Text', 'Kitab', ...require('tailwindcss/defaultTheme.js').fontFamily.sans],
            },
            listStyleType: {
                arabic: 'arabic-indic',
            },
        },
    },
    corePlugins: {
        container: false,
    },
    plugins: [require('tailwindcss-rtl')],
}
