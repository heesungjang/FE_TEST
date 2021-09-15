import React, { useState } from "react";
import styled from "styled-components"; // 스타일 컴포넌트 라이브러리
import textProps from "../styles/textStyle"; // 텍스트 스타일 mixin 함수

//네비게이션 컴포넌트
const NavBar = () => {
    const projectTitle = "Project name";
    const [selectedButton, setSelectedButton] = useState("result");

    // 버튼 클릭 핸들러
    const handleButtonClick = (event) => {
        const {
            target: { name: selectedButton },
        } = event;
        if (selectedButton) {
            setSelectedButton(selectedButton);
        }
    };
    return (
        <>
            <ProjectTitle>{projectTitle}</ProjectTitle>
            <NavBarContainer>
                <ButtonContainer>
                    <NavButton
                        name="alpha"
                        selectedButton={selectedButton}
                        onClick={handleButtonClick}
                    >
                        Alpha
                    </NavButton>
                    <NavButton
                        name="bravo"
                        selectedButton={selectedButton}
                        onClick={handleButtonClick}
                    >
                        Bravo
                    </NavButton>
                    <NavButton
                        name="charlie"
                        selectedButton={selectedButton}
                        onClick={handleButtonClick}
                    >
                        Charlie
                    </NavButton>
                    <NavButton
                        name="delta"
                        selectedButton={selectedButton}
                        onClick={handleButtonClick}
                    >
                        Delta
                    </NavButton>
                    <NavButton
                        name="echo"
                        selectedButton={selectedButton}
                        onClick={handleButtonClick}
                    >
                        Echo
                    </NavButton>
                    <NavButton
                        name="result"
                        selectedButton={selectedButton}
                        onClick={handleButtonClick}
                    >
                        Result
                    </NavButton>
                </ButtonContainer>
            </NavBarContainer>
        </>
    );
};

// 프로젝트 타이틀
const ProjectTitle = styled.span`
    margin: 0 0 15px 50px;
    display: inline-block;
    ${textProps(20, "semiBold", "green")};
`;
// 네이게이션 컴포넌트 메인 컨테이너 div
const NavBarContainer = styled.div`
    margin: 0 50px 60px 50px;
    padding: 20px 50px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 6px;
    min-width: 450px;
`;
// 네비게이션 버튼 컨테이너 div
const ButtonContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    min-width: 350px;
`;
// 네비게이션 버튼
const NavButton = styled.button`
    transition: 150ms;
    background-color: transparent;
    :hover {
        transform: translate(0px, -3px);
    }
    ${({ theme, name, selectedButton }) =>
        textProps(
            18,
            "regular",
            `${name === selectedButton ? "green" : "darkGray"}`
        )};
`;

export default NavBar;
