import styled from "styled-components";


export default function IssueLists({ issueData, currentPage, postsPerPage }) {
    const currentIssues = (issueData) => {
        const startIndex = currentPage * postsPerPage;
        const endIndex = (currentPage + 1) * postsPerPage;

        return issueData?.slice(startIndex, endIndex);
    }

    return (
        <IssuesLists>
            <IssuesList>
                <RepoTitle> Repository </RepoTitle>
                <IssueTitle> Issue </IssueTitle>
                <IssueLanguage> Language </IssueLanguage>
            </IssuesList>
            {
                currentIssues(issueData) && currentIssues(issueData)?.map((issue) => (
                    <IssuesList key={issue.id}>
                        <RepoTitle> {issue.name} </RepoTitle>
                        <IssueLink href={issue.html_url} target="_blank">
                            {issue.title.length > 80 ? `${issue.title.substr(0, 80)}...` : issue.title}
                        </IssueLink>
                        <IssueLanguage> Typescript </IssueLanguage>
                    </IssuesList>
                ))
            }
        </IssuesLists>
    );
}

const IssuesLists = styled.ul`
    width: 80%;
    margin: 0 auto;
`;

const IssuesList = styled.li`
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
            background-color: rgba(127, 127, 127, .05);
            a {
                font-weight: bold;
            }
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