import React, { useEffect, useState } from "react";
import Competition from "./Competition";
import axios from "axios";
import { Container, Table, Button } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./NavigationBar";
function Competitions() {
  const [data, setData] = useState();
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/competitions");
   
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() =>   {
    fetchData();
  }, []);

 

  return (
    
    <Container>
      <NavigationBar></NavigationBar>
      <h1>Liste Competitions</h1>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Fees</th>
            <th>Date</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
           <Competition data={item} key={index}/>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Competitions;
