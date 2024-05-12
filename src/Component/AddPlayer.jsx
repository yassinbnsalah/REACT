import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../store";

function AddPlayer({ data, id }) {
  const [playerName, setPlayerName] = useState("");
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    setPlayerName(event.target.value);
  };
  const handleAddClick = async () => {
    console.log(data);
    if (data.players.find((item2) => item2.name === playerName)) {
      alert("Player already exists");
    } else {
      data.players.push({ name: playerName });
      data.participants = data.participants - 1;

      try {
        const response = await axios.put(
          "http://localhost:3001/competitions/" + id,
          data
        );

        console.log("Player added successfully:", response.data);
      } catch (error) {
        console.error("Error adding player:", error);
      }

      dispatch(setData(playerName));
    }
  };
  return (
    <>
      <input
        type="text"
        name="name"
        value={playerName}
        onChange={handleInputChange}
      />
      <button onClick={handleAddClick}>Add</button>
    </>
  );
}

export default AddPlayer;
