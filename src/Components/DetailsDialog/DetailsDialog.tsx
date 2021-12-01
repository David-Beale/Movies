import { forwardRef, JSXElementConstructor, ReactElement } from "react";
import Dialog from "@mui/material/Dialog";
import Zoom from "@mui/material/Zoom";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { clearDetailsId } from "../../redux/details";
import { TransitionProps } from "@mui/material/transitions";
import Details from "./Components/Details/Details";
import PaperComponent from "./Components/Paper/PaperComponent";

const Transition = forwardRef(function Transition(props, ref) {
  const detailsOrigin = useAppSelector(({ details }) => details.position);
  return (
    <Zoom
      ref={ref}
      {...props}
      style={{ transformOrigin: detailsOrigin }}
      timeout={500}
    />
  );
}) as JSXElementConstructor<
  TransitionProps & { children: ReactElement<any, any> }
>;

export default function DetailsDialog() {
  const dispatch = useAppDispatch();
  const movieId = useAppSelector(({ details }) => details.id);

  const onClose = () => {
    dispatch(clearDetailsId());
  };

  return (
    <Dialog
      open={movieId > 0}
      TransitionComponent={Transition}
      onClose={onClose}
      maxWidth={false}
      PaperComponent={PaperComponent}
    >
      <Details movieId={movieId} />
    </Dialog>
  );
}
