import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#FF1B2D",
            dark: "#A80F1D",
            contrastText: "#F4F6F8",
        },
        background: {
            default: "#050708",
            paper: "#0A0D10",
        },
        text: {
            primary: "#F4F6F8",
            secondary: "#AAB3BC",
            disabled: "#6E7882",
        },
        divider: "#252C33",
    },
    typography: {
        fontFamily: "var(--font-inter), system-ui, sans-serif",
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    backgroundColor: "var(--color-carbon-black)",
                    color: "var(--color-pure-white)",
                    fontFamily: "var(--font-inter)",
                    fontSize: 14,
                    "&:not(.MuiInputBase-multiline)": { height: 48 },
                    "& .MuiOutlinedInput-notchedOutline": { borderColor: "var(--color-border-gray)" },
                    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "var(--color-border-gray)" },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--color-logo-red)",
                        borderWidth: 1,
                    },
                },
            },
        },
    },
});
