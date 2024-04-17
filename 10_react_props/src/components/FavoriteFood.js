import React from "react";

const FavoriteFood = ({ food = "피자" }) => {
  return <div style={{ color: "red" }}>내가 좋아하는 음식은 {food}입니다.</div>;
};
