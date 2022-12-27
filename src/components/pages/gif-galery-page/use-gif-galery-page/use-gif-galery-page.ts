import { useState, useEffect } from "react";
import GifService from "../../../../services/gif-service";
import Gif from "../../../../utils/interfaces/gif";
import { UseGifGaleryPageReturn } from "./use-gif-galery.interfaces";

const useGifGaleryPage = (): UseGifGaleryPageReturn => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [url, setUrl] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSearchInput = (value: string) => {
    setError("");
    setUrl(value);
  };

  const addGif = async () => {
    if (!url) return setError("Debe ingresar una url");
    try {
      setError("");
      const responseGif = await GifService.postNewGif(url);
      setGifs([...gifs, responseGif]);
      setUrl("");
    } catch (error) {
      setError("Error al agregar gif");
      setUrl("");
    }
  };

  const deleteGif = async (id: number, url: string) => {
    try {
      await GifService.deleteGif(id, url);
      setGifs(gifs.filter((gif) => gif.id !== id));
    } catch (error) {
      setError("Error al eliminar gif");
    }
  };

  const getGifs = async () => {
    try {
      const responseGifs = await GifService.getGifsByAuthorId();
      setGifs(responseGifs);
    } catch (error) {
      setError("Error al obtener gifs");
    }
  };

  useEffect(() => {
    getGifs();
  }, []);

  return {
    url,
    handleSearchInput,
    addGif,
    error,
    gifs,
    deleteGif,
  };
};

export default useGifGaleryPage;