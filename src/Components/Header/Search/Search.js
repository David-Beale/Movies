import { useCallback, useEffect, useMemo, useState } from "react";
import { debounce } from "lodash";
import {
  Input,
  SearchBarContainer,
  StyledSearchIcon,
  StyledCancelIcon,
} from "./SearchStyle";
import { useAppDispatch } from "../../../redux/hooks";
import { closeSearch, setSearchQuery } from "../../../redux/movies";

export default function Search() {
  const dispatch = useAppDispatch();

  const [searchText, setSearchText] = useState("");

  const onCloseSearch = () => {
    setSearchText("");
    dispatch(closeSearch());
  };

  const requestSearch = useMemo(
    () =>
      debounce(async (query) => {
        if (!query) return;
        dispatch(setSearchQuery(query));
      }, 300),
    [dispatch]
  );

  useEffect(() => {
    return () => {
      requestSearch.cancel();
    };
  }, [requestSearch]);

  const onSearchTextChange = useCallback(
    (e) => {
      requestSearch(e.target.value);
      setSearchText(e.target.value);
      if (!e.target.value) {
        dispatch(closeSearch());
      }
    },
    [requestSearch, dispatch]
  );

  return (
    <SearchBarContainer>
      <StyledSearchIcon fontSize="large" />
      <Input
        type="text"
        id="search"
        placeholder={"Search for movies..."}
        value={searchText}
        onChange={onSearchTextChange}
        autoComplete="off"
      />
      {searchText && (
        <StyledCancelIcon onClick={onCloseSearch} fontSize="large" />
      )}
    </SearchBarContainer>
  );
}
