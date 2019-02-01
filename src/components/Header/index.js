import React from 'react'
import styled from 'styled-components'

import Searchbar from './Searchbar'
import MenuBar from './MenuBar'

//styled components
const HeaderWrapper = styled.header`
    width: 100%;
    height: 13rem;
`

const Header = ({ title }) => (
    <HeaderWrapper>
        <Searchbar title={title} />
        <MenuBar />
    </HeaderWrapper>
)

export default Header
