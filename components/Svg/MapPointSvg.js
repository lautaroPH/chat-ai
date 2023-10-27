const MapPointSvg = ({ styles, url }) => {
  return (
    <svg
      className={styles}
      viewBox="0 0 15 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={url}
        d="M7.5 0a6.903 6.903 0 0 0-4.95 2.109A7.306 7.306 0 0 0 .5 7.2c0 4.86 6.169 10.35 6.431 10.584a.86.86 0 0 0 1.138 0C8.375 17.55 14.5 12.06 14.5 7.2c0-1.91-.738-3.74-2.05-5.091A6.903 6.903 0 0 0 7.5 0Zm0 15.885c-1.864-1.8-5.25-5.679-5.25-8.685a5.48 5.48 0 0 1 1.538-3.818A5.177 5.177 0 0 1 7.5 1.8c1.392 0 2.728.569 3.712 1.582A5.48 5.48 0 0 1 12.75 7.2c0 3.006-3.386 6.894-5.25 8.685ZM7.5 3.6c-.692 0-1.369.211-1.944.607a3.58 3.58 0 0 0-1.29 1.615 3.696 3.696 0 0 0-.199 2.08c.135.699.469 1.34.958 1.844.49.503 1.113.846 1.792.985a3.41 3.41 0 0 0 2.022-.205A3.522 3.522 0 0 0 10.41 9.2c.385-.592.59-1.288.59-2 0-.955-.369-1.87-1.025-2.546A3.451 3.451 0 0 0 7.5 3.6Zm0 5.4c-.346 0-.684-.106-.972-.303a1.79 1.79 0 0 1-.645-.808 1.848 1.848 0 0 1-.1-1.04c.068-.35.235-.67.48-.922.244-.252.556-.423.896-.492.34-.07.69-.034 1.01.102.32.136.594.367.786.663a1.837 1.837 0 0 1-.218 2.273A1.726 1.726 0 0 1 7.5 9Z"
      />
      <defs>
        <linearGradient
          id="a"
          x1={-0.252}
          x2={26.665}
          y1={0}
          y2={16.479}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0A82FF" />
          <stop offset={1} stopColor="#2DFF42" />
        </linearGradient>
        <linearGradient
          id="gradient"
          x1={14.823}
          x2={27.924}
          y1={10.5}
          y2={38.68}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#18498B" />
          <stop offset={1} stopColor="#18498B0D" stopOpacity={0.05} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default MapPointSvg;
