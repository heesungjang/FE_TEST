import React, { useState } from "react";
import styled from "styled-components"; // 스타일 컴포넌트 라이브러리
import textProps from "../styles/textStyle"; // 텍스트 스타일 mixin 함수

//네비게이션 컴포넌트
const NavBar = () => {
    const [selectedButton, setSelectedButton] = useState("Result");

    // 버튼 클릭 핸들러
    const handleButtonClick = () => {};
    return (
        <NavBarContainer>
            <ButtonContainer>
                <NavButton name="alpha" onClick={handleButtonClick}>
                    Alpha
                </NavButton>
                <NavButton name="bravo" onClick={handleButtonClick}>
                    Bravo
                </NavButton>
                <NavButton name="charlie" onClick={handleButtonClick}>
                    Charlie
                </NavButton>
                <NavButton name="delta" onClick={handleButtonClick}>
                    Delta
                </NavButton>
                <NavButton name="echo" onClick={handleButtonClick}>
                    Echo
                </NavButton>
                <NavButton name="result" onClick={handleButtonClick}>
                    Result
                </NavButton>
            </ButtonContainer>
        </NavBarContainer>
    );
};

// 네이게이션 컴포넌트 메인 컨테이너 div
const NavBarContainer = styled.div`
    margin: 0 50px;
    padding: 20px 50px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;
// 네비게이션 버튼 컨테이너 div
const ButtonContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
`;
// 네비게이션 버튼
const NavButton = styled.button`
    transition: 150ms;
    background-color: transparent;
    :hover {
        transform: translate(0px, -3px);
    }
    ${(props) => textProps(18, "regular", "black")}
`;

export default NavBar;
