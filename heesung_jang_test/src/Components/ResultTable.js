import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import textProps from "../styles/textStyle";
import { outline } from "../styles/borderStyle";

const ResultTable = ({ resultList }) => {
    return (
        <Table>
            <thead>
                <TableTitleRow>
                    <TableHeader>Name</TableHeader>
                    <TableHeader>Foxtrot</TableHeader>
                    <TableHeader>Golf</TableHeader>
                </TableTitleRow>
            </thead>
            <tbody>
                {resultList.length > 0 &&
                    resultList.map((result, idx) => (
                        <TableRow key={idx}>
                            <TableCell>
                                <Name>{result[0]}</Name>
                            </TableCell>
                            <TableCell>{result[1].toFixed(5)}</TableCell>
                            <TableCell>{result[2].toFixed(5)}</TableCell>
                        </TableRow>
                    ))}
            </tbody>
        </Table>
    );
};

// 테이블 스타일 컴포넌트
const Table = styled.table`
    width: 100%;
    margin-top: 25px;
    border-collapse: collapse;
    ${textProps(14, "semiBold", "black")};
`;
// 테이블 헤더
const TableHeader = styled.th``;
// 데이터 테이블 제목 e.g) Name, Foxtrot, Golf
const TableTitleRow = styled.tr`
    line-height: 3rem;
    ${outline("1px solid", "darkGray", "bottom")};
`;
// 데이터 row
const TableRow = styled.tr``;
// 각 데이터 값 cell
const TableCell = styled.td`
    text-align: center;
    vertical-align: middle;
    padding: 10px;
`;

// 결과 값 Name
const Name = styled.span`
    padding: 5px;
    width: 80px;
    display: inline-block;
    ${outline("1px solid", "green")};
    ${textProps(12, "semiBold", "green")};
`;

ResultTable.propTypes = {
    resultList: PropTypes.array,
};

export default ResultTable;
