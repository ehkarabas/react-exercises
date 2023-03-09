import { useLocation } from "react-router-dom";
import LanguageDetail from "../components/LanguageDetail";

const Css = () => {
  const { state: data } = useLocation();
  return (
    <>
      <LanguageDetail data={data} />
      <div style={{ height: "7.5rem" }}></div>
    </>
  );
};

export default Css;
