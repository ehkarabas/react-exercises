import Subscribe from "../components/Subscribe";
import Flex from "../components/styled-components/Flex.styled";
import Card from "../components/Card";

const Services = () => {
  const cardsData = [
    { title: "Design", price: "$1000-$3000" },
    { title: "Maintenance", price: "$250 per month" },
    { title: "Hosting", price: "$25 per month" },
  ];
  return (
    <>
      <Subscribe />
      <Flex
        color="#000"
        gap="3%"
        padding="1rem 10%"
        align="flex-start"
        className="services"
      >
        <Flex direction="column" gap="1rem" align="flex-start">
          <h2>Services</h2>
          {cardsData.map((data, index) => (
            <Card key={`card${index + 1}`} {...data} />
          ))}
        </Flex>
        <Flex
          direction="column"
          gap="2rem"
          align="flex-start"
          padding="2rem 1rem"
          bgcolor="#222"
          color="#fff"
          className="getQuote"
        >
          <h2>Get A Quote</h2>
          <form
            className="getQuote_Form"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Flex direction="column" align="flex-start" gap="0.2rem">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Name" required />
              <label htmlFor="email">Name</label>
              <input type="email" id="email" placeholder="Email" required />
              <label htmlFor="message">Name</label>
              <textarea
                id="message"
                style={{ resize: "vertical", width: "100%", minHeight: "2rem" }}
                placeholder="Message"
                required
              ></textarea>
              <button
                type="submit"
                style={{
                  backgroundColor: "orange",
                  padding: "0.5rem 1rem",
                  color: "#fff",
                  borderRadius: "0.5rem",
                  border: "none",
                }}
              >
                Send
              </button>
            </Flex>
          </form>
        </Flex>
      </Flex>
      <div style={{ height: "7.5rem" }}></div>
    </>
  );
};

export default Services;
