import React from "react";
import { FC, useState } from "react";
import Gif from "../../../utils/interfaces/gif";
import Button from "../../atoms/button/button";

import "./gif-card.scss";

interface GifCardProps {
  gif: Gif;
  onDelete: (id: number, url: string) => void;
}

const GifCard: FC<GifCardProps> = ({ gif, onDelete }) => {
  const handleDelete = () => {
    onDelete(gif.id, gif.url);
  };

  return (
    <div className="gif-card">
      <img src={gif.url} />
      <div className="gif-card__delete-buttons">
        <h4>¿Deseas eliminar este GIF?</h4>
        <Button text="Eliminar" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default GifCard;
