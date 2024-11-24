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
}

const Button = ({
  text,
  color = "primary",
  onClick = () => {},
}: ButtonProps) => {
  return (
    <div className="text-center">
      <button
        type="button"
        className={"btn btn-" + color}
        style={{ height: "140px", width: "250px" }}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
