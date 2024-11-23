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
  onClick: () => void;
}

const Button = ({ text, color = "primary", onClick }: ButtonProps) => {
  return (
    <>
      <hr />
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default Button;
