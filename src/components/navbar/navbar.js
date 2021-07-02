import React, {useState} from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

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
        <div className='initials'>
            <Link className='initials__link' to='/' >AS .</Link>
        </div>
        <div className='navbar-btn'>
         <button  onClick={handleClick} className='navbar-btn__btn'><BentoIcon show={show}/></button>
         </div>
            <NavbarWrapper className='navbar' show={show}>
                <div className='navbar__links' role="button" tabIndex={0} onKeyDown={handleClick} onClick={handleClick}>
               <Link to='/aboutMe' className='navbar__links--link'>ABOUT</Link>
               <Link to='/projects' className='navbar__links--link'>PROJECTS</Link>
               </div>

               <div className='navbar__footer'>
                <div className='navbar__footer--line'></div>
                <div className='navbar__footer--date'>
                    <p>2021</p>
                </div>
                </div>
            </NavbarWrapper>
        </>
    )
}

export default Navbar