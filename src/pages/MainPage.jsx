import React from 'react';
import styled from 'styled-components';
import SearchForm from '../components/SearchForm/SearchForm';

const MainPageWrapper = styled.main`
    max-width: 1180px;
    height: 100vh;
    margin: 0 auto;
`;

export default function MainPage() {
    return (
        <MainPageWrapper>
            <SearchForm />
        </MainPageWrapper>
    );
}