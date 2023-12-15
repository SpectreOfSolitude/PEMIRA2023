import React, { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const DataJobContext = createContext();

export const DataJobProvider = (props) => {
  const navigate = useNavigate();
  const [result, setResult] = useState([]);
  const [isVote, setIsVote] = useState(false);
  const [input, setInput] = useState({
    NIM: "",
    uniqueCode: "",
  });

  const handleSubmit = (event) => {
    console.log(input);
    event.preventDefault();

    let { NIM } = input;
    // if (input[5] !== 1) {
      axios
      .post(`http://127.0.0.1:3000/api/students/check/`, {
        NIM,
      })
      .then((res) => {
        console.log(res.data["message"]);
        if (res.data["message"] === "Rejected") {
          alert("Sudah pernah melakukan Voting");
        } else {
          navigate("/token");
        }
      });
    // }
    // else{
    //   alert("Sudah tua");
    // }
  };
  const handleTokenSubmit = (event) => {
    console.log(input);
    event.preventDefault();

    let { NIM, uniqueCode } = input;

    axios
      .post(`http://127.0.0.1:3000/api/students/validate/`, {
        NIM,
        uniqueCode,
      })
      .then((res) => {
        console.log(res.data["message"]);
        if (res.data["message"] === "Rejected") {
          alert("TOKEN INVALID");
        } else {
          navigate("/calon");
        }
      });
  };

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setInput({ ...input, [name]: value });
  };
  const handleVoteA = (event) => {
    event.preventDefault();

    let candidate = "A";

    axios
      .put(`http://127.0.0.1:3000/api/votes/`, {
        candidate,
      })
      .then((res) => {
        console.log(res.data["message"]);
        if (res.data["message"] === "Rejected") {
        } else {
          navigate("/");
          // navigate("/end");
          alert("BERHASIL MELAKUKAN VOTE");
        }
      });
  };

  const handleVoteB = (event) => {
    event.preventDefault();

    let candidate = "B";

    axios
      .put(`http://127.0.0.1:3000/api/votes/`, {
        candidate,
      })
      .then((res) => {
        console.log(res.data["message"]);
        if (res.data["message"] === "Rejected") {
        } else {
          // navigate("/end");
          navigate("/");
          alert("BERHASIL MELAKUKAN VOTE");
        }
      });
  };

  const handleVoteC = (event) => {
    event.preventDefault();

    let candidate = "C";

    axios
      .put(`http://127.0.0.1:3000/api/votes/`, {
        candidate,
      })
      .then((res) => {
        console.log(res.data["message"]);
        if (res.data["message"] === "Rejected") {
        } else {
          // navigate("/end");
          navigate("/");
          alert("BERHASIL MELAKUKAN VOTE");
        }
      });
  };

  

  let handleFunctions = {
    handleSubmit,
    handleChange,
    handleTokenSubmit,
    handleVoteA,
    handleVoteB,
    handleVoteC,

  };

  let state = {
    input,
    result,
    setResult,
    setInput,
    isVote,
    setIsVote,
    // fetchStatus,
    // setFetchStatus,
  };

  return (
    <>
      <DataJobContext.Provider value={{ handleFunctions, state }}>
        {props.children}
      </DataJobContext.Provider>
    </>
  );
};
