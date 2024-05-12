import React from "react";
import { Link } from "react-router-dom";

function Competition({ data }) {
  return (
    <tr key={data.id}>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.fees}</td>
      <td>{data.date}</td>
      <td>
        <Link to={`/competition/${data.id}`} className="btn btn-danger">
          Details
        </Link>
        {/* Add competition details link or component */}
      </td>
    </tr>
  );
}

export default Competition;
