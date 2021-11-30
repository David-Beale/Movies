import { useAppSelector } from "../../redux/hooks";
import { ErrorContainer } from "./ErrorStyle";

export default function Error() {
  const sidePanelOpen = useAppSelector(({ favourites }) => favourites.open);
  return (
    <ErrorContainer sidePanelOpen={sidePanelOpen}>
      Oops, something went wrong 🤨
    </ErrorContainer>
  );
}
