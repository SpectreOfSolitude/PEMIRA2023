import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { DataJobContext } from "../../context/dataContext";
import { BarChart, Bar } from "recharts";
import candidate1 from "../../assets/candidate1.jpg";
import candidate2 from "../../assets/candidate2.jpg";
import candidate3 from "../../assets/candidate3.jpg";


const Result = () => {
  const { handleFunctions, state } = useContext(DataJobContext);
  let [fetchStatus, setFetchStatus] = useState(true);

  let {
    handleText,
    handleChange,
    handleSubmit,
    handleEdit,
    handleDelete,
    handleStatus,
    handleSalary,
  } = handleFunctions;

  let {
    result,
    setResult,
    // fetchStatus, setFetchStatus
  } = state;

  const fetchData = async () => {
    let { data } = await axios.get(`http://127.0.0.1:3000/api/votes/`);
    // console.log(data);

    let resultt = data["data"].map((res) => {
      let { _id, candidate, voteAmount } = res;

      return {
        _id,
        candidate,
        voteAmount,
      };
    });
    setResult([...resultt]);
  };
  useEffect(() => {
    if (fetchStatus) {
      fetchData();
      setFetchStatus(false);
    }
    // const interval = setInterval(() => {
    //   // Fetch data here, and update state using setData
    //   fetchData();
    // }, 12000); // 120000 milliseconds = 2 minutes

    // return () => clearInterval(interval);
  }, [fetchStatus]);
  console.log(fetchStatus);
  const data = result.map((res) => {
    return {
      name: res.candidate,
      uv: res.voteAmount,
    };
  });
  // setInterval(setFetchStatus(true), 3 * 60000);
  // console.log(data);

  return (
    <div>
      <div className="columnContainer center">
        <div className="center">
          <h1>RESULT</h1>
          <hr></hr>
          <BarChart width={300} height={500} data={data}>
            <Bar dataKey="uv" fill="#8884d8" />
          </BarChart>
        </div>
      </div>
      {result !== undefined && (
        <div className="center">
          <div className="rowContainer">
            {result.map((res) => {
              return (
                <>
                  {/* <h1>{res.candidate}</h1> */}
                  <h1 className="justifyCenter">{res.voteAmount}</h1>
                </>
              );
            })}
          </div>
          <div className="rowContainer">
            <h1 className="justifyCenter"> Kandidat 1</h1>
            <h1 className="justifyCenter"> Kandidat 2</h1>
            <h1 className="justifyCenter"> Kandidat 3</h1>

          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
