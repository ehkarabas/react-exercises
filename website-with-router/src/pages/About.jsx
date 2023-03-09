import Flex from "../components/styled-components/Flex.styled";
import Subscribe from "../components/Subscribe";

const About = () => {
  return (
    <>
      <Flex direction="column" align="stretch">
        <Subscribe />
        <Flex
          color="#000"
          gap="3%"
          padding="1rem 10%"
          align="flex-start"
          className="about"
        >
          <Flex direction="column" align="flex-start" textalign="justify">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              quia aspernatur beatae error dolorum nemo architecto doloremque
              saepe minima asperiores! Dolorum, natus repudiandae impedit
              suscipit quaerat incidunt deserunt aperiam laudantium consectetur
              mollitia, aliquid tempora, vero ex quasi qui molestiae commodi
              amet eos explicabo sunt eveniet dignissimos itaque veniam ducimus.
            </p>
            <div
              style={{
                backgroundColor: "#222",
                padding: "1rem",
                color: "#fff",
              }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                ratione laboriosam eum aperiam accusamus earum quidem quis
                soluta ad illum blanditiis placeat atque, fugit alias repellat.
                Nisi obcaecati dolorum maxime vel quae atque inventore quas
                rerum esse, illum quisquam. Sit, nesciunt ullam! Quos sed
                molestiae, praesentium a numquam id ratione.
              </p>
            </div>
          </Flex>
          <Flex
            direction="column"
            justify="flex-start"
            align="flex-start"
            padding="2rem 1rem"
            bgcolor="#222"
            color="#fff"
          >
            <h2>What We Do</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem, dolorum? Quibusdam unde qui fugit quo dolore?
              Distinctio quas, quisquam quidem ipsam labore quasi velit id rem
              exercitationem error perspiciatis facilis adipisci vero totam sunt
              accusamus? Molestias facere modi perspiciatis, eveniet totam
              laudantium nemo, neque blanditiis exercitationem, dolore
              reiciendis repudiandae impedit.
            </p>
          </Flex>
        </Flex>
      </Flex>
      <div style={{ height: "7.5rem" }}></div>
    </>
  );
};

export default About;
