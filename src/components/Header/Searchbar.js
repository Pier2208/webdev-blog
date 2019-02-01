import React from 'react'
import styled from 'styled-components'

//styled components
const Wrapper = styled.div`
    width: 100%;
    height:8rem;
    background: #48483A;
`
const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    h1 {
        color: white;
        font-size: 3rem;
    }
`


const Searchbar = ({ title }) => (
    <Wrapper>
        <Container>
            <h1>{title}</h1>
        </Container>
    </Wrapper>
)


export default Searchbar
