import React, { useEffect } from "react";
import "../../../styles/root.css";
import { Team } from "../../Team";
import "./detalisCard.css";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { fetchUserDetails, fetchUserRepos } from "../../../sliceGit/gitSlice";

interface Props {
  login: string;
}

export const DetalisCard: React.FC<Props> = ({ login }) => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserDetails(login));
  }, [dispatch, login]);

  const gitInfo = useSelector((state: RootState) => state.git);
  useEffect(() => {
    dispatch(fetchUserRepos(login));
  }, [dispatch, login]);

  return (
    <div>
      {gitInfo.isLoading ? (
        <div className="detalisCard">
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div className="detalisCard">
          <h3 className="detalisCard-h3">Profile</h3>
          <div className="detalisInfo">
            <div className="detalisAvatar">
              <img
                src={gitInfo.userDetails?.avatar_url}
                alt="Avatar"
                width="120px"
                height="120px"
                className="detalisAvatar"
              />
            </div>
            <ul className="detalisDetails">
              <li>
                <b>{gitInfo.userDetails?.name}</b>
              </li>
              <li>
                <b>@{gitInfo.userDetails?.login}</b>
              </li>
              <Team id={gitInfo.userDetails?.id ?? 0} />
              <li>
                <a href={gitInfo.userDetails?.gists_url ?? ""}>
                  <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    alt="Logo git"
                    width="14px"
                    height="14px"
                  />
                  GitHub page
                </a>
              </li>
            </ul>
          </div>
          <div className="detalisRepositories">
            <h3 className="detalisRepositories-h3">Repositories</h3>
            <ul className="detalisRepositories-ul">
              <li>Repositories count {gitInfo.userDetails?.public_repos}</li>
              <li> Repositories list</li>
              <ul>
                {gitInfo.isLoading ? (
                  <div className="lds-facebook">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                ) : (
                  Array.isArray(gitInfo.userRepos) &&
                  gitInfo.userRepos.map((repo) => (
                    <li key={repo.id}>{repo.name}</li>
                  ))
                )}
              </ul>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
