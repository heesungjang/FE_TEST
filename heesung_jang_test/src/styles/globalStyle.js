import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  &:focus,&:hover,&:active{
  outline:none 
  }
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
button {
  border: 0;
  cursor: pointer;
}
body{
    height: 100vh;
    position: relative;
   
  /* 스크롤바 제거 */
  &::-webkit-scrollbar {
    display: none;
  }
}
`;
