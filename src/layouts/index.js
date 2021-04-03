import React from 'react'
import Navbar from '../components/navbar/navbar'
import GlobalStyle from '../assets/styles/globalStyles'
import styled from 'styled-components'

const PageContainer = styled.div`
position: relative;
overflow-y: hidden;
`

const MainLayout = ({ children }) => (
    <PageContainer>
    <GlobalStyle/>
    <Navbar/>
    {children}
    </PageContainer>
)

export default MainLayout