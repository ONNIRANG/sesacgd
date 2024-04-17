import { createContext } from "react";

const defaultAge = {
  age: 0,
  setAge: () => {}, //나이를 변경하는 age state의 setter함수가 될 예정
};
export const AgeContext = createContext(null);
