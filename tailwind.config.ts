import type { Config } from 'tailwindcss'

const colors = require('tailwindcss/colors');

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
            animation: {
                'spin-slow': 'spin 10s linear infinite'
            },
            colors: {
                'primary': {
                    50: '#f4f8fd',
                    100: '#e8f1fb',
                    200: '#c6ddf4',
                    300: '#a3c8ed',
                    400: '#5e9fe0',
                    500: '#1976d2',
                    600: '#176abd',
                    700: '#13599e',
                    800: '#0f477e',
                    900: '#0c3a67',
                },
                'secondary': {
                    50: '#f4fbfa',
                    100: '#e9f6f5',
                    200: '#c9e9e6',
                    300: '#a8dbd7',
                    400: '#67c1b8',
                    500: '#26a69a',
                    600: '#22958b',
                    700: '#1d7d74',
                    800: '#17645c',
                    900: '#13514b',
                },
            },
        },
    },
    plugins: [],
}
export default config
