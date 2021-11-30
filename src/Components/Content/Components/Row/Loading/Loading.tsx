import { LoadingContainer, Progress } from "./LoadingStyle";

interface IProps {
  style: { top: number; left: number };
}
export default function Loading({ style }: IProps) {
  return (
    <LoadingContainer top={style.top} left={style.left}>
      <Progress size={100} thickness={2} />
    </LoadingContainer>
  );
}
