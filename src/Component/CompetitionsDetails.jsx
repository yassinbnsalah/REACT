import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddPlayer from "./AddPlayer";

function CompetitionsDetails() {
  const { competitionId } = useParams();
  const [participants, setParticipants] = useState();
  const [visible, setVisible] = useState(true);
  const [data, setData] = React.useState([]);
  const [data2, setData2] = React.useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/competitions/" + competitionId
      );
      setData2(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const enableAddPlayers = async () => {
    setVisible(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          padding: "20px",
          backgroundColor: "#f5f5f5",
          borderRadius: "5px",
        }}
      >
        <h1>Competition Details</h1>
        <p>Name: {data?.name}</p>
        <p>Fees: {data?.fees}</p>
        <p>Date: {data?.date}</p>
        <p>Participants: {data?.participants}</p>
        <p>Description: {data?.description}</p>
        {data?.participants > 0 ? (
          <button
            type="button"
            className="btn btn-info"
            onClick={enableAddPlayers}
          >
            participate
          </button>
        ) : (
          <button type="button" className="btn btn-info" disabled>
            participate
          </button>
        )}
        {!visible && <AddPlayer data={data2} id={competitionId}/>}
      </div>
    </div>
  );
}

export default CompetitionsDetails;
