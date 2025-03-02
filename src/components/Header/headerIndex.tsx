import * as React from "react";


// import "../../styles/root"
import "./header.css";

import { Link } from "react-router-dom";
import { Title } from "../Title/titleIndex";

interface Props {
  title: string;
  pathLogo: string;
  altLogo: string;
  mainPage: boolean;
}
export const Header: React.FC<Props> = ({ pathLogo, title, altLogo , mainPage=true}) => {

  return (
    <div className="divHeader">
      { mainPage === false ? <Link to="/" className="headerLink">Back</Link> : null}
      <div className="divHeaderTitle">

      <img src={pathLogo} alt={altLogo} width="50" height="50" />
      <Title>{title}</Title>
      </div>
    </div>
  );
};
