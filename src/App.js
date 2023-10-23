import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./hocs/Layout";
import Home from "./containers/Home";
import Contacts from "./containers/Contacts";
import Portfolio from "./containers/Portfolio";
import Resume from "./containers/Resume";

const App = () => (
  <Router basename="/portfolio">
    <Layout>
      <Routes>
        <Route exact path="/portfolio" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
