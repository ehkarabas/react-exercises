import Flex from "../components/styled-components/Flex.styled";
import { showcaseImg, htmlImg, cssImg, graphicDesignImg } from "../assets";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import Subscribe from "../components/Subscribe";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        bgimage={showcaseImg}
        height="40vh"
        direction="column"
        gap="1rem"
        color="#fff"
        padding="10%"
        className="homeBanner"
      >
        <h1 className="display-5 fw-bolder">Professional Web Design</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          rerum facilis ducimus quasi fuga? Ducimus, non. Reiciendis, maxime id
          fuga labore a ullam impedit. Tempore officiis commodi explicabo totam
          reiciendis.
        </p>
      </Flex>

      <Subscribe />

      <div className="container mx-auto mt-1 row g-3">
        <div className="col-sm-4 ">
          <div
            className="card text-dark p-3"
            onClick={() => {
              navigate("/html", {
                state: [
                  htmlImg,
                  "HTML5 Markup",
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero molestiae quas consectetur perspiciatis rem ducimus! Officiis commodi reprehenderit suscipit.",
                ],
              });
            }}
          >
            <img
              className="card-img-top m-auto"
              src={htmlImg}
              alt="card visual"
              style={{ maxWidth: "250px" }}
            />
            <div className="card-body">
              <h5 className="card-title">HTML5 Markup</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                vero molestiae quas consectetur perspiciatis rem ducimus!
                Officiis commodi reprehenderit suscipit.
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-4 ">
          <div
            className="card text-dark p-3"
            onClick={() => {
              navigate("/css", {
                state: [
                  cssImg,
                  "CSS3 Styling",
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita voluptatem recusandae, quaerat error et nobis, dolores at dolorum aliquam suscipit earum facilis maxime cumque. Ex similique quia ut accusamus dolore!",
                ],
              });
            }}
          >
            <img
              className="card-img-top m-auto"
              src={cssImg}
              alt="card visual"
              style={{ maxWidth: "250px" }}
            />
            <div className="card-body">
              <h5 className="card-title">CSS3 Styling</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita voluptatem recusandae, quaerat error et nobis, dolores
                at dolorum aliquam suscipit earum facilis maxime cumque. Ex
                similique quia ut accusamus dolore!
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-4 ">
          <div
            className="card text-dark p-3"
            onClick={() => {
              navigate("/graphics-design", {
                state: [
                  graphicDesignImg,
                  "Graphics Design",
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quia eos totam tenetur quisquam facere quasi magni deleniti mollitia iure, quam nostrum dignissimos doloribus adipisci labore, ducimus assumenda optio enim!",
                ],
              });
            }}
          >
            <img
              className="card-img-top m-auto"
              src={graphicDesignImg}
              alt="card visual"
              style={{ maxWidth: "250px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Graphics Design</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quia
                eos totam tenetur quisquam facere quasi magni deleniti mollitia
                iure, quam nostrum dignissimos doloribus adipisci labore,
                ducimus assumenda optio enim!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "7.5rem" }}></div>
    </>
  );
};

export default Home;
