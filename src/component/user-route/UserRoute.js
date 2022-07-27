import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";

const UserRoute = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default UserRoute;
