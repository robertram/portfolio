import * as React from "react";

const Moon = () => {
  return (
    <svg
      className="fill-current hover:text-linkHover text-black"
      height={24}
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      width={24}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="stroke-current hover:text-linkHover"
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
      />
    </svg>
  );
};

export default Moon;
