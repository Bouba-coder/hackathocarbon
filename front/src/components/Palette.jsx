import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
        primary: {
            main: '#282B2A',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: '#ff0000',
        },
        background: {
            default: '#fff',
        },
        customColor: {
            main: '#ff0000',
        }
    },
});

export default theme;