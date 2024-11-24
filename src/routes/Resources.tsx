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
      <h1 className="text-white text-center mt-2">Resources</h1>
      <ul className="list-group bg-dark text-white border-dark list-group-flush">
        {resources.map((resource) => (
          <li className="list-group-item bg-dark" style={{ border: "none" }}>
            <a href={resource[1]} target="_blank">
              {resource[0]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;
