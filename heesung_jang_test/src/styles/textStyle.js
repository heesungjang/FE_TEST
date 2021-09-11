import { css } from "styled-components";

/**
 * @역할 스타일 컴포넌트 text 스타일 mixin 함수
 * @requiredValue fontSize, fontWeight, color
 * @예시   ${(props) => textProps(45, "extraBold", "black")}
 * @참조 styles/theme
 */

const textProps = (fontSize, fontWeight, color, textAlign, lineHeight) => {
    return css`
        font-size: ${({ theme }) => theme.fontSize[fontSize]};
        font-weight: ${({ theme }) => theme.fontWeight[fontWeight]};
        color: ${({ theme }) => theme.color[color]};
        ${textAlign && `text-align: ${textAlign}`};
        ${lineHeight && `line-height: ${lineHeight}`};
    `;
};

export default textProps;
