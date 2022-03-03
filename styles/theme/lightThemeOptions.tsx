import { ThemeOptions } from '@mui/material/styles';

const lightThemeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#d66843',
            contrastText: 'rgba(255,255,255,0.87)',
        },
        secondary: {
            main: '#185fd8',
        },
        text: {
            primary: 'rgba(0,0,0,0.87)',
        },
    },
};

export default lightThemeOptions;