import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/root.css";
import { Team } from "../../Team";
import "./smallCard.css";

interface Props {
  userAvatar: string;
  userLoginName: string;
  userId: number;
  userGitHubPage: string;
}

export const SmartCard: React.FC<Props> = ({
  userAvatar,
  userGitHubPage,
  userId,
  userLoginName,
}) => {
  return (
    <div className="smallCard">
      <div className="userInfo">
        <div className="userAvatar">
          <img
            src={userAvatar}
            alt="Avatar"
            width="76px"
            height="76px"
            className="userAvatar"
          />
        </div>
        <ul className="detalisDetailsSmall">
          <li>
            <b>@{userLoginName}</b>
          </li>
          <Team id={userId} />
          <li>
            <a href={userGitHubPage}>
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="Logo git"
                width="14px"
                height="14px"
              />
              GitHub pages
            </a>
          </li>
        </ul>
      </div>
      <div className="detailsLink">
        <Link to={`/details/${userLoginName}`}>Details</Link>
        {/* <a href={`/details/${userLoginName}`} target="_blank" rel="noreferrer">
          Details
        </a> */}
      </div>
    </div>
  );
};
