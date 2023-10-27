const CrossSvgColor = ({ className = 'w-8 h-8' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      className={className}
      fill="none"
    >
      <path
        fill="url(#a)"
        fillRule="evenodd"
        d="M27.5 15c0 6.904-5.596 12.5-12.5 12.5S2.5 21.904 2.5 15 8.096 2.5 15 2.5 27.5 8.096 27.5 15Zm-16.288-3.788a.937.937 0 0 1 1.326 0L15 13.674l2.462-2.462a.938.938 0 0 1 1.326 1.326L16.326 15l2.462 2.462a.937.937 0 1 1-1.326 1.326L15 16.326l-2.462 2.462a.937.937 0 0 1-1.326-1.326L13.674 15l-2.462-2.462a.937.937 0 0 1 0-1.326Z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id="a"
          x1={1.157}
          x2={41.96}
          y1={2.5}
          y2={34.616}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0A82FF" />
          <stop offset={1} stopColor="#2DFF42" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CrossSvgColor;
