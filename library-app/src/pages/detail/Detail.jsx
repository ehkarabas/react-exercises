import React from "react";
import { useLocation } from "react-router-dom";
import {
  DetailContainer,
  DetailImg,
  DetailTitle,
  Description,
  InfoPart,
} from "./Detail.style";
import defaultImg from "../../assets/book.jpg";

const Detail = () => {
  const { state: item } = useLocation();
  // const { id } = useParams();
  // console.log(id);
  // console.log(item);
  return (
    <DetailContainer>
      <DetailTitle>{item.volumeInfo.title}</DetailTitle>
      <DetailImg>
        <img src={item.volumeInfo.imageLinks?.thumbnail || defaultImg} alt="" />
      </DetailImg>
      <Description>{item.volumeInfo.description}</Description>
      <InfoPart>
        {/* {item.volumeInfo?.authors.map((author, index) => {
          return <span key={`author${index + 1}`}>{author} </span>;
        })} */}
        <p>{item.volumeInfo?.authors.join(", ")}</p>
        <p>
          {item.volumeInfo?.publishedDate} {item.volumeInfo?.publisher}
        </p>
      </InfoPart>
    </DetailContainer>
  );
};

export default Detail;
