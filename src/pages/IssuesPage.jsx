import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { fetchGetRepoIssues, getRegisterData } from "../network/api";

const IssuesWrapper = styled.section`
    max-width: 1180px;
    height: 100vh;
    margin: 0 auto;
`;

const Loading = styled.h2`
    font-size: 2rem;
`;

const IssueLists = styled.ul`

`;

const IssueList = styled.li`
    font-size: 1.5rem;
    padding: 5px 0;

    &:first-child {
        margin-bottom: 5px;
    }
`;

const RepoTitle = styled.span`
    padding-right: 30px;
`;

const IssueTitle = styled.span`

`;


const IssueLink = styled.a`
    color: black;
    text-decoration: none;
`;

function IssuesPage() {
    const [issueData, setIssueData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // getRegisterData().forEach(async (item) => {
        //     const response = await (await fetch(`${item.url}/issues`)).json();
        //     const newData = [
        //         ...issueData,
        //         response
        //     ]
        //     setIssueData(newData);
        // })

        fetchGetRepoIssues().then((res) => {
            setIssueData(res);
            setIsLoading(false);
        });

    }, [])

    return (
        <IssuesWrapper>
            {
                isLoading ? <Loading> Loading... </Loading> :
                    <IssueLists>
                        <IssueList>
                            <RepoTitle> Repository </RepoTitle>
                            <IssueTitle> Issue </IssueTitle>
                        </IssueList>
                        {
                            issueData && issueData?.map((item) => (
                                <IssueList key={item.id}>
                                    <RepoTitle> Typescript </RepoTitle>
                                    <IssueLink href={item.html_url} target="_blank"> {item.title} </IssueLink>
                                </IssueList>
                            ))
                        }
                    </IssueLists>
            }
        </IssuesWrapper>
    );
}

export default IssuesPage;