

import "../../../styles/root.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "../../Header/headerIndex";
import { DetalisCard } from "../../Cards/DetalicCard/detalisCardindex";


const Details: React.FC = (): React.ReactElement => {
  const { login} = useParams<{ login: string }>();
 useEffect(()=>{
  window.scrollTo(0, 0);
  },[])

  return (
    <div className="App">
      <Header
        title={"GitHub users"}
        pathLogo={
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        }
        altLogo={"GitHub Logo"}
        mainPage={false}
      ></Header>
      {/* <SectionCardUsers/> */}

      <DetalisCard login={`${login}`} />
    </div>
  );
};

export default Details;

