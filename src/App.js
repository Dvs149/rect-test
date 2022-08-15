import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter
} from "react-router-dom";
import LinkDemo from "./components/LinkDemo";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<TextForm />}>
            {/* <Route index element={<LinkDemo />} /> */}
            {/* <Route path=":teamId" element={<Team />} /> */}
            {/* <Route path="new" element={<NewTeamForm />} /> */}
            {/* <Route index element={<LeagueStandings />} /> */}
            {/* </Route> */}
          </Route>
          <Route path="Link" element={<LinkDemo />} />
        </Routes>
      </BrowserRouter>
      <div className="container">
        {/* <TextForm /> */}
      </div>
    </>
  );
}


export default App;
