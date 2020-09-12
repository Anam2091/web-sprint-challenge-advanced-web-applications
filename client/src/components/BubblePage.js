import React, { useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColors from './fetchColors';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  fetchColors().then((response) => {
      setColorList(response.data);
    });
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
