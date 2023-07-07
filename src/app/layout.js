import "../styles/App.css"
import RootProvider from "@components/layout/RootProvider";

export const metadata = {
  title: { default: "Typiano" },
  description: { default: "Learn Touch Typing for free" },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" dir="ltr">
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
};

export default RootLayout;
