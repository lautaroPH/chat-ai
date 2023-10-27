const ThreePointSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={5} height={22} fill="none">
      <path
        fill="url(#a)"
        d="M2.057 4.362c1.136 0 2.057-.977 2.057-2.181C4.114.976 3.193 0 2.057 0S0 .976 0 2.18c0 1.205.92 2.182 2.057 2.182Z"
      />
      <path
        fill="url(#b)"
        d="M2.057 13.085c1.136 0 2.057-.977 2.057-2.181 0-1.204-.921-2.18-2.057-2.18S0 9.7 0 10.903c0 1.204.92 2.18 2.057 2.18Z"
      />
      <path
        fill="url(#c)"
        d="M2.057 21.808c1.136 0 2.057-.977 2.057-2.18 0-1.205-.921-2.182-2.057-2.182S0 18.423 0 19.627c0 1.204.92 2.18 2.057 2.18Z"
      />
      <defs>
        <linearGradient
          id="a"
          x1={-0.221}
          x2={6.789}
          y1={0}
          y2={5.204}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0A82FF" />
          <stop offset={1} stopColor="#2DFF42" />
        </linearGradient>
        <linearGradient
          id="b"
          x1={-0.221}
          x2={6.789}
          y1={8.723}
          y2={13.927}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0A82FF" />
          <stop offset={1} stopColor="#2DFF42" />
        </linearGradient>
        <linearGradient
          id="c"
          x1={-0.221}
          x2={6.789}
          y1={17.446}
          y2={22.65}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0A82FF" />
          <stop offset={1} stopColor="#2DFF42" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ThreePointSvg;
