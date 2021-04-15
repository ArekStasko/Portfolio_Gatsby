import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import GlobalStyle from '../assets/styles/globalStyles'
import Cursor from '../components/cursor/cursor'
import styled from 'styled-components'


const PageContainer = styled.div`
position: relative;
overflow-y: hidden;
overflow-x: hidden;
`


const MainLayout = ({ children }) => (
    <PageContainer>
    <GlobalStyle/>
    <Navbar/>
    <Cursor/>
    {children}
    <Footer/>
    </PageContainer>
)

export default MainLayout