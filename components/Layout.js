import NavbarMenu from "./NavbarMenu";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <Container>
      <header>
        <NavbarMenu />
      </header>

      <main>{children}</main>
    </Container>
  );
};

export default Layout;
