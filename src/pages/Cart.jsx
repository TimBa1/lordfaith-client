import { Add, Remove } from '@material-ui/icons'
// import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Announcement } from '../components/Announcement'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'
// import { userRequest } from '../requestMethods';
import { Link } from 'react-router-dom'
import { usePaystackPayment } from 'react-paystack';

 
const Container = styled.div`


`
const Wrapper = styled.div`
  padding:20px;
  ${mobile({ padding:'10px' })}
`
const Title = styled.h1`
  font-weight:300;
  text-algin:center;
`
const Top = styled.div`
  display:flex;
  align-item:center;
  justify-content:space-between;
  padding:20px;
`
const TopButton = styled.button`
  padding:10px;
  font-weight:600;
  cursor:pointer;
  border:${props => props.type === 'filled' && 'none'};
  background-color:${props => props.type === 'filled' ? 'black': 'transparent'};
  color:${props => props.type === 'filled' && 'white'};
  
`
const TopTexts = styled.div`
${mobile({ display:'none' })}
`
const TopText = styled.span`
  text-decoration:underline;
  cursor:pointer;
  margin:0px 10px;
`
const Bottom = styled.div`
  display:flex;
  justify-content:center;
  ${mobile({ flexDirection:'column' })}
`
const Info = styled.div`
  flex:3;
`
const Product = styled.div`
  display:flex;
  justify-content:space-between;
  ${mobile({ flexDirection:'column' })}
`
const ProductDetails = styled.div`
  flex:2;
  display:flex;
`
const Image = styled.img`
  width:200px
`
const Details = styled.div`
  padding:20px;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
`
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const ProductColor = styled.span`
  width:20px;
  height:20px;
  border-radius:50%;
  background-color:${props=>props.color}
`
const ProductSize = styled.div`

`

const PriceDetails = styled.div`
  flex:1;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
`

const ProductAmountContainer = styled.div`
  display:flex;
  align-items:center;
  margin-bottom:20px;
`
const ProductAmount = styled.div`
  font-size:24px;
  margin:5px;
  ${mobile({ margin:'5px 15px' })}
`
const ProductPrice = styled.div`
  font-size:30px;
  font-weight:200;
  ${mobile({ marginBottom:'20px' })}
`
const Hr = styled.hr`
  background-color:#eee;
  border:none;
  height:3px
`
const Summary = styled.div`
  flex:1;
  border:0.5px solid lightgray;
  border-radius:10px;
  padding:20px;
  height:50vh;
`
const SummaryTitle = styled.h1`
  font-weight:400;
`
const SummaryItem = styled.div`
  margin:30px 0px;
  display:flex;
  justify-content:space-between;
  font-weight:${props => props.type === 'total' && '500'};
  font-size:${props=>props.type==='total'&&'24px'}
`
const SummaryItemTitle = styled.span`

`
const SummaryItemPrice = styled.span`

`
const Button = styled.button`
  width:100%;
  padding:10px;
  background-color:black;
  color:white;
  font-weight:600;
  cursor:pointer;
  `


function Cart() {
  const cart = useSelector(state => state.cart);
  const totalPackage = `${cart.total+1900}`

  const user = useSelector((state) => state.user.currentUser);

  const config = {
    reference: (new Date()).getTime().toString(),
    email: `${user.email}`,
    amount: `${totalPackage*100}`,
    publicKey: 'pk_test_76528916a56d96ad8711e392ac873b8278530ba2',
    firstname:  `${user.name}`,
    lastname:     'cool',
  }
  const onSuccess = (reference) => {
    
    alert(reference.trxref);
    prompt(reference.status);
};

const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
}


const PaystackHookExample = () => {
  const initializePayment = usePaystackPayment(config);
  return (
    <div>
        <Button onClick={() => {
            initializePayment(onSuccess, onClose)
        }}>CHECKOUT</Button>
    </div>
  );
};

  
  return (
      <Container>
          <Navbar />
          <div style={{height:'30px'}}></div>
          <Announcement />
          <Wrapper>
            <Title>Your Bag</Title>
            <Top>
              <Link to="/">
              <TopButton>Continue Shopping</TopButton>
              </Link>
              <TopTexts>
                <TopText>Shopping Bag 1</TopText>
                <TopText>your wishlist</TopText>
              </TopTexts>
              <TopButton type='filled'>Checkout Now</TopButton>
            </Top>
            <Bottom>
              <Info>
              {cart.products.map(product =>(<div key={product}><Product >
              <ProductDetails>
                  <Image src={product.img}/>
                    <Details>
                      <ProductName><b>Product: </b>{product.title}</ProductName>
                    <ProductId><b>ID: </b>{ product._id}</ProductId>
                    <ProductColor color={product.color}/>
                    <ProductSize><b>size: </b>{product.size}</ProductSize>
                    </Details>
                  </ProductDetails>
                  <PriceDetails>
                    <ProductAmountContainer>
                      <Add/>
                    <ProductAmount>{product.quantity}</ProductAmount>
                      <Remove/>
                    </ProductAmountContainer>
                  <ProductPrice>{product.price* product.quantity}</ProductPrice>
                  </PriceDetails>
                </Product> 
                 <Hr/>
              </div>
                ))}
                
              </Info>
              <Summary>
                <SummaryTitle>Order Summary</SummaryTitle>
                <SummaryItem>
                  <SummaryItemTitle>Sub Total</SummaryItemTitle>
              <SummaryItemPrice>N {cart.total}</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemTitle>EStimated Delivery</SummaryItemTitle>
                  <SummaryItemPrice>N 2,100</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemTitle>Discount</SummaryItemTitle>
                  <SummaryItemPrice>N -200</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                  <SummaryItemTitle >Total</SummaryItemTitle>
                  <SummaryItemPrice>N {totalPackage}</SummaryItemPrice>
                </SummaryItem>


                 <PaystackHookExample/>

            
              </Summary>
            </Bottom>
          </Wrapper>
          <Footer/>
    </Container>
  )
}

export default Cart