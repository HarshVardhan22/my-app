import React from "react";
import styled from "styled-components";
import { IProduct } from "../home/home.interface";
import starIcon from "../../assets/starIcon.svg";
const ProductDetail = (props: IProduct) => {
  return (
    <Container>
      <VertcalWrapper>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
        <Price> Price : ${props.price}</Price>
        <HorizontalWrapper>
          <RatingIcon src={starIcon} />
          <RatingText>{props.rating.rate} ({props.rating.count} Reviews)</RatingText>
        </HorizontalWrapper>
        <Button>ADD TO CART</Button>
        <CartCounterWrapper>
          <CartButtons>+</CartButtons>
          <Text>2</Text>
          <CartButtons>-</CartButtons>
        </CartCounterWrapper>
      </VertcalWrapper>
      <Image src={props.image} />
    </Container>
  );
};

export default ProductDetail;

// ****  STYLED COMPONENTS  ****

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  // align-items: center;
  height: 100vh;
  width: 75vw;
  padding: 2rem;
`;
const Image = styled.img`
  width: 45rem;
  height: 45rem;
  object-fit: contain;
  margin-right: 3rem;
`;
const Title = styled.p`
  font: bold 3rem sans-serif;
  word-break: break-word;
  color: #3e3e3e;
  width: 35rem;
  text-align: left;
  margin: 1rem 0;
`;
const VertcalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  // align-items: center;
`;
const Description = styled(Title)`
  font: 400 1rem sans-serif;
`;
const Price = styled(Title)`
  font: 400 2rem sans-serif;
`;
const RatingIcon = styled(Image)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
`;
const RatingText = styled(Title)`
  font: 400 1rem sans-serif;
 // width: 3rem;
  margin: 0;
`;
const HorizontalWrapper = styled.div`
  display: flex;
  // justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 10rem;
  padding: 0.5rem 1rem;
  border: 1px solid #3e3e3e;
  font: bold 1rem sans-serif;
  background-color: #fff;
  cursor: pointer;
  border-radius: 0.45rem;
  margin: 1rem 0;
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
