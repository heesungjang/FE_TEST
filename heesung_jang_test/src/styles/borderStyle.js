import { css } from "styled-components";

export const outline = (border, borderColor, direction) => {
    switch (direction) {
        case "top":
            return css`
                border-top: ${border} ${({ theme }) => theme.color[borderColor]};
            `;

        case "right":
            return css`
                border-right: ${border}
                    ${({ theme }) => theme.color[borderColor]};
            `;

        case "bottom":
            return css`
                border-bottom: ${border}
                    ${({ theme }) => theme.color[borderColor]};
            `;

        case "left":
            return css`
                border-left: ${border}
                    ${({ theme }) => theme.color[borderColor]};
            `;

        default:
            return css`
                border: ${border} ${({ theme }) => theme.color[borderColor]};
            `;
    }
};
