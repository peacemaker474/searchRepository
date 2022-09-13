import styled from 'styled-components';

const Wrapper = styled.div`
    width: 90%;
    height: 10%;
    font-size: 2.5rem;
    text-align: center;
    font-weight: bold;
    margin: 0 auto;
`;

export default function Loading() {
    return (
        <Wrapper>
            Loading...
        </Wrapper>
    );
}