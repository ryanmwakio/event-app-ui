import React from "react";
import { useState } from "react";
import Link from "next/link";

function Button(props) {
  const [loading, setLoading] = useState(false);

  const onLoad = () => {
    return setLoading(true);
  };
  if (props.to) {
    return (
      <Link href={props.to} OnClick={onLoad}>
        <span className="border border-green-500 hover:bg-green-600 text-sm p-2 rounded-sm cursor-pointer bg-green-500 text-white capitalize shadow-md hover:shadow-sm transition ease-in delay-150 w-auto">
          {props.text}
          {loading && (
            <img
              src="images/loading.gif"
              alt=""
              className="h-5 w-5 inline block mx-1"
            />
          )}
          {!loading && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-4 inline-block m-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </span>
      </Link>
    );
  }
  return (
    <button
      className={`bg-green-500 hover:bg-green-600 text-white capitalize text-sm py-2 px-3 rounded-sm ${
        props.inline && "inline-block"
      }`}
      onClick={props.onClick}
    >
      {props.text && props.text}
      {props.icon && props.icon}
    </button>
  );
}

export default Button;
