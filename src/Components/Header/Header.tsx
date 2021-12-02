import { toggleOpen } from "../../redux/favourites";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Button, HeaderContainer } from "./HeaderStyle";
import Search from "./Search/Search";

export default function Header() {
  const dispatch = useAppDispatch();
  const open = useAppSelector(({ favourites }) => favourites.open);

  const onClick = () => {
    dispatch(toggleOpen());
  };

  return (
    <HeaderContainer>
      <Search />
      <Button onClick={onClick} open={open} />
    </HeaderContainer>
  );
}
