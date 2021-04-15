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
         <div className='bentoWrapper'>
<div className='bentoCol'>
<div className='bentoDot'></div>
<TransitionDot show={show}></TransitionDot>
<div className='bentoDot'></div>
</div>

<div className='bentoCol'>
<TransitionDot show={show} ></TransitionDot>
<div className='bentoDot'></div>
<TransitionDot show={show} ></TransitionDot>
</div>

<div className='bentoCol'>
<div className='bentoDot'></div>
<TransitionDot show={show} ></TransitionDot>
<div className='bentoDot'></div>
</div>
         </div>
    )
}

export default BentoIcon