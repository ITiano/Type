import LoginForm from "./_components/LoginForm";
import TitleForm from "./_components/TitleForm";

const HomePage = () => {
  return (
    <main className="centering flex-col sm:flex-row sm:h-screen gap-5 sm:gap-2 md:gap-10 lg:gap-32 py-5 sm:py-0 px-5">
      <TitleForm />
      <LoginForm />
    </main>
  );
};

export default HomePage;
