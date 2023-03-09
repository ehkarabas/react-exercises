import { useNavigate } from "react-router-dom";
import Flex from "./styled-components/Flex.styled";

const LanguageDetail = ({ data }) => {
  console.log(data);
  const navigate = useNavigate();
  return (
    <>
      <Flex direction="column" gap="1rem" padding="2rem" color="#000">
        <img src={data[0]} alt="language logo" />
        <h2>{data[1]}</h2>
        <p>
          {data[2]}. {data[2]}. {data[2]}. {data[2]}. {data[2]}
        </p>
        <p>
          {data[2]}. {data[2]}. {data[2]}. {data[2]}. {data[2]}
        </p>
        <button
          type="submit"
          style={{
            backgroundColor: "#E8491D",
            padding: "0.5rem 1rem",
            color: "#fff",
            borderRadius: "0.5rem",
            border: "none",
          }}
          onClick={() => {
            navigate(-1);
          }}
        >
          Go Back
        </button>
      </Flex>
      <div style={{ height: "7.5rem" }}></div>
    </>
  );
};

export default LanguageDetail;
