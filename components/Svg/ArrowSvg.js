const ArrowSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={23} height={19} fill="none">
      <path
        fill="url(#a)"
        d="M23 8.267H4.781l6.612-6.524L9.626 0 0 9.5 9.626 19l1.767-1.743-6.612-6.524H23V8.267Z"
      />
      <defs>
        <linearGradient
          id="a"
          x1={-1.236}
          x2={30.63}
          y1={0}
          y2={30.362}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0A82FF" />
          <stop offset={1} stopColor="#2DFF42" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ArrowSvg;
