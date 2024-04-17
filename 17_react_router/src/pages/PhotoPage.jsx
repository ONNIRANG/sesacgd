import React from "react";
import { useEffect, useState } from "react";
import { getData } from "../utils/getData";

export default function PhotoPage() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    getData("https://jsonplaceholder.typicode.com/photos", setPhotos);
  }, []);

  return (
    <div>
      <div>사진 페이지</div>
      {photos.map((photo) => {
        return (
          <div key={photo.id}>
            <img src={photo.url} />
          </div>
        );
      })}
    </div>
  );
}
