import Type from "../components/Type";

const Test = () => {
  const data = "This is test.";

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Type data={data} />
    </div>
  );
};

export default Test;
