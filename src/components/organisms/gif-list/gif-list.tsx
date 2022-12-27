import React from "react";
import { FC } from "react";
import Gif from "../../../utils/interfaces/gif";
import EmptyGifList from "../../atoms/empty-gif-list/empty-gif-list";
import GifCard from "../../molecules/gif-card/gif-card";

import "./gif-list.scss";

interface GifListProps {
  gifs: Gif[];
  onDelete: (id: number, url: string) => void;
}

const GifList: FC<GifListProps> = ({ gifs, onDelete }) => {
  const isEmpty = gifs.length === 0;

  return (
    <div
      className={`gif-list ${isEmpty ? "gif-list--empty" : ""}`}
      data-testid="giflist-testid"
    >
      {isEmpty ? (
        <EmptyGifList />
      ) : (
        <>
          {gifs.map((gif) => (
            <GifCard key={gif.id} gif={gif} onDelete={onDelete} />
          ))}
        </>
      )}
    </div>
  );
};

export default GifList;