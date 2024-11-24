interface ButtonProps {
  text: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  onClick?: () => void;
  big?: string;
}

const Button = ({
  text,
  color = "primary",
  onClick = () => {},
  big = "false",
}: ButtonProps) => {
  return (
    <div className="text-center">
      <button
        type="button"
        className={"btn btn-" + color}
        style={{
          marginTop: "15px",
          height: big === "true" ? "140px" : "55px",
          width: big === "true" ? "250px" : "160px",
        }}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
