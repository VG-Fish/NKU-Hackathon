import { useState } from "react";
import { useLocation } from "react-router-dom";
import Alert from "../components/Alert";

const Scenario = () => {
  const [alertVisible, setAlertVisibility] = useState(true);

  const location = useLocation();
  const index = location.state ?? 0; // if state is undefined, index will be 0.

  const descriptions = [
    "Your friend is a lonely college student isolated by your peers; it's taking a toll on their mental health.",
    "Your friend is a college student frequently bullied by your peers.",
    "Your friend is a stressed college student constantly worrying about their grades.",
  ];
  const scenario = `${descriptions[index]} One day, you decide to help out your friend by offering some advice. What will you tell them?`;

  return (
    <>
      {alertVisible && (
        <Alert
          alertType="warning"
          closeable={true}
          onClose={() => setAlertVisibility(false)}
        >
          While the following demo gives a unadvantageous situation for Google
          Gemini, we want to demonstrate one point:{" "}
          <strong>
            No matter the situation, just like a real mental health
            professional, LLMs should always output helpful advice. As it
            stands, current LLMs <em>do not</em> meet this requirement.
          </strong>
        </Alert>
      )}
      <Alert alertType="primary" closeable={false}>
        {scenario}
      </Alert>
    </>
  );
};

export default Scenario;
