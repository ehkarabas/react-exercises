import Flex from "../components/styled-components/Flex.styled";

const Subscribe = () => {
  return (
    <Flex
      padding="1rem 10%"
      justify="space-between"
      bgcolor="#202022"
      wrap="wrap"
      gap="0.5rem"
      className="subscribe"
    >
      <h4>Subscribe To Our Newsletter</h4>
      <form
        className="d-flex gap-1"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="email"
          placeholder="Email"
          className="form-control"
          required
        />
        <button className="btn btn-warning" type="submit">
          Subscribe
        </button>
      </form>
    </Flex>
  );
};

export default Subscribe;
