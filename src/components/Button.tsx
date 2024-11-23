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
}

const Button = ({ text, color = "primary" }: ButtonProps) => {
  return (
    <>
      <hr />
      <button type="button" className={"btn btn-" + color}>
        {text}
      </button>
    </>
  );
};

export default Button;
