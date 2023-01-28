import Footer from "components/common/Footer";
import TopNav from "components/common/TopNav";

const PageLayout = ({ children, className }) => {
  return (
    <main className={className}>
      <TopNav />
      {children}
      <Footer />
    </main>
  );
};

export default PageLayout;
