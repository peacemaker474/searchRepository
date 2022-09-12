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
                        {
                            issueData && issueData?.map((item) => (
                                <IssueList key={item.id}>
                                    {item.title}
                                </IssueList>
                            ))
                        }
                    </IssueLists>
            }
        </IssuesWrapper>
    );
}

export default IssuesPage;