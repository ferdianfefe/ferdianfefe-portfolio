import Footer from "../elements/footer";
import Navbar from "../elements/navbar";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps): JSX.Element => {
  return (
    <div className="relative">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
