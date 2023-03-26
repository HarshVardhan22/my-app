import React from "react";
import styled from "styled-components";
import { IProduct } from "../home/home.interface";

const Cart = (props: IProduct) => {
  return (
    <Container>
      <CartItem>
        <VertcalWrapper>
          <Title>{props.title}</Title>
          <Description>{props.description}</Description>
          <HorizontalWrapper>
            <Price> Price : ${props.price}</Price>
            <CartCounterWrapper>
              <CartButtons>+</CartButtons>
              <Text>2</Text>
              <CartButtons>-</CartButtons>
            </CartCounterWrapper>
          </HorizontalWrapper>
        </VertcalWrapper>
        <Image src={props.image} />
      </CartItem>
    </Container>
  );
};

export default Cart;

// ****  STYLED COMPONENTS  ****

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  // align-items: center;
  height: 100vh;
  width: 75vw;
  padding: 2rem;
`;

const CartItem = styled.div`

  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;
const Image = styled.img`
  width:15rem;
  height:15rem;
  object-fit: contain;
  margin-right: 3rem;
`;
const Title = styled.p`
  font: bold 1rem sans-serif;
  word-break: break-word;
  color: #3e3e3e;
  width: 15rem;
  text-align: left;
  margin: 1rem 0;
`;
const VertcalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //margin-top: 8rem;
    align-items: center;
`;
const Description = styled(Title)`
  font: 400 1rem sans-serif;
`;
const Price = styled(Title)`
  font: 400 1rem sans-serif;
`;

const HorizontalWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CartCounterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid #3e3e3e;
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
