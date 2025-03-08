
import "../../../styles/root.css";
import { SectionCardUsers } from "../../Cards/SectionCardUsers/sectionCardUsersIndex";
import { Header } from "../../Header/headerIndex";

const Home = (): React.ReactElement => {
  return (
    <div className="App">
      <Header
        title={"GitHub users"}
        pathLogo={"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"}
        altLogo={"GitHub Logo"}
        mainPage={true}      ></Header>
      <SectionCardUsers />
    </div>
  );
};

export default Home;

