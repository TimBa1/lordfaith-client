import {
  Facebook,
  Instagram,
  Mail,
  MailOutline,
  Phone,
  Room,
  Twitter,
  WhatsApp,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { socialMedia } from "../Data";


const Container = styled.div`
  background-color: pink;
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialICons = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#eee" })}
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  text-decoration: none;
`;
const Payment = styled.div`
  width: 50%;
`;

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LORDFAITH</Logo>
        <Desc>
          the brand aims at getting customers satisfaction first above all
          thing.
        </Desc>
        <SocialContainer>
        <a style={{ textDecoration: "none", color: "black" }}
          href={socialMedia.faceBook}>   
          <SocialICons color="3B5999">
            <Facebook />
          </SocialICons>
          </a>
          <a style={{ textDecoration: "none", color: "black" }}
          href={socialMedia.instagram}>       
          <SocialICons color="E4405F">
            <Instagram />
          </SocialICons>
          </a>  
          <a style={{ textDecoration: "none", color: "black" }}
          href={ socialMedia.twitter}>          
          <SocialICons color="55ACEE">
            <Twitter />
          </SocialICons>
          </a>
          <a style={{ textDecoration: "none", color: "black" }}
          href={socialMedia.gmail}>          
          <SocialICons color="E60023">
            <Mail />
          </SocialICons>
          </a>
        <a style={{ textDecoration: "none", color: "black" }}
          href={"tel:" + socialMedia.number}>   
          <SocialICons color="00E676">
            <WhatsApp />
          </SocialICons>
          </a>
          
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men</ListItem>
          <ListItem>Women</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        
         <a style={{ textDecoration: "none", color: "black" }}
          href={ socialMedia.map}>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Zone C, shop 4, new market,
          OAU, ILE-IFE
        </ContactItem>
        </a>
        
        
         <a style={{ textDecoration: "none", color: "black" }}
          href={"tel:" + socialMedia.number}>
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} />
            {socialMedia.number}
          </ContactItem>
        </a>
        
        <a style={{ textDecoration: "none", color: "black" }}
          href={socialMedia.gmail}>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> {socialMedia.gmail}
        </ContactItem>
        </a>
        
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};
