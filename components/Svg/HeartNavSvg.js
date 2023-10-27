const HeartNavSvg = ({ url }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={27} fill="none">
      <path
        fill={url}
        d="m14.971 22.88-.148.147-.163-.147C7.619 16.538 2.965 12.345 2.965 8.093c0-2.943 2.223-5.15 5.188-5.15 2.282 0 4.506 1.471 5.291 3.472h2.757c.786-2 3.01-3.472 5.292-3.472 2.965 0 5.188 2.207 5.188 5.15 0 4.252-4.654 8.445-11.71 14.787ZM21.493 0c-2.579 0-5.054 1.192-6.67 3.06C13.207 1.192 10.732 0 8.153 0 3.587 0 0 3.546 0 8.093c0 5.547 5.04 10.093 12.674 16.965L14.823 27l2.15-1.942c7.633-6.872 12.673-11.418 12.673-16.965C29.646 3.546 26.059 0 21.493 0Z"
      />
      <defs>
        <linearGradient
          id="p"
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

export default HeartNavSvg;
