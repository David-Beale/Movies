import "./App.css";
import ContentGrid from "./Components/Content/ContentGrid";
import DetailsDialog from "./Components/DetailsDialog/DetailsDialog";
import Error from "./Components/Error/Error";
import FavouritesPanel from "./Components/Favourites Panel/FavouritesPanel";
import Header from "./Components/Header/Header";
import { useAppSelector } from "./redux/hooks";

export default function App() {
  const error = useAppSelector(({ movies }) => movies.error);
  return (
    <>
      <Header />
      {!error ? <ContentGrid /> : <Error />}
      <FavouritesPanel />
      <DetailsDialog />
    </>
  );
}
