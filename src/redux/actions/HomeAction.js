import { CONSTAIN } from "../constants/constant";

export const addCart = (idProduct) => {
  return {
    type: CONSTAIN.ADDCART,
    payload: idProduct
  };
};
export const removeItemCart = (idProduct) => {
  return {
    type: CONSTAIN.DELETECART,
    payload: idProduct
  };
};
export const upQty = (idProduct) => {
  return {
    type: CONSTAIN.UPQTY,
    payload: idProduct
  };
};
export const downQty = (idProduct) => {
  return {
    type: CONSTAIN.DOWNQTY,
    payload: idProduct
  };
};
export const loadData = (product) => {
  return {
    type: CONSTAIN.LOADDATA,
    payload: product
  };
};
export const sumTotal = () => {
  return {
    type: CONSTAIN.SUMTOTAL
  };
};
export const Like = (data) => {
  return {
    type: CONSTAIN.HEART,
    payload: data
  };
};
export const setcomment = (data) => {
  return {
    type: CONSTAIN.SETCOMMENT,
    payload: data
  };
};
export const addComment = (data) => {
  return {
    type: CONSTAIN.COMMENT,
    payload: data
  };
};
