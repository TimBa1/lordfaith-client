import  {Link}  from "react-router-dom"
import styled from "styled-components"
import {mobile} from '../responsive'

const Info = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  cursor: pointer;

  &:hover{
    transform:scale(1.3);
    transition:all 0.5s ease;
    background-size:cover;
    background-repeat: no-repeat;
    overflow:hidden;
  }
`
const Container = styled.div`
  flex:1;
  margin:3px;
  height:70vh;
  position:relative;
  cursor:pointer;
  ${mobile({height:'50vh'})};  
`
const Img = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;

  ${mobile({height:'50vh'})};  
`

const Title = styled.h1`
  color:white;
  margin-bottom:20px
`
const Button = styled.button`
cursor:pointer;
border:none;
padding:10px;
background-color: white;
color:gray;
font-weight:600;
`


function CategoriesItem({item}) {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Img src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  )
}

export default CategoriesItem