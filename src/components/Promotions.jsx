import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
    display:flex;
    height:60vh;
    background-color:#fcf5f5;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    
`

const Title = styled.h1`
    font-size:70px;
    margin-bottom:20px;
    ${mobile({fontSize:'60px'})} 
`

const Description = styled.div`
    font-size:24px;
    font-weight:300px;
    margin-bottom:20px;
    
${mobile({ textAlign:'center'})};  
`

const InputContainer = styled.div`
    width:50%;
    height:40px;
    background-color:white;
    display:flex;
    justify-content:space-between;
    border:1px solid lightgray;
    margin-bottom:10px;
    ${mobile({width:'80%'})} 
`
// const InfoContainer = styled.div`
//     display:grid;
    
// `
const Input = styled.input`
    border:none;
    flex:8;
    padding-left:20px;
`

const Button = styled.button`
    flex:1;
    cursor:pointer;
    background-color:teal;
    color:white;
    border:none;
`






function Promotions() {
    return (
        <Container>
            <Title>Promotions</Title>
            <Description>Register with Lordfaith and get timely updates on new arrivals, products and deals</Description>
            <InputContainer>
                  <Input placeholder='Your Name' />
            </InputContainer>
            <InputContainer>
                  <Input placeholder='Phone Number' />
            </InputContainer>
            <InputContainer>
                  <Input placeholder='Your Email' />
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Promotions
