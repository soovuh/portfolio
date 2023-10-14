import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import styles from "../styles/base.module.css";

const Layout = (props) => {
  const location = useLocation();
  console.log(`Current loccation is ${location.pathname}`);
  return (
    <div className={styles.app}>
      <Navbar path={location.pathname} />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
