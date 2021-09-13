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
    <br/>
    <br/>

# ❌ 과제 구현하지 못했어요

## 1. Input (type-checkbox) - checked 값 컨트롤

Main-row의 Name을 클릭하면 해당 row의 하위 sub-row 데이터를 불러와 서브 테이블을 구성. 서브 테이블 각각의 아이템을 선택하면 viewport 상단에 현재 선택된 아이템을 보여주고 있다. 선택하는 클릭 action과 해당 아이템이 선택되었는지 checkbox로 구현하면 직관적일꺼라 판단.

<br/>

여기서 문가 발생. 현재 checkbox의 선택 여부(체크 표시) 상태 값인 checked 속성 값을 지정하지 않아 아래와 같이 다른 서브테이블의 Name을 선택하고 돌아오면 checkbox가 풀려있는 오류를 발생.

> hooks(useState)을 통한 문제 해결 시도

checkbox의 checked 여부를 판단할 수 있는 boolean 값을 상태 값으로 관리하려고 했으나
