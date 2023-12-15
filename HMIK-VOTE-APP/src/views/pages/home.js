import React, { useContext, useEffect } from "react";
import { DataJobContext } from "../../context/dataContext";
import hmiklogo from "../../assets/himakom.png";

const Home = () => {
  const { handleFunctions, state } = useContext(DataJobContext);
  let { handleChange, handleSubmit } = handleFunctions;

  let { input, setInput } = state;
  useEffect(() => {
    setInput({
      uniqueCode: "",
      NIM: "",
    });
  }, []);

  return (
    <>
      <div className="card">
        <div className="header-card-container">
          <img src={hmiklogo} alt="logo HMIK uper" />
        </div>
        <form
          onSubmit={handleSubmit}
          method="POST"
          className="content-card-container"
        >
          <h3>NIM</h3>
          <input
            onChange={handleChange}
            value={input.NIM}
            type="number"
            placeholder="NIM"
            name="NIM"
            minLength="9"
            required
            className="inputForm"
          />

          <button className="submitBtn" type="submit">
            SUBMIT NIM
          </button>
        </form>
      </div>

      {/* <button><a href='/result'>LIHAT HASIL VOTING</a></button> */}
    </>
  );
};

export default Home;
