import { useCallback, useEffect, useMemo, useState } from "react";
import { debounce } from "lodash";
import {
  Input,
  SearchBarContainer,
  StyledSearchIcon,
  StyledCancelIcon,
} from "./SearchStyle";
import { useAppDispatch } from "../../../redux/hooks";
import { Mode, selectNewMode } from "../../../redux/movies";

export default function Search({ searchActive, setSearchActive }) {
  const dispatch = useAppDispatch();

  const [searchText, setSearchText] = useState("");

  const onCloseSearch = () => {
    setSearchText("");
    dispatch(selectNewMode(Mode.Popular));
  };

  const requestSearch = useMemo(
    () =>
      debounce(async (query) => {
        if (!query) return;
        dispatch(selectNewMode(Mode.Search, query));
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
        dispatch(selectNewMode(Mode.Popular));
      }
    },
    [requestSearch, dispatch]
  );

  const onFocus = () => {
    if (window.innerWidth > 500) return;
    setSearchActive(true);
  };

  const onBlur = () => {
    setSearchActive(false);
  };

  const expanded = useMemo(() => {
    if (window.innerWidth > 500) return false;
    if (searchText || searchActive) return true;
    return false;
  }, [searchActive, searchText]);

  return (
    <SearchBarContainer active={expanded}>
      {!expanded && <StyledSearchIcon fontSize="large" />}
      {(expanded || searchText) && (
        <StyledCancelIcon onClick={onCloseSearch} fontSize="large" />
      )}
      <Input
        type="text"
        id="search"
        placeholder="Search for movies..."
        value={searchText}
        onChange={onSearchTextChange}
        autoComplete="off"
        onFocus={onFocus}
        onBlur={onBlur}
        active={expanded}
      />
    </SearchBarContainer>
  );
}
