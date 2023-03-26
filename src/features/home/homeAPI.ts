// export function fetchCount(amount = 1) {
//     return new Promise<{ data: number }>((resolve) =>
//       setTimeout(() => resolve({ data: amount }), 500)
//     );
//   }

export const getAPI = async (url:string) => {
    let result = await fetch(url)
    let data = await result.json();
    return data;
}

export const fetchAllProducts = async () => {
   let allProducts = await getAPI('https://fakestoreapi.com/products')
   return allProducts;
}

export const fetchSingleProduct = async (id:string|number) => {
    let productData = await getAPI(`https://fakestoreapi.com/products/${id}`)
    return productData;
}
  