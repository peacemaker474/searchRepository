import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Repositories from '../components/Repository/Repositories';
import { getRegisterData } from '../network/api';

const ReposWrapper = styled.main`
    max-width: 1180px;
    height: 100vh;
    margin: 0 auto;
`;

export default function ReposPage() {
    const [repos, setRepos] = useState();

    useEffect(() => {
        setRepos(getRegisterData());
    }, []);

    return (
        <ReposWrapper>
            <Repositories repos={repos} />
        </ReposWrapper>
    );
}