import React from 'react'

import { AppBar, Toolbar, styled } from "@mui/material";

const Container = styled(AppBar)`
    background: #060606;
    height: 9vh;
    overflow: hidden;
    font-size: 20px;
    display: flex;
    justify-content: space-around;
`


const Header = () => {

    const image = './code_editor_logo.png';


  return (
    <Container position='static'>
        <Toolbar>
           --- CODE EDITOR ---
        </Toolbar>
    </Container>
  )
}

export default Header