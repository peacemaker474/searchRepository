import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

export default function Toggle({ repoId, handleRemoveRepo }) {
    const [isVisble, setIsVisble] = useState(false);

    const handleToggle = useCallback(() => {
        setIsVisble(!isVisble);
    }, [isVisble]);

    return (
        <ToggleWrapper onClick={handleToggle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 128 512">
                <path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z" />
            </svg>
            {isVisble && <RemoveBtn onClick={handleRemoveRepo(repoId)}> 🗑 </RemoveBtn>}
        </ToggleWrapper>
    );
}

const ToggleWrapper = styled.div`
    width: 20px;
    height: 20px;
    position: absolute;
    top: 5%;
    right: 3%;
    cursor: pointer;
`;

const RemoveBtn = styled.button`
    all: unset;
    width: 30px;
    height: 20px;
    padding: 10px;
    background-color: white;
    position: absolute;
    bottom: -220%;
    right: 0%;
    border-radius: 5px;
    font-size: 2.5rem;
    text-align: center;
    font-weight: bold;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;