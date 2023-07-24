import "../styles/App.css";
import RootProvider from "@components/layout/RootProvider";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

const DroidSansMono = localFont({ src: "../../public/fonts/DroidSansMono.ttf",variable:"--font-droid-sans-mono" });

export const metadata = {
  title: { default: "Typiano" },
  description: { default: "Learn Touch Typing for free" },
};

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en" dir="ltr" className={`${poppins.variable} ${DroidSansMono.variable} font-sans`}>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
};

export default RootLayout;
