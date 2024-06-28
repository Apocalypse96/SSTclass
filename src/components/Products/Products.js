import ProductCard from "../ProductCard/ProductCard";
import Effect from "../Effect/Effect";
import React from "react";
import { useState, useEffect } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import Categories from "../Categories/Categories";
function Products() {
    // const products = [
    //       {
    //         id: 1,
    //         title: "Apple iPhone 14",
    //         price: "Rs. 1,00,000"
    //       },
    //       {
    //         id: 2,
    //         title: "Apple iPhone 13",
    //         price: "Rs. 70,000"
    //       },
    //       {
    //         id: 3,
    //         title: "Google Pixel 7",
    //         price: "Rs. 50,000"
    //       },
    //       {
    //         id: 4,
    //         title: "Nokia 1100",
    //         price: "Rs. 2,000"
    //       },
    //       {
    //         id: 5,
    //         title: "Samsung Galaxy S10",
    //         price: "Rs. 1,00,000"
    //       },
    //       {
    //         id: 6,
    //         title: "Sony Xperia S10",
    //         price: "Rs. 1,00,000"
    //       }
    // ];
  // let products = [];
  let [products, setProducts] = useState([]);
  console.log("products")
  console.log(useWindowSize());
  useEffect(() => {
    fetch("https://run.mocky.io/v3/1c9a787b-3e6b-4fc2-9460-f908e2e3cc29").then(
      (response) => {
        return response.json();
      }
    ).then((res) => {
      console.log(res);
      setProducts(res);
    })
  }, [])
  
    return (
      <div>
        <div><Effect /></div>
        <Categories/>
            {
                products.map(function (item, index) {
                  return (<ProductCard key={index}  product={item} />)
                })
            }
        </div>
    )
}
export let a = 10;
export let b = 20;
export default React.memo(Products);