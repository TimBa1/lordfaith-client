import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { mobile } from "../responsive"
import { login } from '../Redux/apiCalls';





const Container = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
`
const Wrapper = styled.div`
    width:25%;
    padding:20px;
    background-color:#eee;
    ${mobile({width:'75%'})} 
`
const Title = styled.h1`
    font-size:25px;
    font-weight:600;
`
const Form = styled.form`
   display:flex;
   flex-direction:column; 
`
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin: 10px 0px;
    padding:10px;
`
const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color:teal;
    cursor:pointer;
    color:white;
    font-size:14px;
    margin:10px 0px 10px 0px;
    &:disabled{
        color:green;
        cursor: not-allowed;
    }
`
const Link = styled.a`
    margin:5px 0px;
    font-size:12px;
    text-decoration:underline;
    cursor:pointer;
`
const Error = styled.span`
    color:red;
`

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const {isFetching, error} = useSelector((state)=>state.user)
    
    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, {username, password});
    }
  return (
      <Container>
         <Wrapper>
              <Title>SIGN IN</Title>
              <Form>
                  <Input placeholder="Username"
                      onChange={(e) => setUsername(e.target.value)}
                      required />
                  
                  <Input placeholder="password"
                      type='password'
                      onChange={(e) => setPassword(e.target.value)}
                      required />
                  
                  <Button onClick={handleClick} disabled={isFetching}>Login</Button>
                  {error && <Error>Something went wrong...</Error>}
                  <Link>Forgot password?</Link>
                  <Link>Create a new Account?</Link>
              </Form>
          </Wrapper>   
    </Container>
  )
}
