import { Container } from "react-bootstrap";

const Footer = () => {
  const getThisYear = () => new Date().getFullYear();
  
  return (
    <footer className="fixed-bottom bg-dark py-2 text-light">
      <Container className="d-flex justify-content-between">
        <span>Daniel Rilo &copy;</span>
        <span>{getThisYear()}</span>
      </Container>
    </footer>
  );
};

export default Footer;
