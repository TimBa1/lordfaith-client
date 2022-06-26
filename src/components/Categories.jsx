import React from 'react'
import styled from 'styled-components';
import CategoriesItem from './CategoriesItem';
import { categories } from '../Data';
import {mobile} from '../responsive'

const Container = styled.div`
display:inline;
padding:20px;
justify-content:space-between;

${mobile({padding:'0px', flexDirection:'column' ,height:"30%", width:"20%"})};    
`
const Title = styled.h1`
    font-size:70px;
    margin-bottom:20px;
    text-align:center;
`
function Categories() {
    return (<>
        <Title>Categories</Title>
        <Container>
            {categories.map(item=>(
                <CategoriesItem item={item} key={item.id}/>
          ))}
        </Container></>
    )
}

export default Categories
