import { clearDetailsId } from "../../../../../redux/details";
import { useAppDispatch } from "../../../../../redux/hooks";
import { Button } from "./CloseButtonStyle";

export default function CloseButton() {
  const dispatch = useAppDispatch();
  const onClose = () => {
    dispatch(clearDetailsId());
  };
  return <Button onClick={onClose} />;
}
