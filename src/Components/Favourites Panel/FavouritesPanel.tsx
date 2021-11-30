import { useAppSelector } from "../../redux/hooks";
import FavouritesContent from "./Components/FavouritesContent/FavouriteContent";
import FavouritesHeader from "./Components/FavouritesHeader/FavouritesHeader";
import { FavouritesPanelContainer } from "./FavouritesPanelStyle";

export default function FavouritesPanel() {
  const open = useAppSelector(({ favourites }) => favourites.open);

  return (
    <FavouritesPanelContainer open={open}>
      <FavouritesHeader />
      <FavouritesContent />
    </FavouritesPanelContainer>
  );
}
