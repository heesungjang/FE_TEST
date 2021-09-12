import React, { useEffect, useState } from "react";

import styled from "styled-components"; // 스타일 컴포넌트 라이브러리
import { testApi } from "../shared/api";

const Result = (props) => {
    const [resultList, setResultList] = useState([]); // result List state 값
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
            </SearchBoxContainer>
        </LayoutContainer>
    );
};

// 컴포넌트 전체 레이아웃 스타일 컴포넌트
const LayoutContainer = styled.div``;

// 검색 input + Result title 컨테이너
const SearchBoxContainer = styled.div``;

// Result Title
const Title = styled.span``;

export default Result;
