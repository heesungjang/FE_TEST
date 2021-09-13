import React, { useEffect, useState } from "react";

import styled from "styled-components"; // 스타일 컴포넌트 라이브러리
import textProps from "../styles/textStyle";
import { testApi } from "../shared/api";
import { outline } from "../styles/borderStyle";
import ResultTable from "../Components/ResultTable";

const Result = (props) => {
    const [resultList, setResultList] = useState([]); // result List state 값
    const [searchResult, setSearchResult] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); // 검색 input 입력 값 control state
    const [isFetching, setIsFetching] = useState(false); // 데이터 요청이 끝났는지 판별하는 boolean 값
    const [checkedState, setCheckedState] = useState([]); // SubRow 선택 판별 배열 값

    // 전체 결과 (result) 서버 데이터 요청  함수
    const getResults = async () => {
        if (isFetching) {
            return;
        }
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
            window.alert("데이터 요청 실패");
        }
    };

    // input value 헨들러
    const handleOnChange = (e) => {
        // 입력 값
        const searchTerm = e.target.value;

        // white space(띄어쓰기) regex
        const regexp = /^\S*$/;

        // 띄어쓰기 입력시 alert 처리
        if (!regexp.test(searchTerm)) {
            return window.alert("띄어쓰기는 지원하지 않습니다.");
        }
        // 입력 값 컨트롤

        setSearchTerm(searchTerm);
    };

    // 검색 버튼 헨들러
    const handleOnSearch = async () => {
        // 검색어가 없는 경우 alert 처리
        if (searchTerm === "") {
            return window.alert("검색어를 입력해주세요.");
        }

        // 검색 결과 필터링, 사용가자 입력한 search term으로 현재 state 배열 필터
        setSearchResult(
            resultList.filter(
                (mainRowData) =>
                    mainRowData[0].toLowerCase() === searchTerm.toLowerCase()
            )
        );

        // search term 값 초기화
        setSearchTerm("");
    };

    // 검색창 enter key press 헨들러
    const handleOnEnter = (e) => {
        if (e.key === "Enter") {
            handleOnSearch();
        }
    };

    // sub row 데이터 선택 헨들러
    const handleSelectSubRow = (e) => {
        console.log(e.target);
        const filter = checkedState.find(
            (row) =>
                row.name === e.target.value && row.selectedRow === e.target.id
        );
        if (filter !== undefined) {
            setCheckedState(checkedState.filter((row) => row !== filter));
            return;
        } else {
            setCheckedState((prev) => [
                ...prev,
                {
                    name: e.target.value,
                    selectedRow: e.target.id,
                },
            ]);
        }
    };

    // // 데이터 선택 취소  버튼
    const handleCancelButton = (name, position) => {
        const filter = checkedState.find(
            (row) => row.name === name && row.selectedRow === position
        );
        if (filter !== undefined) {
            return setCheckedState(
                checkedState.filter((row) => row !== filter)
            );
        }
    };

    // sub row clear 버튼  헨들러
    const handleResetSelection = () => {
        setCheckedState([]);
    };

    // 전체 선택 버튼 헨들러
    const handleSelectAll = (subData) => {
        subData.forEach((row) => {
            row?.data.forEach((subRow, idx) => {
                console.log(row);
                setCheckedState((prev) => [
                    ...prev,
                    {
                        name: row.name,
                        selectedRow: idx + 1,
                    },
                ]);
            });
        });
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
                            value={searchTerm}
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
            <>
                {checkedState.length > 0 && (
                    <SelectionTitle>Data Selection</SelectionTitle>
                )}
                {checkedState.length > 0 &&
                    checkedState.map((row, idx) => (
                        <SubRowSelectionContainer key={idx}>
                            <SelectedRowItem>{`${row.name} - ${row.selectedRow}`}</SelectedRowItem>
                            <DeleteButton
                                onClick={() =>
                                    handleCancelButton(
                                        row.name,
                                        row.selectedRow
                                    )
                                }
                            >
                                <span>X</span>
                            </DeleteButton>
                        </SubRowSelectionContainer>
                    ))}
            </>
            {/* 결과 데이터 테이블 컴포넌트 */}
            <ResultTable
                resultList={searchResult.length > 0 ? searchResult : resultList}
                handleSelectSubRow={handleSelectSubRow}
                setCheckedState={setCheckedState}
                checkedState={checkedState}
                handleResetSelection={handleResetSelection}
                handleSelectAll={handleSelectAll}
            />
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
    background-color: white;
    align-items: end;
    padding-bottom: 35px;
    justify-content: space-between;
    ${outline("1px solid", "green", "bottom")}
`;

// Result 타이틀
const Title = styled.span`
    ${textProps(30, "semiBold", "black")}
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

//--------------Sub Row selection---------------

const SubRowSelectionContainer = styled.div`
    width: 150px;
    margin: 20px 0 0 10px;
    display: flex;
    justify-content: space-between;
`;

const SelectedRowItem = styled.span`
    ${textProps(16, "regular", "darkGray")}
`;

const DeleteButton = styled.button`
    transition: 150ms;
    background-color: transparent;
    span {
        ${textProps(18, "regular", "darkGray")}
    }
    :hover {
        transform: rotate(20deg);
    }
`;

const SelectionTitle = styled.span`
    display: inline-block;
    margin: 10px 0 0 10px;
    ${textProps(14, "semiBold", "green")};
`;

export default Result;
