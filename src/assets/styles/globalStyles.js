import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

*{
   margin: 0;
   padding: 0;
}

html{
   width: 100%;
   height: 100%;
}
body{
   min-width: 100%;
   min-height: 100%;
   font-family: 'lexend';
   font-weight: $f-weight-lg;
   background-color: black;
   color: white;
   cursor: none;
   
}

 button{
    background-color: white;
    border: none;
    outline: none;
    cursor: none;
 }

 a{
    cursor: none;
 }

`

export default GlobalStyle