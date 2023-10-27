const Loader = () => {
  return (
    <div className={`mb-3 flex flex-col items-start ml-3`}>
      <div className="rounded-3xl break-words bg-[#55F65F40] max-w-[80%] min-w-[10%]  bg-opacity-95 relative px-4 py-[2px] shadow-md">
        <div className="flex flex-col items-center my-1">
          <div className="flex">
            <div className="w-2 h-2 mr-1 rounded-full bg-chenkster-blue animate-bounce"></div>
            <div className="w-2 h-2 mr-1 rounded-full bg-chenkster-blue animate-bounce"></div>
            <div className="w-2 h-2 rounded-full bg-chenkster-blue animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
