import React, { useContext, useEffect, useState } from "react";
import { DataJobContext } from "../../context/dataContext";

const End = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  function handleClick() {
    const confirmation = window.confirm("Are you sure you want to do this?");
    setIsConfirmed(confirmation);
  }
  const { state } = useContext(DataJobContext);

  let { setInput } = state;
  useEffect(() => {
    setInput({
      uniqueCode: "",
      NIM: "",
    });
  }, []);
  return (
    <div>
      <h1>TERIMAKASIH</h1>
      <p>This is where you can find all the latest updates and information.</p>
      <button>
        <div>
          <button onClick={handleClick}>Confirm</button>
          {isConfirmed ? <p>Confirmed!</p> : null}
        </div>
        <a href="/"> Vote lagi</a>
      </button>
    </div>
  );
};

export default End;
