import React from "react";
import Header from "./Components/Header"; // 헤더 컴포넌트

import styled from "styled-components"; // 스타일 컴포넌트 라이브러리

function App() {
    return (
        <MainContainer>
            <Header />
        </MainContainer>
    );
}

const MainContainer = styled.div``;

export default App;
