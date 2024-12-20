/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            width: {
                'fit-content-200': 'fit-content(177.58px)',
            },
            colors: {
                primary: {
                    darkBlue: 'hsl(243, 87%, 12%)',
                    desaturatedBlue: 'hsl(238, 22%, 44%)',
                },
                accent: {
                    brightBlue: 'hsl(224, 93%, 58%)',
                    moderateCyan: 'hsl(170, 45%, 43%)',
                },
                neutral: {
                    lightGrayishBlue: 'hsl(240, 75%, 98%)',
                    lightGray: 'hsl(0, 0%, 75%)',
                },
            },
            fontFamily: {
                raleway: ['Raleway', 'sans-serif'],
                openSans: ['Open Sans', 'sans-serif'],
            },
            screens: {
                md: '830px',
                lg: '900px',
            },
        },
    },
    plugins: [],
};
