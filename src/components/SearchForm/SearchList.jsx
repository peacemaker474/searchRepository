import React from 'react';
import styled from 'styled-components';
import { getRegisterData, removeReposData, setRegisterData } from '../../network/api';

const AnswerLists = styled.ul`
    width: 100%;
`;

const AnswerList = styled.li`
    font-size: 2rem;
    padding-left: 10px;
    &:not(:last-child) {
        margin-bottom: 15px;
    }
    &:hover {
        background-color: rgba(127, 127, 127, .1);
    }
`;

const AnswerTitleBox = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
`;

const AnswerSearch = styled.span`
    width: 10%;
    padding-left: 20px;
`;

const AnswerTitle = styled.span`
    width: 83%;

    span {
        color: blue;
        font-weight: bold;
    }
`;

const RegisterBtn = styled.button`
    all:unset;
    width: 5%;
    height: 100%;
    font-size: 1.8rem;
    cursor: pointer;
`;

function SearchList({ searchData, searchValue, setSearchValue, searchInput, setSearchData }) {
    const handleRegisterRepo = (evt) => {
        const filterId = evt.target.previousSibling.innerText;
        const filterData = searchData.filter((value) => value.name === filterId);

        setRegisterData(filterData[0]);

        setSearchValue(null);
        setSearchData([]);
        searchInput.current.value = "";
    }

    const handleRemoveRepo = (evt) => {
        removeReposData(evt.target.id);

        setSearchValue(null);
        setSearchData([]);
        searchInput.current.value = "";
    }

    return (
        <AnswerLists>
            {
                searchData && searchData.slice(0, 10).map((item) => (
                    <AnswerList key={item.id}>
                        <AnswerTitleBox>
                            <AnswerSearch> 🔍 </AnswerSearch>
                            <AnswerTitle>
                                {
                                    item.name.includes(searchValue) ? (
                                        <>
                                            {item.name.split(searchValue)[0]}
                                            <span>{searchValue}</span>
                                            {item.name.split(searchValue)[1]}
                                        </>
                                    ) : (
                                        item.name
                                    )
                                }
                            </AnswerTitle>
                            <RegisterBtn onClick={handleRegisterRepo}> 등록 </RegisterBtn>
                            {
                                getRegisterData()?.map((value) => (
                                    value.name === item.name ? <RegisterBtn key={value.id} id={value.id} onClick={handleRemoveRepo}> 삭제 </RegisterBtn> : null
                                ))
                            }
                        </AnswerTitleBox>
                    </AnswerList>
                ))
            }
        </AnswerLists>
    )
}

export default SearchList;