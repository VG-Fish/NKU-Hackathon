import { useLocation } from "react-router-dom";

const Scenario = () => {
  const location = useLocation();
  const index = location.state;

  const descriptions = [
    "Your friend is a lonely college student isolated by your peers; it's taking a toll on their mental health.",
    "Your friend is a college student frequently bullied by your peers.",
    "Your friend is a stressed college student constantly worrying about their grades.",
  ];
  const scenario = `${descriptions[index]} One day, you decide to help out your friend by offering some advice. What will you tell them?`;

  return (
    <>
      <p>{scenario}</p>
    </>
  );
};

export default Scenario;
