import React from 'react';
import styled from 'styled-components'

const TransitionDot = styled.div`
transition: background-color 500ms ease-in-out;
background-color: ${({show}) => (show  ? 'white' : '#202020')};
width: 4px;
height: 4px;
margin: 5px;
`

const BentoIcon = ({show}) => {

    return(
         <div className='bento'>
<div className='bento__Col'>
<div className='bento__Col--Dot'></div>
<TransitionDot show={show}></TransitionDot>
<div className='bento__Col--Dot'></div>
</div>

<div className='bento__Col'>
<TransitionDot show={show} ></TransitionDot>
<div className='bento__Col--Dot'></div>
<TransitionDot show={show} ></TransitionDot>
</div>

<div className='bento__Col'>
<div className='bento__Col--Dot'></div>
<TransitionDot show={show} ></TransitionDot>
<div className='bento__Col--Dot'></div>
</div>
         </div>
    )
}

export default BentoIcon