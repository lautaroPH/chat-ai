const NoMessages = () => {
  return (
    <div className="absolute px-5 py-4 text-lg font-semibold text-center shadow-sm top-40 right-[12.5rem] font-lato text-chenkster-blue rounded-2xl drop-shadow-2xl shadow-gray-400 w-72">
      <p className="px-5 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-chenkster-blue-light to-chenkster-green">
        Ask us anything you need help with.
      </p>
      <p className="py-6">
        Remember, the more specific you are, the more personalized our
        suggestion will be!
      </p>
      <p className="italic">
        Example: What’s the best aperitivo spot in the Isola neighbourhood?
      </p>
    </div>
  );
};

export default NoMessages;
