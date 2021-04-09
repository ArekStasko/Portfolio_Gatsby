import React, {useState} from 'react'
import styled from 'styled-components'
import './navbar.css'

import BentoIcon from './bentoIcon'

const NavbarWrapper = styled.div`
position: fixed;
transform: ${({show}) => (show ? "translateY(-100%)" : "translateY(0)")};
visibility: ${({show}) => (show ? "hidden" : "visible")};
`


const Navbar = () => {

const [show, setShow] = useState(true)

const handleClick = () => {
    setShow(!show)
}

    return(
        <>
        <div className='initials_wrapper'>
            <h1>AS .</h1>
        </div>
        <div className='navbar-btn'>
         <button className='btn-element' onClick={handleClick}><BentoIcon show={show}/></button>
         </div>
            <NavbarWrapper className='main_navbar-wrapper' show={show}>
                <div className='navbar_link-wrapper'>
               <a href='/aboutme' className='navbar_link'>ABOUT</a>
               <a href='/' className='navbar_link'>PROJECTS</a>
               </div>

               <div className='nav_footer-wrapper'>
                <div className='nav_footer'></div>
                <div className='nav_date'>
                    <p>2021</p>
                </div>
                </div>
            </NavbarWrapper>
        </>
    )
}

export default Navbar