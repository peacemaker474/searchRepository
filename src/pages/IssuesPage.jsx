import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Pagination from "../components/common/Pagination";
import { fetchGetRepoIssues } from "../network/api";
import Loading from "./Loading";

export default function IssuesPage() {
    const [issueData, setIssueData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [postsPerPage, setPostPerPage] = useState(10);

    useEffect(() => {
        // 현재 로컬스토리지에 저장된 각 레포지토리별로 이슈를 가져올 수 있도록 했습니다.

        // getRegisterData().forEach(async (item) => {
        //     const response = await (await fetch(`${item.url}/issues?per_page=25`)).json();
        //     const newRes = response.map((data) => ({
        //         ...data,
        //         name: item.name,
        //         language: item.language,
        //     }))
        //     setIssueData(newRes.flat());
        // })

        // 레포지토리 자체에 이슈가 없어서 테스트 용으로 만든겁니다.
        fetchGetRepoIssues().then((res) => {
            setIssueData(res);
            setIsLoading(false);
        });

    }, [])

    const currentIssues = (issueData) => {
        const startIndex = currentPage * postsPerPage;
        const endIndex = (currentPage + 1) * postsPerPage;

        return issueData?.slice(startIndex, endIndex);
    }

    return (
        isLoading ? <Loading /> :
            <IssuesWrapper>
                {
                    <IssueLists>
                        <IssueList>
                            <RepoTitle> Repository </RepoTitle>
                            <IssueTitle> Issue </IssueTitle>
                            <IssueLanguage> Language </IssueLanguage>
                        </IssueList>
                        {
                            currentIssues(issueData) && currentIssues(issueData)?.map((item) => (
                                <IssueList key={item.id}>
                                    <RepoTitle> {item.name} </RepoTitle>
                                    <IssueLink href={item.html_url} target="_blank"> {item.title.length > 80 ? `${item.title.substr(0, 80)}...` : item.title} </IssueLink>
                                    <IssueLanguage> Typescript </IssueLanguage>
                                </IssueList>
                            ))
                        }
                    </IssueLists>
                }
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

const IssueLists = styled.ul`
    width: 80%;
    margin: 0 auto;
`;

const IssueList = styled.li`
    font-size: 1.3rem;
    padding: 15px 0;
    display: flex;

    &:first-child {
        font-weight: bold;
        margin-bottom: 5px;
        font-size: 1.8rem;
    }

    &:not(:first-child) {
        &:hover {
            background-color: rgba(127, 127, 127, .1);
        }
        p {
            padding-left: 5px;
        }
    }
`;

const RepoTitle = styled.p`
    width: 20%;
`;

const IssueTitle = styled.p`
    width: 80%;
`;


const IssueLink = styled.a`
    width: 80%;
    display: block;
    color: black;
    text-decoration: none;
`;

const IssueLanguage = styled.p`
    width: 10%;
    text-align: end;
`;