import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addCart,
  loadData,
} from "../redux/actions/HomeAction";
export const Home = () => {
  const products = useSelector((state) => state.homeReducer.products);
  const isLoading = useSelector((state) => state.homeReducer.isLoading);
  const sumMoney = useSelector((state) => state.homeReducer.total);
  const dispath = useDispatch();
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        "https://course-api.com/react-store-products"
      );
      const data = await res.data;
      dispath(loadData(data));
    };
    getData();
  }, []);
  const handleAddCart = (item) => {
    dispath(addCart(item));
    alert("Thêm sản phẩm thành công");
  };
  return (
    <>
      {!isLoading ? (
        <div className="container">
          <h1>Product</h1>
          {products?.map((item) => {
            item.qty = 1;
            item.heart = false;
            return (
              <div className="product" key={item.id}>
                <img src={item.image} alt="" />
                <div className="name-product">{item.name}</div>
                <div className="price-product">{item.price}</div>
                <div className="des-product">{item.description}</div>
                <button
                  onClick={() =>
                    handleAddCart({
                      id: item.id,
                      name: item.name,
                      image: item.image,
                      price: item.price,
                      qty: item.qty
                    })
                  }
                >
                  Mua
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Loading.....</div>
      )}
    </>
  );
};
