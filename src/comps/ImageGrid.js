import React from "react";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = () => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((docile) => {
          return (
            <div className="img-wrap" key={docile.id}>
              <img
                className="pabloo"
                src={docile.url}
                alt="pablo being kinda crazy"
              />
            </div>
          );
        })}
    </div>
  );
};

export default ImageGrid;
