import React, { useState } from 'react';
import styled from 'styled-components';

const ToggleWrapper = styled.div`
    position: absolute;
    top: 5%;
    right: 2%;
    width: 20px;
    height: 20px;
    z-index: 2;
`;

const RemoveBtn = styled.button`
    all: unset;
    width: 20px;
    height: 10px;
    padding: 10px;
    background-color: white;
    position: absolute;
    top: 20%;
    right: 5%;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

function Toggle() {
    const [isVisble, setIsVisble] = useState(false);

    const handleToggle = (evt) => {
        setIsVisble(!isVisble);
    }

    const handleRemoveRepo = (evt) => {
        console.log("test");
    }

    return (
        <ToggleWrapper onClick={handleToggle}>
            {
                !isVisble ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 128 512">
                        <path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z" />
                    </svg> :
                    <RemoveBtn onClick={handleRemoveRepo}> 삭제 </RemoveBtn>
            }
        </ToggleWrapper>
    );
}

export default Toggle;