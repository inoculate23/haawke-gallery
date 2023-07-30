import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
  return (
    <>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Brand text</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="../public/logo.webp"
              width="35"
              height="35"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        <Navbar bg="dark" data-bs-theme="dark">
  
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src="https://inoculate.media/assets/logo_200.png"
              width="35"
              height="35"
              className="d-inline-block align-top"
            />{' '}
           Haawke Neural Technology
                        <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Navbar.Brand>
     
      </Navbar>
    </>
  );
}

export default BrandExample;
