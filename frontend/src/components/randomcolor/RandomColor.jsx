import React, { useState } from "react";

const RandomColor = () => {
  const [colortype, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomHex = (length) => {
    return Math.floor(Math.random() * length);
  };
  const hexHandler = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomHex(hex.length)];
    }
    setColor(hexColor);
  };
  const rgbHandler = () => {
    const r = randomHex(256);
    const g = randomHex(256);
    const b = randomHex(256);
    setColor(`rgb(${r},${g},${b})`);
  };
  return (
    <div className={`w-screen h-screen`} style={{ background: color }}>
      <div className="flex  justify-between p-5">
        <div
          className=" border border-white p-5 rounded-md cursor-pointer text-white"
          onClick={() => setColorType("hex")}
        >
          <button>Hex</button>
        </div>
        <div
          style={{ background: color }}
          className=" border border-white p-5 rounded-md cursor-pointer text-white"
          onClick={() => setColorType("rgb")}
        >
          <button>RGB</button>
        </div>
        <div
          style={{ background: color }}
          className=" border border-white p-5 rounded-md cursor-pointer text-white"
          onClick={colortype === "hex" ? hexHandler : rgbHandler}
        >
          <button>Random Color</button>
        </div>
      </div>
      <div>
        <h1 className="font-bold bg-yellow-500 text-lg">
          {colortype === "hex" ? "HEX COLOR" : "RGB COLOR"}
        </h1>
        <h3 className="font-bold bg-blue-500 text-lg text-white">{color}</h3>
      </div>
    </div>
  );
};

export default RandomColor;
