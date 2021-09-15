import React from "react";

// 전역 스타일 설정 import
import theme from "./theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./globalStyle";

/**
 * @역할 전역 스타일 provider
 * @참조 index.js에서 최상위 컴포넌트인 App 컴포넌트를 children으로 전달 받는다.
 */

const GlobalThemeProvider = ({ children }) => {
    return (
        <ThemeProvider theme={{ ...theme }}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};

export default GlobalThemeProvider;
