//기본값으로 name, setName를 가지는 UserContext 만들기
import { createContext } from "react";

const defalutUser = {
  name: "layla",
  setName: () => {},
};

export const UserContext = createContext(defalutUser);
