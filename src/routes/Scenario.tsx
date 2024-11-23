import { useLocation } from "react-router-dom";

const Scenario = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <>
      <h1>{data}</h1>
    </>
  );
};

export default Scenario;
