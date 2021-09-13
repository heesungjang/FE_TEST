// px 단위의 폰트 사이즈를 인자로 받아 rem 값 반환
const calRem = (size) => `${size / 16}rem`;

// fontWeight은 아래 3개로 통일
const fontWeight = {
    extraBold: 800,
    semiBold: 600,
    regular: 400,
};

// 테스트 프로젝트서 사용되는 색상
const color = {
    green: "#00b894",
    purple: "#a29bfe",
    darkPurple: "#6c5ce7",
    black: "#292b2d",
    gray: "#dfe6e9",
    darkGray: "#636e72",
    red: "#d63031",
};

// 테스트 프로젝트서 사용되는 폰트 사이즈
const fontSize = {
    12: calRem(12),
    14: calRem(14),
    16: calRem(18),
    18: calRem(18),
    20: calRem(20),
    30: calRem(30),
    45: calRem(45),
};

const theme = {
    fontWeight,
    fontSize,
    color,
};

export default theme;
