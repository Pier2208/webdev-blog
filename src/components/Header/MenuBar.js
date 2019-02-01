import React from 'react'
import styled from 'styled-components'

//styled components
const Wrapper = styled.div`
    width: 100%;
    height: 5rem;
    background: #74776B;
`
const Container = styled.div`
    width: 90%;
    margin: 0 auto;
`

const MenuBar = () => (
    <Wrapper>
        <Container>
            MenuBar
        </Container>
    </Wrapper>

)

export default MenuBar
