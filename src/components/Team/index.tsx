import React from "react";
import "./team.css";

interface Props {
  id: number;
}

export const Team: React.FC<Props> = ({ id }) => {
  if (id % 4 === 0 && id % 6 === 0) {
    return (
      <li>
        <span className="teamC">Team C</span> ID:#{id}
      </li>
    );
  } else if (id % 4 === 0 && id % 6 != 0) {
    return (
      <li>
        <span className="teamA">Team A</span> ID:#{id}
      </li>
    );
  } else if (id % 4 != 0 && id % 6 === 0) {
    return (
      <li>
        <span className="teamB">Team B</span> ID:#{id}
      </li>
    );
  } else {
    return <li>ID:#{id}</li>;
  }
};
