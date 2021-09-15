import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// 헤더 컴포넌트
import Header from "./Components/Header";
// 스타일 컴포넌트 themeProvider
import GlobalThemeProvider from "./styles/GlobalThemeProvider";

ReactDOM.render(
    <React.StrictMode>
        <GlobalThemeProvider>
            <Header />
            <App />
        </GlobalThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
