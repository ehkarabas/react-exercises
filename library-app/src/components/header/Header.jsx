import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HeaderButton,
  HeaderContainer,
  HeaderForm,
  HeaderTitle,
  SearchInput,
  SelectBox,
} from "./Header.style";

const Header = ({
  query,
  setQuery,
  selectType,
  setSelectType,
  myData,
  getData,
}) => {
  const navigate = useNavigate();
  const printType = ["all", "books", "magazines"];
  const handleSubmit = (e) => {
    console.log(selectType);
    e.preventDefault();
    getData();
    navigate(`/query/${query}&${selectType}`);
  };

  return (
    <HeaderContainer>
      <HeaderTitle>Books or Magazines</HeaderTitle>
      <HeaderForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          required
        />
        <SelectBox
          onChange={(e) => {
            setSelectType(e.target.value);
          }}
        >
          {printType.map((type, index) => {
            return (
              <option key={`type${index + 1}`} value={type}>
                {type}
              </option>
            );
          })}
        </SelectBox>
        <HeaderButton type="submit">Search</HeaderButton>
      </HeaderForm>
    </HeaderContainer>
  );
};

export default Header;
