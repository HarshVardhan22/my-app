import React from "react";
import styled from "styled-components";
import { IProduct } from "../home.interface";

export const Product = (props: IProduct) => {
  return (
    <Wrapper key={props.id}>
      <Image src={props.image} />
      <Title>{props.title}</Title>
      <HorizontalWrapper>
        <Price> Price : ${props.price}</Price>
        <Button>ADD TO CART</Button>
      </HorizontalWrapper>

      {/* <Button>ADD TO CART</Button> */}
      {/* <CartCounterWrapper>
        <CartButtons>+</CartButtons>
        <Text>2</Text>
        <CartButtons>-</CartButtons>
      </CartCounterWrapper> */}
    </Wrapper>
  );
};

export default Product;

// ****  STYLED COMPONENTS  ****

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  align-items: center;
  padding: 1rem;
`;
const Image = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  object-fit: contain;
`;
const Title = styled.p`
  font: 1rem sans-serif;
  word-break: break-all;
  margin-left: 5rem;
  width: 40vw;
  text-align: left;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: 1px solid limegreen;
  font: bold 1rem sans-serif;
  background-color: #fff;
  cursor: pointer;
  border-radius: 0.45rem;
`;
const CartCounterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid limegreen;
  font: bold 1rem sans-serif;
  background-color: #fff;
  //cursor: pointer;
  border-radius: 0.45rem;
  width: 5rem;
`;
const Text = styled.p`
  font-size: 1rem;
  padding: 0;
  margin: 0;
`;
const CartButtons = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  font: bold 1rem sans-serif;
  background-color: #fff;
  cursor: pointer;
`;
const Price = styled.p`
  font: bold 1rem sans-serif;
  word-break: break-word;
  color: #3e3e3e;
  text-align: left;
  margin: 1rem 0;
`;
const HorizontalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
