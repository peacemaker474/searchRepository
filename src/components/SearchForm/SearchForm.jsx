import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import { fetchGetUserRepositories } from '../../network/api';
import SearchList from './SearchList';

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
`;

const NoneTilte = styled.h2`
    font-size: 2.5rem;
    padding: 20px 0;
    text-align: center;
`;

function SearchForm() {
    const searchInput = useRef(null);
    const [searchValue, setSearchValue] = useState(null);
    const [repoData, setRepoData] = useState();
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        fetchGetUserRepositories().then((res) => {
            setRepoData(res);
        });
    }, [])

    const handleSeacrh = async (evt) => {
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
    }

    return (
        <Wrapper>
            <Form>
                <Button type="button">
                    🔍
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

export default SearchForm;