import React from 'react';
import { Search, SearchWrapper, SearchIconButton } from '../elements';
import SearchIcon from '@material-ui/icons/Search';

interface Props {
  onSearchTermChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchTermKeyDown: (evt: React.KeyboardEvent<HTMLInputElement>) => void;
  onSearchClick: (evt: React.MouseEvent) => void;
}
const MovieSearch: React.FC<Props> = ({
  onSearchTermChange,
  onSearchTermKeyDown,
  onSearchClick
}) => {
  return (
    <SearchWrapper>
      <Search
        label='Search Movies'
        type='search'
        margin='normal'
        onChange={onSearchTermChange}
        inputProps={{
          onSearchTermKeyDown
        }}
      />
      <SearchIconButton onClick={onSearchClick} aria-label='Search Movies'>
        <SearchIcon />
      </SearchIconButton>
    </SearchWrapper>
  );
};

export default MovieSearch;
