import { useContext } from "react";
import { AgeContext } from "../contexts/AgeContext";
import { UserContext } from "../";

export default function Profile() {
  //AgeContext의 age와 setAge
  //UserContext 의 name과 setName 모두 사용 얘정

  const { age, setAge } = useContext(AgeContext);
  const { name, setName } = useContext(UserContext);

  const ageRef = useRef();

  const changeInfo = () => {
    if (
      nameRef.current.value.length < 1 ||
      nameRef.current.value.trim() === ""
    ) {
      alert("이름을 다시 입력해 주세요");
      nameRef.current.focus();
    }
    if (
      ageRef.current.value.length === 0 ||
      ageRef.current.value.trim === "" ||
      Number(ageRef.current.value) < 1
    ) {
      alert("나이를 다시 입력해 주세요");
    }
    setAge(Number(ageRef.current.value));
    setName(Number(ageRef.current.value));
    ageRef.current.value = "";
  };

  return (
    <>
      <h3>User Profile</h3>
      <div>이름 : {name}</div>
      <div>나이 : {age}</div>
      <input type="number" placeholder="나이를 입력해 주세요" ref={ageRef} />
      <input type="number" placeholder="나이를 입력해 주세요" ref={ageRef} />
      <button onClick={changeInfo}>프로필 변경</button>
    </>
  );
}
