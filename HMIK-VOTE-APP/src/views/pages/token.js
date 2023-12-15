import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataJobContext } from "../../context/dataContext";
import hmiklogo from "../../assets/himakom.png";

const Token = () => {
  const navigate = useNavigate();
  const { handleFunctions, state } = useContext(DataJobContext);
  let { handleChange, handleTokenSubmit } = handleFunctions;

  let { input } = state;
  useEffect(() => {
    if (!Boolean(input.NIM)) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <div className="card">
        <div className="header-card-container">
          <img src={hmiklogo} alt="logo HMIK uper" />
        </div>
        <form
          onSubmit={handleTokenSubmit}
          method="POST"
          className="content-card-container"
        >
          <h3>TOKEN</h3>
          <input
            onChange={handleChange}
            value={input.uniqueCode}
            type="text"
            name="uniqueCode"
            placeholder="TOKEN"
            required
            className="inputForm"
          />

          <button className="submitBtn" type="submit">
            SUBMIT TOKEN
          </button>
        </form>
      </div>
    </>
  );
};

export default Token;
