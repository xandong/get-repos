import { Button } from "./styled";

interface IButtonClick {
  title: string;
  type: "button" | "submit" | "reset" | undefined;
  className?: string;
}

export function ButtonClick({ title, type }: IButtonClick) {
  return (
    <Button>
      <button type={type}>
        <span className="shadow"></span>
        <span className="edge"></span>
        <span className="front text">{title}</span>
      </button>
    </Button>
  );
}
