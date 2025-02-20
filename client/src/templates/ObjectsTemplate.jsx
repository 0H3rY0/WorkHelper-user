import Header from "../components/layouts/Header";

const ObjectsTemplate = ({ children }) => {
  return (
    <div className="grid w-full h-screen grid-cols-1 grid-rows-[65px_1fr] ">
      <Header />
      {children}
    </div>
  );
};

export default ObjectsTemplate;
