// import React, { useState } from "react";

// const CharacterList = ({ characters, setSelectedCharacter }) => {
//   return (
//     <div>
//       {characters.map((character) => (
//         <button
//           key={character.id}
//           onClick={() => setSelectedCharacter(character)}
//         >
//           {character.name}
//         </button>
//       ))}
//     </div>
//   );
// };

// const CharacterInfo = ({ selectedCharacter }) => {
//   if (!selectedCharacter) return null;

//   return (
//     <div>
//       <h2>선택된 캐릭터 정보</h2>
//       <p>이름: {selectedCharacter.name}</p>
//       <p>나이: {selectedCharacter.age}</p>
//       <p>별명: {selectedCharacter.nickName}</p>
//     </div>
//   );
// };

// const App = () => {
//   const [characters, setCharacters] = useState([
//     {
//       id: 1,
//       name: "뽀로로",
//       age: "7",
//       nickName: "사고뭉치",
//     },
//     {
//       id: 2,
//       name: "루피",
//       age: "5",
//       nickName: "공주님",
//     },
//     {
//       id: 3,
//       name: "크롱",
//       age: "4",
//       nickName: "장난꾸러기",
//     },
//   ]);
//   const [selectedCharacter, setSelectedCharacter] = useState(null);

//   return (
//     <div>
//       <CharacterList
//         characters={characters}
//         setSelectedCharacter={setSelectedCharacter}
//       />
//       <CharacterInfo selectedCharacter={selectedCharacter} />
//     </div>
//   );
// };

// export default App;
