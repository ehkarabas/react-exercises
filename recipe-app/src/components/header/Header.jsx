import Form from "./Form";

const Header = ({
  query,
  setQuery,
  mealTypes,
  mealType,
  setMealType,
  getRecipes,
}) => {
  return (
    <>
      <h1 className="text-light">Food App</h1>
      <Form
        query={query}
        setQuery={setQuery}
        mealTypes={mealTypes}
        mealType={mealType}
        setMealType={setMealType}
        getRecipes={getRecipes}
      />
    </>
  );
};

export default Header;
