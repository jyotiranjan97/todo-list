import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.h1`
    text-align: center;
    font-style: oblique;
`;

function Header(props) {
    return (
        <StyledHeader>
            {props.content}
        </StyledHeader>
    )
}

export default Header
