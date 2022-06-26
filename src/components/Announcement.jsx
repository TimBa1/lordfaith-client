import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color:rgb(235, 33, 33);
    height:30px;
    color:white;
    text-align:center;
    justify-content:center;
    display:flex;
    font-weight:500;
    font-size:14px;
    align-items:center;
`

export const Announcement = () => {
  return (
      <Container>
          Super Deal!! free delivery on orders over N100,000
    </Container>
  )
}
