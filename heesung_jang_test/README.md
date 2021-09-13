# HITS 프론트엔드 과제 - 장희성

## 개요

기간 : 2021-07-23 ~ 2021-09-03 (43일) <br/>

HITS 프론트엔드 채용 과제 전형 프로젝트 <br/>

github 주소: https://github.com/heesungjang/FE_TEST
<br/>

# 💻 사용기술

-   React
-   상태관리 : Hooks(useState)
-   통신 : Axios
-   스타일 : styled-components (theme-provider, createGlobalStyle)

> 라이브러리

-   axios
-   prop-types
-   styled components

<br/>

# 💡 과제 요구 사항 (필수)

-   1.페이지에 들어오면 바로 `/result/` api를 호출해서 테이블을 구성

-   2.스크롤시 Result 타이틀은 고정.

-   3.소수는 반올림해서 5번째자리까지 표현.

-   4.각 column옆 버튼을 누르면, 해당 column 기준으로 오름차순, 내림차순 정렬.

-   5.각 row(이하 main row)에서 name을 선택하면 /result/{name}/api를 호출해서 서브테이블을 구성

-   6.서브테이블에서 각 row(이하 sub row)를 선택하면 현재 선택된 아이템들을 알 수 구현.

-   7.선택된 아이템 옆 x버튼을 누르면 선택에서 제외

-   8.여러 main row들의 서브테이블에서 선택할 수 있게 구현.

-   9.검색 창에 name을 넣으면 해당 name에 해당하는 값이 출력되게 구현

-   10.검색한 name에서 아이템들을 추가할 수 있게 해주세요. (5와 동일)

-   11.여러 번 검색해서 계속해서 추가할 수 있게 해주세요. (이전에 검색해서 추가한 아이템들이 사라지지 않도록)
