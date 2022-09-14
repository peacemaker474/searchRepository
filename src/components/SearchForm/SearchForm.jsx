import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import { fetchGetUserRepositories } from '../../network/api';
import SearchList from './SearchList';

export default function SearchForm() {
    const searchInput = useRef(null);
    const [searchValue, setSearchValue] = useState(null);
    const [repoData, setRepoData] = useState();
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        fetchGetUserRepositories().then((res) => {
            setRepoData(res);
        });
    }, [])

    const handleSeacrh = useCallback(evt => {
        evt.preventDefault();
        const value = evt.currentTarget.value;
        const search = repoData.filter((item) => item.name.includes(value));
        if (value === "") {
            setSearchData([]);
            setSearchValue(null);
        } else {
            setSearchData(search);
            setSearchValue(value)
        }
    }, [repoData]);

    return (
        <Wrapper>
            <Form>
                <Button type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" viewBox="0 0 512 512">
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
                    </svg>
                </Button>
                <Input type="text" placeholder="Github Repositories를 입력하세요" onChange={handleSeacrh} ref={searchInput} />
            </Form>
            <AnswerWrapper>
                {
                    !searchData.length && searchValue ?
                        <NoneTilte> 검색하신 레포지토리가 없습니다. </NoneTilte> :
                        <SearchList
                            searchData={searchData}
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            searchInput={searchInput}
                            setSearchData={setSearchData}
                        />
                }
            </AnswerWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;

const Form = styled.form`
    width: 80%;
    height: 50px;
    display: flex;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 -2px 6px 0 rgba(32, 33, 36, .28);
`;

const Input = styled.input`
    all: unset;
    width: 90%;
    font-size: 2rem;
    padding-left: 10px;
`;

const Button = styled.button`
    all: unset;
    width: 10%;
    text-align: center;
    font-size: 2.5rem;
`;

const AnswerWrapper = styled.div`
    width: 80%;
    box-shadow: 0 5px 6px 0 rgba(32, 33, 36, .28);
    border-radius: 0 0 5px 5px;
`;

const NoneTilte = styled.h2`
    font-size: 1.7rem;
    padding: 20px 0;
    text-align: center;
`;