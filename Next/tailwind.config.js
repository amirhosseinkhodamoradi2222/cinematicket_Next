module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        container: {
            center: true,
        },
        extend: {
            backgroundImage: {
                auth: "url('/assets/images/auth_bg.svg')",
            },
            colors: {
                primary: '#ff3543',
                secondary: '#343542',
            },
        },
    },
    plugins: [],
};
