import React from 'react';
import { useContext } from 'react';

import { Box, styled } from '@mui/material';

// components
import Editor from './Editor';

import { DataContext } from '../context/DataProvider';

const Container = styled(Box)`
    display: flex;
    background: #060606;
    height: 59vh;
`

const Code = () => {

    const {html, setHtml, css, setCss, js, setJs} = useContext(DataContext);

  return (
    <Container>
        <Editor 
            heading="HTML"
            icon="</>"
            color="#FF3C41"
            value={html}
            onChange={setHtml}
        />
        <Editor 
            heading="CSS"
            icon="*|*"
            color="aqua"
            value={css}
            onChange={setCss}
        />
        <Editor
            heading="JavaScript"
            icon="{/}"
            color="#FCD000"
            value={js}
            onChange={setJs}
        />
    </Container>
  )
}

export default Code