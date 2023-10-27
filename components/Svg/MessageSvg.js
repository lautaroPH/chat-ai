const MessageSvg = ({ url }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none">
      <path
        fill={url}
        d="M2.697 2.7h21.58v16.2H4.274l-1.578 1.58V2.7Zm0-2.7A2.695 2.695 0 0 0 .013 2.7L0 27l5.395-5.4h18.881a2.707 2.707 0 0 0 2.698-2.7V2.7c0-1.485-1.214-2.7-2.698-2.7H2.697Zm2.698 13.5h16.184v2.7H5.395v-2.7Zm0-4.05h16.184v2.7H5.395v-2.7Zm0-4.05h16.184v2.7H5.395V5.4Z"
      />
      <defs>
        <linearGradient
          id="a"
          x1={13.487}
          x2={27.373}
          y1={10.5}
          y2={37.676}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#18498B" />
          <stop offset={1} stopColor="#18498B" stopOpacity={0.05} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default MessageSvg;
