import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'
import { useSelector } from 'react-redux'
import {Link}   from 'react-router-dom'

const Container = styled.div`
    height:60px;
    margin-bottom:10px;


    ${mobile({height:'50px'})}    
`
const Wrapper = styled.div`
    padding:0px 20px;
    display:flex;
    justify-content:center;
    justify-content:space-between;
    align-items:center;
    ${mobile({padding:'10px 0px'})}    
`
const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`
const Language = styled.span`
    font-size:14px;
    cursor:pointer;
    ${mobile({display:'none'})}    
`
const Input = styled.input`
    border:none;
    ${mobile({display:'none'})}    
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:10px;
    padding:5px
`
const Logo = styled.h1`
    font-weight:bold;
    text-align:center;
    ${mobile({fontSize:'24px'})}    
`
const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
    ${mobile({fontSize:'12px',marginLeft:'15px'})}    
`
const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    ${mobile({justifyContent:'center',flex:'2'})}    
`
const Center = styled.div`
    flex:1;
`


const Navbar = () => {

    const quantity = useSelector(state => state.cart.quantity)
    
  return (
      <Container>
          <Wrapper>
              <Left>
                  <Language>EN</Language>
                  <SearchContainer>
                      <Input type="search" />
                      <Search style={{color:"gray", fontSize:"16"}}/>
                  </SearchContainer>
              </Left>
              <Link to='/'>
                   <Center>
                     <Logo>LORDFAITH</Logo>
                   </Center>
              </Link>
             
              <Right>
                  <Link to='/register'>
                     <MenuItem>Register</MenuItem>
                  </Link>
                  <Link to='/login'>
                        <MenuItem>Sign-In</MenuItem>
                  </Link>
                  <Link to='/cart'>
                   <MenuItem>
                      <Badge badgeContent={quantity} color="secondary">
                          <ShoppingCartOutlined color="primary" />
                      </Badge>
                  </MenuItem>
                  </Link>
                 
              </Right>
          </Wrapper>
          
      </Container>
  )
}

export default Navbar