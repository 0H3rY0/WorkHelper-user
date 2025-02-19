const MainTemplate = ({ children }) => {
  return (
    <div
      className="grid w-full h-screen 
          lg:grid-cols-[14rem_1fr] md:grid-cols-[16rem_1fr] grid-cols-1 grid-rows-[65px_1fr] "
    >
      {children}
    </div>
  );
};

export default MainTemplate;
