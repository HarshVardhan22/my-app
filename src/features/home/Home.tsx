import React, { useEffect, useState } from "react";
import { IProduct } from "./home.interface";
import { fetchAllProducts } from "./homeAPI";
import styled from "styled-components";
import Product from "./components/Product";
import ProductDetail from "../productDetail/ProductDetail";

const Home = () => {
  const [products, setProducts] = useState<Array<IProduct>>([]);

  useEffect(() => {
    fetchAllProducts().then((result) => {
      let resultWithQuantityProperty = result.map((item: IProduct) => {
        item["quantity"] = 0;
        return item;
      });

      setProducts(resultWithQuantityProperty);
    });
  }, []);

  return (
    <Container>
      {products?.map((item, index) => {
        return <Product key={item.id} {...item} />;
      })}
    </Container>
  );
};

export default Home;

// ****  STYLED COMPONENTS  ****

const Container = styled.div`
  display: flex;
  border-left: 1px solid black;
  flex-direction: column;
  width: 75vw;
`;
