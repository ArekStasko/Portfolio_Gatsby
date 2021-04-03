import React from 'react';
import styled from 'styled-components'

const BentoWrapper = styled.div`
cursor: pointer;
width: 45px;
height: 45px;
position: fixed;
`

const BentoCol = styled.div`
display: flex;
`

const BentoDot = styled.div`
background-color: white;
width: 4px;
height: 4px;
margin: 5px;
`

const TransitionDot = styled.div`
transition: background-color 500ms ease-in-out;
background-color: ${({show}) => (show  ? 'white' : '#2625ff')};
width: 4px;
height: 4px;
margin: 5px;
`

const BentoIcon = ({show}) => {

    return(
         <BentoWrapper>
<BentoCol>
<BentoDot></BentoDot>
<TransitionDot show={show}></TransitionDot>
<BentoDot></BentoDot>
</BentoCol>

<BentoCol>
<TransitionDot show={show} ></TransitionDot>
<BentoDot></BentoDot>
<TransitionDot show={show} ></TransitionDot>
</BentoCol>

<BentoCol>
<BentoDot></BentoDot>
<TransitionDot show={show} ></TransitionDot>
<BentoDot></BentoDot>
</BentoCol>
         </BentoWrapper>
    )
}

export default BentoIcon