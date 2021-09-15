import React from "react";
import styled from "styled-components";

import textProps from "../styles/textStyle";
import logo from "../assets/hits_logo_square.png"; // 로고 이미지

// 해더 컴포넌트
const Header = () => {
    return (
        <HeaderContainer>
            <Logo src={logo} alt="logo" />
            <CompanyName>HITS</CompanyName>
        </HeaderContainer>
    );
};

// 회사명 + 로고 콘테이너 스타일 컴포넌트
const HeaderContainer = styled.div`
    margin-bottom: 35px;
    padding: 10px 20px;
    border-bottom: ${({ theme }) => `2px solid ${theme.color.gray}`};
`;
// 회사명
const CompanyName = styled.span`
    margin-left: 10px;
    ${(props) => textProps(45, "extraBold", "black")}
    font-size: 45px;
    font-weight: 700;
`;
// 회사 로고 이미지
const Logo = styled.img`
    width: 35px;
    height: 35px;
`;

export default Header;
