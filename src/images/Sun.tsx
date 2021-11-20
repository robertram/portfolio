import * as React from "react";

const Sun = () => {
  return (
    <svg
      className="fill-current hover:text-linkHover text-white"
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill-current hover:text-linkHover"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.488 3.512v4.976L24 12l-3.512 3.512v4.976h-4.976L12 24l-3.512-3.512H3.512v-4.976L0 12l3.512-3.512V3.512h4.976L12 0l3.512 3.512h4.976zm-2.122 14.854v-3.735L20.997 12l-2.631-2.631V5.634h-3.735L12 3.003l-2.631 2.63H5.634V9.37L3.003 12l2.63 2.631v3.735H9.37L12 20.997l2.631-2.631h3.735zM12 5.634A6.371 6.371 0 005.634 12 6.371 6.371 0 0012 18.366 6.371 6.371 0 0018.366 12 6.371 6.371 0 0012 5.634zM7.756 12c0 2.345 1.9 4.244 4.244 4.244 2.345 0 4.244-1.9 4.244-4.244 0-2.345-1.9-4.244-4.244-4.244A4.243 4.243 0 007.756 12z"
        fill="#fff"
      />
    </svg>
  );
};

export default Sun;
