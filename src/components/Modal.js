import React from 'react';
import styled from 'styled-components';
import { Close as Cross } from 'styled-icons/material/Close';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  opacity: ${props => (props.open ? '1' : `0`)};
  transition: 0.5s;
  z-index: 1;
`
const ModalContainer = styled.div`
  align-self: center;
  justify-self: center;
  background: white;
  max-width: ${props => props.theme.maxWidth};
  max-height: 80vh;
  position: relative;
  overflow: scroll;
  padding: 2em;
  border-radius: 1em;
  box-shadow: 0 0 3em black;
`

const Close = styled(Cross).attrs({ size: '2em' })`
  position: absolute;
  top: 0.5em;
  right: 0.4em;
  cursor: pointer;
`;

export default ({ open, closeModal, children }) => {
  return (
    <ModalBackground open={open} onClick={closeModal}>
      <ModalContainer onClick={event => event.stopPropagation()}>
        <Close onClick={closeModal} />
        {children}
      </ModalContainer>
    </ModalBackground>
  )
}
