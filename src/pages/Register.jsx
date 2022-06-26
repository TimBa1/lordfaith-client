import styled from "styled-components"
import { mobile } from "../responsive"
import {useState} from "react"
import { useHistory } from 'react-router-dom'
import { publicRequest } from '../requestMethods';

const Container = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
`
const Wrapper = styled.div`
    width:40%;
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
   flex-wrap:wrap; 
`
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin: 10px 10px 0px 0px;
    padding:10px;
`
const Agreement = styled.span`
    font-size:16px;
    margin:20px 0px;
`
const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color:teal;
    cursor:pointer;
    color:white;
`
function Register() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const history = useHistory();
    
    
    const handleClick=(e) => {
        e.preventDefault()
        publicRequest.post("/auth/register", {
            name: name,
            username: username,
            email: email,
            password: password,
        }).then((response) => {
            console.log(response)
        });
        history.push("/")
    }

  return (
      <Container>
          <Wrapper>
              <Title>CREATE AN ACCOUNT</Title>
              <Form>
                  <Input placeholder="First and Last Name" onChange={(e) => setName(e.target.value)} required/>
                  <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
                  <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
                  <Input placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
                  <Input placeholder="Confirm Password" required/>
                  <Agreement>
                      By creating an account, I consent to the processing of my personal
                      data in accordance with the <b>PRIVACY POLICY</b> 
                  </Agreement>
                  <Button  onClick={handleClick}>Create Account</Button>
              </Form>
          </Wrapper>  
    </Container>
  )
}

export default Register