import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import Repositories from '../components/Repository/Repositories';
import { getRegisterData, removeReposData } from '../network/api';

const ReposWrapper = styled.main`
    max-width: 1180px;
    height: 100vh;
    margin: 0 auto;
`;

export default function ReposPage() {
    const [repos, setRepos] = useState();

    useEffect(() => {
        const item = getRegisterData();
        if (!item || item?.length !== 0) setRepos(item);
    }, []);

    const handleRemoveRepo = useCallback((repoId) => () => {
        removeReposData(repoId)
        const newRepo = repos.filter((item) => String(item.id) !== String(repoId));
        setRepos(newRepo);
    }, [repos]);

    return (
        <ReposWrapper>
            <Repositories
                repos={repos}
                handleRemoveRepo={handleRemoveRepo}
            />
        </ReposWrapper>
    );
}