import styled from "styled-components";

export const Wrapper = styled.section`
    margin: 10px 0;
    background: ${({ theme }) => theme.color.white};
    box-shadow: 0 0 5px ${({ theme }) => theme.color.alto};
`;

export const Header = styled.header`
    border-bottom: 1px solid${({ theme }) => theme.color.alto};
    display: grid;
    align-items: center;
    padding: 18px;
    justify-content: space-between;
    grid-template-columns: auto auto;
    grid-gap: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
         grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 20px;
`;

export const Body = styled.div`
    padding: 20px;
`;
