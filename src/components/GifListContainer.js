import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

// Styles
const styles = {
  imagesList: { display: "flex", flexWrap: "wrap", justifyContent: "center" },
};

const GifListContainer = () => {
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g"
    )
      .then((r) => r.json())
      .then((data) => {
        setImages(data.data.slice(0, 3));
      });
    setIsLoaded(true);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=idSAtbFURDVN0C43eetUc33jH7D3J3Vo`
    )
      .then((r) => r.json())
      .then((data) => setImages(data.data.slice(0, 3)));
  };

  if (!isLoaded) return <h1>Loading ...</h1>;

  const imageList =
    images !== null
      ? images.map((image) => (
          <GifList image={image.images.original.url} key={image.id} />
        ))
      : [];

  return (
    <>
      <GifSearch
        search={search}
        setSearch={setSearch}
        handleSubmit={handleSubmit}
      />
      <div style={styles.imagesList}>{imageList}</div>
    </>
  );
};

export default GifListContainer;
