import { useSelector } from "react-redux";
import { selectFavouriteIds } from "../../../../redux/favourites";
import Favourite from "./Components/Favourite";
import { ContentContainer, FavouritesList } from "./FavouritesContentStyle";

export default function FavouritesContent() {
  const favouriteIds = useSelector(selectFavouriteIds);

  return (
    <ContentContainer>
      <FavouritesList>
        {favouriteIds.map((favouriteId) => (
          <Favourite key={favouriteId} favouriteId={favouriteId} />
        ))}
      </FavouritesList>
    </ContentContainer>
  );
}
