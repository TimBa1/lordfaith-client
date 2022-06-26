import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
    background-color:blue;
    height:50px;
    color:white;
    text-align:center;
    justify-content:center;
    display:flex;
    font-weight:500;
    font-size:18px;
    align-items:center;
    margin-top:3rem;
    margin-bottom:3rem;

    ${mobile({display:"none"})};  
`

export const Announcement2 = () => {
  return (
      <Container>
          LORDFAITH'S ICE🥶🥶🥶🥶🥶 DEALS!!!!!
    </Container>
  )
}
