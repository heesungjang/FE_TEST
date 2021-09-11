import React from "react";

import Result from "./page/Result"; // Result 페이지
import styled from "styled-components"; // 스타일 컴포넌트 라이브러리

function App() {
    return (
        <MainContainer>
            <Result />
        </MainContainer>
    );
}

const MainContainer = styled.div``;

export default App;
