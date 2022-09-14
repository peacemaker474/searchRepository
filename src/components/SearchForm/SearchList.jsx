import React from 'react';
import styled from 'styled-components';
import { getRegisterData, removeReposData, setRegisterData } from '../../network/api';

export default function SearchList({ searchData, searchValue, setSearchValue, searchInput, setSearchData }) {

    const handleRegisterRepo = (evt) => {
        const filterId = evt.target.dataset.name;
        const filterData = searchData.filter((value) => value.name === filterId);

        if (setRegisterData(filterData[0])) {
            setSearchValue(null);
            setSearchData([]);
            searchInput.current.value = "";
        }
    }

    const handleRemoveRepo = (evt) => {
        if (removeReposData(evt.target.id)) {
            setSearchValue(null);
            setSearchData([]);
            searchInput.current.value = "";
        };
    }

    return (
        <AnswerLists>
            {
                searchData && searchData.slice(0, 10).map((item) => (
                    <AnswerList key={item.id}>
                        <AnswerTitleBox>
                            <AnswerSearch>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30%" height="30%" viewBox="0 0 512 512">
                                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
                                </svg>
                            </AnswerSearch>
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
                            <ButtonBox>
                                <RegisterBtn onClick={handleRegisterRepo} data-name={item.name}> 등록 </RegisterBtn>
                                {
                                    getRegisterData()?.map((value) => (
                                        value.name === item.name ? <DeleteBtn key={value.id} id={value.id} onClick={handleRemoveRepo}> 삭제 </DeleteBtn> : null
                                    ))
                                }
                            </ButtonBox>
                        </AnswerTitleBox>
                    </AnswerList>
                ))
            }
        </AnswerLists>
    )
}

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
    padding: 15px 0;
    display: flex;
    align-items: center;
`;

const AnswerSearch = styled.span`
    width: 10%;
    padding-left: 20px;
`;

const AnswerTitle = styled.span`
    width: 73%;
    margin-right: 15px;

    span {
        color: ${({ theme }) => theme.color.deepBlue};
        font-weight: bold;
    }
`;

const ButtonBox = styled.div`
    width: 15%;
    height: 50%;
    display: flex;
    justify-content: center;
`;

const RegisterBtn = styled.button`
    all:unset;
    width: 40%;
    height: 100%;
    font-size: 1.5rem;
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.green};
    color: ${({ theme }) => theme.color.white};
    padding: 7px;
    margin-right: 5px;
    text-align: center;
    border-radius: 5px;
`;

const DeleteBtn = styled(RegisterBtn)`
    background-color: ${({ theme }) => theme.color.lightBlue};
    color: ${({ theme }) => theme.color.white};
`;