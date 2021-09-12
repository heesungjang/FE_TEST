import React from "react";

import Result from "./page/Result"; // Result 페이지
import NavBar from "./Components/NavBar"; // 네비게이션 컴포넌트
import styled from "styled-components"; // 스타일 컴포넌트 라이브러리

function App() {
    return (
        <MainContainer>
            <NavBar />
            <Result />
        </MainContainer>
    );
}

const MainContainer = styled.div``;

export default App;
