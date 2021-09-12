import React, { useEffect, useState } from "react";

import styled from "styled-components"; // 스타일 컴포넌트 라이브러리
import textProps from "../styles/textStyle";
import { testApi } from "../shared/api";
import { outline } from "../styles/borderStyle";
import ResultTable from "../Components/ResultTable";

const Result = (props) => {
    const [resultList, setResultList] = useState([]); // result List state 값
    const [searchTerm, setSearchTerm] = useState(""); // 검색 input 입력 값 control state

    const [isFetching, setIsFetching] = useState(false); // 데이터 요청이 끝났는지 판별하는 boolean 값
    const [errorMessage, setErrorMessage] = useState(""); // 서버 통신 에러 메세지

    // 전체 결과 (result) 서버 데이터 요청  함수
    const getResults = async () => {
        try {
            setIsFetching(true);
            await testApi.getAllResults().then((res) => {
                if (res.status === 200 && res.data.length > 0) {
                    setResultList(res.data);
                }
            });
            setIsFetching(false);
        } catch (error) {
            // 에러 메세지가 있다면 setErrorMessage()로 예외처리
            setErrorMessage("요청 실패");
            window.alert("데이터 요청 실패");
        }
    };

    // input value 헨들러
    const handleOnChange = (e) => {
        const {
            target: { value: searchTerm },
        } = e;
        if (searchTerm) {
            setSearchTerm(searchTerm);
        }
    };

    // 검색 버튼 헨들러
    const handleOnSearch = async () => {
        // white space(띄어쓰기) regex
        const regexp = /^\S*$/;
        // 검색어가 없거나 검색어에 띄어쓰기가 포함된 경우 alert 처리
        if (searchTerm === "") {
            return window.alert("검색어를 입력해주세요.");
        }
        if (!regexp.test(searchTerm)) {
            return window.alert("띄어쓰기는 지원하지 않습니다.");
        }

        // 검색 결과 필터링, 사용가자 입력한 search term으로 현재 state 배열 필터
        setResultList(
            resultList.filter(
                (mainRowData) =>
                    mainRowData[0].toLowerCase() === searchTerm.toLowerCase()
            )
        );
    };

    // 검색창 enter key press 헨들러
    const handleOnEnter = (e) => {
        if (e.key === "Enter") {
            handleOnSearch();
        }
    };

    // 랜더링시 항상 getResult 함수를 실행, 전체 result 값을 받아온다.
    useEffect(() => {
        getResults();
    }, []);

    return (
        <LayoutContainer>
            <SearchBoxContainer>
                <Title>Result</Title>
                <UnitContainer>
                    <SearchUnit>
                        <SearchInput
                            placeholder="Search by name"
                            onChange={handleOnChange}
                            onKeyPress={handleOnEnter}
                        />
                        <SearchButton onClick={handleOnSearch}>
                            search
                        </SearchButton>
                    </SearchUnit>
                    <DownloadButton>download</DownloadButton>
                </UnitContainer>
            </SearchBoxContainer>
            <ResultTable resultList={resultList} />
        </LayoutContainer>
    );
};

// 컴포넌트 전체 레이아웃 스타일 컴포넌트
const LayoutContainer = styled.div`
    margin: 0px 80px;
`;

// 검색 input + Result title 컨테이너
const SearchBoxContainer = styled.div`
    display: flex;
    align-items: end;
    padding-bottom: 35px;
    justify-content: space-between;
    ${outline("1px solid", "green", "bottom")}
`;

// Result 타이틀
const Title = styled.span`
    ${textProps(30, "semiBold", "black")};
`;

const UnitContainer = styled.div`
    display: flex;
`;

// 검색 unit (인풋 + 검색 버튼) 컨테이너
const SearchUnit = styled.div`
    height: 40px;
    ${outline("1px solid", "purple")}
`;

// 검색 input box
const SearchInput = styled.input`
    border: none;
    width: 200px;
    text-align: center;
    ${textProps(18, "semiBold", "black")};
    ::placeholder {
        ${textProps(18, "semiBold", "gray")};
    }
`;

// 검색 button
const SearchButton = styled.button`
    height: 100%;
    padding: 5px 10px;
    background-color: transparent;
    ${outline("1.2px solid", "purple", "left")}
    ${textProps(14, "regular", "darkPurple")};
`;

// 다운로드 button
const DownloadButton = styled.button`
    margin-left: 15px;
    padding: 5px 10px;
    background-color: transparent;
    ${outline("1.2px solid", "purple")}
    ${textProps(14, "regular", "darkPurple")};
`;

export default Result;
