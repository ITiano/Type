import Type from "../components/Type";

const Test = () => {
  const data =
    "In publishing and graphic design.";

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Type data={data} />
    </div>
  );
};

export default Test;
