import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, downQty, removeItemCart } from "../redux/actions/HomeAction";

export const Cart = () => {
  const cart = useSelector((state) => state.homeReducer.cart);
  const dispatch = useDispatch();
  console.log("cart", cart);
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.qty;
  };
  const total = cart.reduce(addition, 0);
  return (
    <>
      <div className="cart">
        <h1>Cart</h1>
        <div className="cart-container">
          {cart.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt="" style={{ width: 200 }} />
              <div>price:{item.price}</div>
              <button onClick={() => dispatch(addCart(item))}>Tăng Sl</button>
              Số lượng sản phẩm:{item.qty}
              <button onClick={() => dispatch(downQty(item))}>Giảm SL</button>
              <button onClick={() => dispatch(removeItemCart(item))}>
                Delete
              </button>
            </div>
          ))}
          <div></div>
        </div>
        <div>Tổng tiền:{total}</div>
      </div>
    </>
  );
};
