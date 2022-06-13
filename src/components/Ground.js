import React, { useState } from "react";

const Ground = () => {
  const [limit, setLimit] = useState(50);
  const [text, setText] = useState("");
  const [range, setRange] = useState("16");

  const limitHandler = (e) => {
    setLimit(e.target.value);
  };
  const textHandler = (e) => {
    if (text.length < limit) {
      setText(e.target.value);
    }
  };
  const rangeHandler = (e) => {
    setRange(e.target.value);
  };
  // const style = {
  //   height: `${range}px`
  // };
  return (
    <div>
      <div>
        <input
          type="range"
          onInput={rangeHandler}
          defaultValue={range}
          id="fontSize-input"
          min="16"
          max="32"
        />
      </div>
      <div>
        <input
          type="number"
          id="char-limit-input"
          value={limit}
          onChange={limitHandler}
        />
      </div>
      <div>
        <textarea
          style={{
            fontSize: `${range}px`
          }}
          placeholder="Enter words here"
          onChange={textHandler}
          value={text}
        />
      </div>
      <div id="word-counter">
        Total number of words written:{" "}
        {text.length !== 0
          ? text.split(" ").filter(function (n) {
              return n !== "";
            }).length
          : 0}
      </div>
      <div id="char-counter">
        Total number of characters used: {text.length !== 0 ? text.length : 0}
      </div>
    </div>
  );
};

export default Ground;
