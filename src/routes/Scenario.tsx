import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import UserInput from "../components/UserInput";
import Gemini from "../components/Gemini";
import Button from "../components/Button";

const Scenario = () => {
  const [alertVisible, setAlertVisibility] = useState(true);
  const [inputVisible, setInputVisibility] = useState(true);
  const [geminiResponse, setGeminiResponse] = useState<string | null>(null);

  const location = useLocation();
  const index = location.state ?? 0; // if state is undefined, index will be 0.

  const descriptions = [
    "Your friend is a lonely college student isolated by your peers; it's taking a toll on their mental health.",
    "Your friend is a college student who is bullied by your peers.",
    "Your friend is a stressed college student constantly worrying about their grades.",
  ];
  const scenario = `${descriptions[index]} One day, you decide to help out your friend by offering some advice. What will you tell them?`;

  const handleGeminiRequest = async (scenario: string) => {
    try {
      const response = await Gemini(scenario);
      setGeminiResponse(response);
    } catch (_) {
      setGeminiResponse("Error fetching Gemini response");
    }
  };

  useEffect(() => {
    handleGeminiRequest(scenario);
  }, [scenario]);

  const navigate = useNavigate();

  return (
    <div className="bg-dark text-white" style={{ minHeight: "100vh" }}>
      {alertVisible && (
        <Alert
          alertType="warning"
          closeable={true}
          onClose={() => setAlertVisibility(false)}
        >
          While the following demo gives a unadvantageous situation for Google
          Gemini, we want to demonstrate one point:{" "}
          <strong style={{ marginRight: "5px" }}>
            No matter the situation, just like a real mental health
            professional, LLMs should always output helpful advice. As it
            stands, current LLMs <em>do not</em> meet this requirement.
          </strong>
        </Alert>
      )}
      <Alert alertType="primary" closeable={false}>
        {scenario}
      </Alert>
      <UserInput
        inputVisible={inputVisible}
        setInputVisibility={setInputVisibility}
      />
      {!inputVisible && (
        <div>
          <Alert alertType="info" closeable={false}>
            <strong>Google Gemini Response: </strong>
            {geminiResponse}
          </Alert>
          <Alert alertType="success" closeable={false}>
            <span style={{ marginRight: "20px" }}>
              Now that you've read the Google Gemini response, how about
              clicking the Resources Page button and seek professional help?
            </span>
            <Button
              text="Resources Page"
              onClick={() => navigate("/resources")}
            ></Button>
          </Alert>
        </div>
      )}
    </div>
  );
};

export default Scenario;
