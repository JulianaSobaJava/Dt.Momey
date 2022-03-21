import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --background: #F0F2F5;
    --red: #E52E4D;
    --blue: #5429CC;

    --blue-light: #6933FF;
    --green: #33CC95;

    --text-title: #363F5F;
    --text-body: #969CB3;

   
    --shape: #FFFFFF;
}

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}

html{
    @media(max-width:1080){
        font-size: 93.75%;
    }

      @media(max-width:720){
        font-size: 87.5%;
    }
}

body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight:400;
}

h1,h2,h3,h4,h5,h6, strong{
    font-weight:600;
}

body{
    background:var(--background);
    --webkit-font-smoothing: antialiased;
}

button{ 
    cursor:pointer;
}

[disabled]{
    opacity:0.6;
    cursor:not-allowed;

}
.react-modal-overlay{
  background:rgba( 0, 0, 0, 0.5 );

  position:fixed;
  top:0;
  left:0;
  bottom:0;
   right:0;

  display:flex;
  align-items:center;
  justify-content:center;
}

.react-modal-content {
  width:100%;
  max-width:576px;
  background:var(--background);
  position:relative;
  padding:3rem;
  broder-radius:.rem;
}

.react-modal-close{
    position:absolute;
    border:0;
    right:1.5rem;
    top:1.5rem;
    background:transparent;
    transition: filter .2s;

    &:hover{
        filter:brightness(0.8);
    }
}
`;
