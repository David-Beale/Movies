import { StyledTag } from "../../../DetailsStyle";

interface IProps {
  person: string;
}

export default function CastTag({ person }: IProps) {
  if (!person) return null;
  return <StyledTag>{person}</StyledTag>;
}
