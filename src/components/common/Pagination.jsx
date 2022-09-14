import { useMemo } from "react";
import { useCallback } from "react";
import styled from "styled-components";

export default function Pagination({ totalPage, postsPerPage, setCurrentPage, currentPage }) {

    const pageNumbers = useMemo(() => {
        const pages = [];
        for (let i = 1; i <= Math.ceil(totalPage / postsPerPage); i++) {
            pages.push(i);
        }
        return pages;
    }, [totalPage, postsPerPage])

    const handleChangePageNumber = useCallback(number => () => {
        setCurrentPage(number - 1);
    }, [setCurrentPage]);

    return (
        <Wrapper>
            <PageUl>
                {
                    pageNumbers?.map((number) => (
                        <PageLi key={number} onClick={handleChangePageNumber(number)} aria-current={number === currentPage + 1 ? "page" : null}>
                            {number}
                        </PageLi>
                    ))
                }
            </PageUl>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 10%;
    margin-top: 50px;
`;

const PageUl = styled.ul`
    width: 50%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const PageLi = styled.li`
    font-size: 1.3rem;
    padding: 7px 10px;
    cursor: pointer;
    &[aria-current] {
        background-color: rgba(127, 127, 127, .15);
        border-radius: 5px;
        cursor: revert;
        transform: revert;
        font-weight: bold;
    }
    &:hover {
        background-color: rgba(127, 127, 127, .15);
        font-weight: bold;
        border-radius: 5px;
    }
`;