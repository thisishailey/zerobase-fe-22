import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            keyframes: {
                spinQuarter: {
                    from: {
                        transform: 'rotate(90deg)',
                    },
                    to: {
                        transform: 'rotate(0deg)',
                    },
                },
                arrowBounce: {
                    '0%, 100%': {
                        transform: 'translateX(-30%)',
                        animation: 'cubic-bezier(0.8, 0, 1, 1)',
                    },
                    '50%': {
                        transform: 'translateX(0)',
                        animation: 'cubic-bezier(0, 0, 0.2, 1)',
                    },
                },
            },
        },
    },
    darkMode: 'selector',
    plugins: [],
};
export default config;
