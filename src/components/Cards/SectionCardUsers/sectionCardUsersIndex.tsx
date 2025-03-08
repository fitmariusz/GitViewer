// import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../../app/store";
import { UsersFetch } from "../../../app/userTypes";
import { fetchUsers } from "../../../sliceGit/gitSlice";
import { SmartCard } from "../SmallCard/smallCardIndex";
import "./sectionCardUsers.css";

export const SectionCardUsers: React.FC = () => {
  const gitInfo = useSelector((state: RootState) => state.git);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      {gitInfo.isLoading ? (
        <div className="cardsContainer">
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div className="cardsContainer">
          {Array.isArray(gitInfo.users) &&
            gitInfo.users.map((user: UsersFetch) => (
              <SmartCard
                key={user.id}
                userAvatar={user.avatar_url}
                userLoginName={user.login}
                userId={user.id}
                userGitHubPage={user.html_url}
              ></SmartCard>
            ))}
        </div>
      )}
    </div>
  );
};
