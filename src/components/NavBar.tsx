import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/resources">Resources</Link>
    </>
  );
};

export default NavBar;
