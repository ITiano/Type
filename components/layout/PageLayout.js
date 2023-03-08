import Footer from "components/common/Footer";
import TopNav from "components/common/TopNav";

const PageLayout = ({ children, className, topNavClassName, footerClassName, childrenClassName }) => {
  return (
    <main className={`min-h-screen flex flex-col justify-between items-stretch ${className}`}>
      <TopNav className={topNavClassName} />
      <div>{children}</div>
      <Footer className={footerClassName} />
    </main>
  );
};

export default PageLayout;
