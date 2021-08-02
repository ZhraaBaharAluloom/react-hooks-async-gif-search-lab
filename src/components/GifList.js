import React from "react";

// Styles
const styles = {
  padding: 10,
};

const GifList = ({ image }) => {
  return (
    <div style={styles}>
      <img width=" 400" height="300" src={image} alt="pics" />
    </div>
  );
};

export default GifList;
