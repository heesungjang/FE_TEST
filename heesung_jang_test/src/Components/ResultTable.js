import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import textProps from "../styles/textStyle";
import { outline } from "../styles/borderStyle";
import { testApi } from "../shared/api";

const ResultTable = ({ resultList, handleSelectSubRow, setCheckedState }) => {
    const [isFetching, setIsFetching] = useState(false); // data 요청중  판별 값
    const [selectedNameIdx, setSelectedNameIdx] = useState(null); // 클릭한 Name의 인덱스 값
    const [selectedName, setSelectedName] = useState(""); // 클리한 Name 값
    const [subData, setSubData] = useState([]); // SubRow 데이터 배열

    // const [checkedState, setCheckedState] = useState([]); // SubRow 선택 판별 배열 값

    // 서브 테이블 데이터 요청 함수
    const handleSubTableReq = async (e) => {
        // 이름 클릭시 id  값 저장
        const id = parseInt(e.target.getAttribute("id"));
        // 이름 클릭시 name attribute 값 저장
        const name = e.target.getAttribute("name");

        if (selectedName === "") {
            setSelectedName(name);
            setSelectedNameIdx(id);
        }

        if (selectedName === name && selectedNameIdx === id) {
            setSubData([]);
            setSelectedName("");
            setSelectedNameIdx(null);
            return;
        }

        if (selectedName !== name && selectedNameIdx !== id) {
            setSubData([]);
            setSelectedNameIdx(id);
            setSelectedName(name);
        }

        if (isFetching === false) {
            try {
                setIsFetching(true);
                await testApi.getResult(name).then((res) => {
                    if (res.status === 200) {
                        setSubData(res.data);
                        setCheckedState(new Array(res.data.length).fill(false));
                        console.log(res.data);
                    }
                });
                setIsFetching(false);
            } catch (error) {
                console.log(error);
            }
        }
    };
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
                        <React.Fragment key={idx}>
                            <TableRow key={idx} isSubRow={subData.length > 0}>
                                <TableCell>
                                    <Name
                                        id={idx}
                                        name={result[0]}
                                        onClick={handleSubTableReq}
                                    >
                                        {result[0]}
                                    </Name>
                                </TableCell>
                                <TableCell>{result[1].toFixed(5)}</TableCell>
                                <TableCell>{result[2].toFixed(5)}</TableCell>
                            </TableRow>
                            {subData.length > 0 &&
                                selectedName === result[0] &&
                                selectedNameIdx === idx && (
                                    <>
                                        <SubTableRow>
                                            <SubTableCell>id</SubTableCell>
                                            <SubTableCell>Foxtrot</SubTableCell>
                                            <SubTableCell>Golf</SubTableCell>
                                        </SubTableRow>
                                        {subData.map((subRow, idx) => (
                                            <SubTableRow key={idx}>
                                                <SubTableCell>
                                                    <div>
                                                        <Checkbox
                                                            type="checkbox"
                                                            value={subRow[0]}
                                                            onChange={() =>
                                                                handleSelectSubRow(
                                                                    idx
                                                                )
                                                            }
                                                        />
                                                        <ID>{subRow[0]}</ID>
                                                    </div>
                                                </SubTableCell>
                                                <SubTableCell>
                                                    {subRow[1].toFixed(5)}
                                                </SubTableCell>
                                                <SubTableCell>
                                                    {subRow[2].toFixed(5)}
                                                </SubTableCell>
                                            </SubTableRow>
                                        ))}
                                    </>
                                )}
                        </React.Fragment>
                    ))}
            </tbody>
        </Table>
    );
};

//---------------main row-------------------
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
const TableRow = styled.tr`
    ${(props) =>
        props.isSubRow ? null : outline("1px solid", "gray", "bottom")}
`;
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
    cursor: pointer;
    ${outline("1px solid", "green")};
    ${textProps(12, "semiBold", "green")};
`;

//---------------sub row-------------------

// 각 데이터 값 cell
const SubTableCell = styled.td`
    text-align: center;
    vertical-align: middle;
    padding: 10px;
`;
const SubTableRow = styled.tr``;

const ID = styled.span`
    margin-left: 10px;
`;

const Checkbox = styled.input``;

ResultTable.propTypes = {
    resultList: PropTypes.array,
    handleSelectSubRow: PropTypes.func,
    setCheckedState: PropTypes.func,
};

export default ResultTable;
