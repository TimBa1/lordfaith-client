import styled from "styled-components";
import { Announcement } from "../components/Announcement";
import Navbar from "../components/Navbar";
import Promotions from "../components/Promotions";
import { Footer } from "../components/Footer";
import Products from "../components/Products";
import { mobile } from "../responsive";
import {useLocation}  from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;
const Title = styled.h1``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const FilterItem = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "9px 0px" })}
`;
const Option = styled.option``;

function ProductList() {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort,setSort] = useState("newest") 

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value
        })
    }
    
  return (
    <Container>
      <Navbar />
      <div style={{ height: "30px" }}></div>
      <Announcement />
      <Title>{ cat }</Title>
      <FilterContainer>
        <Filter>
          <FilterItem>Filter Product:</FilterItem>
          <Select name="color"  onChange={handleFilters}>
            <Option selected>Color</Option>
            <Option>silver</Option>
            <Option> rose-gold</Option>
            <Option>gold</Option>
          </Select>
          <Select name="size"  onChange={handleFilters}>
            <Option selected>Size</Option>
            <Option>13 inch</Option>
            <Option>16 inch</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterItem>Sort Product:</FilterItem>
          <Select onChange={(e)=> setSort(e.target.value)}>
            <Option value="newest"  >Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">price(desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
          <Products cat={ cat } filters={filters} sort={sort} />
      <Promotions />
      <Footer />
    </Container>
  );
}

export default ProductList;
