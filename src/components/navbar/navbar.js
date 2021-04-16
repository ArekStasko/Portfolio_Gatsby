import React, {useState} from 'react'
import { Link } from 'gatsby'
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
            <Link className='initials_link' to='/' >AS .</Link>
        </div>
        <div className='navbar-btn'>
         <button onClick={handleClick} className='btn-element'><BentoIcon show={show}/></button>
         </div>
            <NavbarWrapper className='main_navbar-wrapper' show={show}>
                <div className='navbar_link-wrapper' onClick={handleClick}>
               <Link to='/aboutMe' className='navbar_link'>ABOUT</Link>
               <Link to='/projects' className='navbar_link'>PROJECTS</Link>
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