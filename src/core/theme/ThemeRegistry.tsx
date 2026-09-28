"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/core/theme/theme";

interface IProps {
    children: React.ReactNode;
}

export const ThemeRegistry: React.FC<IProps> = ({ children }) => {
    return (
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
    );
};
