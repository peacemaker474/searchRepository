import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { testGetIssues, fetchGetReposIssues } from "../network/api";
import Pagination from "../components/common/Pagination";
import Loading from "./Loading";
import IssueLists from "../components/Issues/IssueLists";

export default function IssuesPage() {
    const [issueData, setIssueData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [postsPerPage, setPostPerPage] = useState(10);

    useEffect(() => {
        // 현재 로컬스토리지에 저장된 각 레포지토리별로 이슈를 가져올 수 있도록 했습니다.

        // fetchGetReposIssues().then((res) => {
        //     setIssueData(res);
        //     setIsLoading(false);
        // });

        // 레포지토리 자체에 이슈가 없어서 테스트 용으로 만든겁니다.
        testGetIssues().then((res) => {
            setIssueData(res);
            setIsLoading(false);
        });

    }, [])

    return (
        isLoading ? <Loading /> :
            <IssuesWrapper>
                <IssueLists
                    issueData={issueData}
                    currentPage={currentPage}
                    postsPerPage={postsPerPage}
                />
                <Pagination
                    totalPage={issueData.length}
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </IssuesWrapper>
    );
}

const IssuesWrapper = styled.section`
    max-width: 1180px;
    margin: 0 auto;
    padding: 50px 0;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    border-radius: 10px;
    margin-top: 50px;
`;