import NavBar from "../components/NavBar";

const Resources = () => {
  const resources = [
    [
      "National Suicide Prevention Lifeline (988 Suicide & Crisis Lifeline) ",
      "https://988lifeline.org/",
    ],
    ["National Alliance on Mental Illness (NAMI) ", " https://www.nami.org/"],
    ["Crisis Text Line ", "https://www.crisistextline.org/"],
    ["American Foundation for Suicide Prevention (AFSP) ", "https://afsp.org/"],
    ["Mental Health America (MHA) ", "https://www.mhanational.org/"],
    ["The Jed Foundation ", " https://www.jedfoundation.org/"],
    ["ULifeline ", "https://www.ulifeline.org/"],
  ];
  return (
    <div className="bg-dark text-white" style={{ minHeight: "100vh" }}>
      <NavBar />
      <h1 className="text-white ">Resources</h1>
      <ul className="list-group bg-dark text-white border-dark">
        <li className="list-group-item bg-dark">
          <a href={resources[0][1]} target="_blank">
            {resources[0][0]}
          </a>
        </li>
        <li className="list-group-item bg-dark">
          <a href={resources[1][1]} target="_blank">
            {resources[1][0]}
          </a>
        </li>
        <li className="list-group-item bg-dark">
          <a href={resources[2][1]} target="_blank">
            {resources[2][0]}
          </a>
        </li>
        <li className="list-group-item bg-dark">
          <a href={resources[3][1]} target="_blank">
            {resources[3][0]}
          </a>
        </li>
        <li className="list-group-item bg-dark">
          <a href={resources[4][1]} target="_blank">
            {resources[4][0]}
          </a>
        </li>
        <li className="list-group-item bg-dark">
          <a href={resources[5][1]} target="_blank">
            {resources[5][0]}
          </a>
        </li>
        <li className="list-group-item bg-dark">
          <a href={resources[6][1]} target="_blank">
            {resources[6][0]}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Resources;
