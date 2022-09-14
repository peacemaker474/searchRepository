import React from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';

export default function Repositories({ repos }) {
    console.log(repos);
    return (
        <RepositoriesWrapper repos={repos?.length === 0 ? true : false}>
            {
                repos?.length === 0 ? <NoneReposTitle> 등록된 레포지토리가 없습니다. </NoneReposTitle> :
                    repos?.map((item) => (
                        <RepositoryList key={item.id} data-name={item.name}>
                            <RepoHeader>
                                <RepoTitle> {item.name} </RepoTitle>
                                {item.language ? <RepoLanguage> {item.language} </RepoLanguage> : null}
                            </RepoHeader>
                            <RepoDescription> {item.description} </RepoDescription>
                            <RepoFooter>
                                <OnwerBox>
                                    <OwnerImage src={`${item.owner.avatar_url}`} />
                                    <RepoOwner> {item.owner.login} </RepoOwner>
                                </OnwerBox>
                                <RepoUpdated> Updated {item.updated_at.slice(0, 10).replaceAll(",", "-")} </RepoUpdated>
                            </RepoFooter>
                            <Toggle repoId={item.id} />
                        </RepositoryList>
                    ))
            }
        </RepositoriesWrapper>
    );
}

const RepositoriesWrapper = styled.ul`
    width: 60%;
    height: 40%;
    margin: 0 auto;
    margin-top: 50px;
    display: ${({ repos }) => repos ? "block" : "grid"};
    grid-gap: 30px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    position: relative;
`;

const NoneReposTitle = styled.h2`
    width: 100%;
    font-size: 3.5rem;
    text-align: center;
`;

const RepositoryList = styled.li`
    width: 90%;
    height: 100%;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    position: relative;
`;

const RepoHeader = styled.div`
    width: 90%;
    height: 30%;
    margin: 0 auto;
    display: flex;
    align-items: center;
`;

const RepoTitle = styled.h2`
    height: 100%;
    font-size: 2rem;
    margin-right: 10px;
    line-height: 7rem;
    word-break: break-all;
`;

const RepoLanguage = styled.span`
    width: 60px;
    height: 30px;
    text-align: center;
    font-size: 1rem;
    line-height: 30px;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 5px;
`;

const RepoDescription = styled.p`
    width: 90%;
    height: 50%;
    margin: 0 auto;
    font-size: 1.5rem;
    line-height: 2.5rem;
    word-break: keep-all;
`;

const RepoFooter = styled.div`
    width: 95%;
    height: 20%;
    display: flex;
    align-items: center;
    margin: 0 auto;
`;

const OnwerBox = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    margin: 0;
`;

const OwnerImage = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
`;

const RepoOwner = styled.span`
    padding-left: 10px;
    font-size: 1.3rem;
`;

const RepoUpdated = styled.span`
    width: 40%;
    text-align: end;
    font-size: 1.1rem;
`;