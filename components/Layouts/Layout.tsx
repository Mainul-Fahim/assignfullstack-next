import MapGl from "../Map/MapGl";
import Head from "./Head";
import Navbar from "./Navbar";

//designing layout 
const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <Head />
      <MapGl />
      {children}
    </>
  );
};

export default Layout;
