import React from "react";

const Meme = props => {
  return (
    <div className="meme">
      <div className="meme-wrapper">
        <img src={props.image} className="meme-img" alt="funny meme" />
        <p>{props.text}</p>

        {props.favorite ? (
          <img src={props.image} className="star" alt="Favorite-star" />
        ) : null}
        <button onClick={() => props.deleteMeme(props.id)}>DEL</button>
        <button onClick={() => props.editMeme(props.id)}>Edit</button>
      </div>
    </div>
  );
};

export default Meme;
