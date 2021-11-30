import { toggleOpen } from "../../redux/favourites";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Button, HeaderContainer, SiteHeading } from "./HeaderStyle";

export default function Header() {
  const dispatch = useAppDispatch();
  const open = useAppSelector(({ favourites }) => favourites.open);

  const onClick = () => {
    dispatch(toggleOpen());
  };

  return (
    <HeaderContainer>
      <SiteHeading>Marvel Comics</SiteHeading>
      <Button onClick={onClick} open={open} />
    </HeaderContainer>
  );
}
