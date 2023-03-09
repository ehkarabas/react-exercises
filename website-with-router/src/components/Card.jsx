import Flex from "./styled-components/Flex.styled";

const Card = ({ title, price }) => {
  return (
    <Flex
      direction="column"
      align="flex-start"
      bgcolor="#e6e6e6"
      padding="2rem 1rem"
      gap="1rem"
    >
      <h2>Website {title}</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quas
        ipsum explicabo eum, quasi iure minima recusandae numquam, voluptatem
        quisquam molestias enim, aut consequatur. Magni excepturi quas nisi eum
        magnam.
      </p>
      <p>Pricing: {price}</p>
    </Flex>
  );
};

export default Card;
