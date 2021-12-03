import { toggleOpen } from "../../redux/favourites";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { FavButton, FavButtonContainer, HeaderContainer } from "./HeaderStyle";
import ModeSelect from "./ModeSelect/ModeSelect";
import Search from "./Search/Search";

export default function Header() {
  const dispatch = useAppDispatch();
  const open = useAppSelector(({ favourites }) => favourites.open);

  const onClick = () => {
    dispatch(toggleOpen());
  };

  return (
    <HeaderContainer>
      <FavButtonContainer onClick={onClick}>
        <FavButton open={open} />
      </FavButtonContainer>
      <Search />
      <ModeSelect />
    </HeaderContainer>
  );
}
