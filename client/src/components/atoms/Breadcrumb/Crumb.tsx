import React from "react";
type CrumbProps = {
  category: string;
  index: number;
  separator: boolean;
};

const Crumb = ({ category, index, separator }: CrumbProps) => {
  return (
    <li key={index}>
      <span className="crumb">{category}</span>

      {separator && (
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
          <path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path>
        </svg>
      )}
    </li>
  );
};

export default Crumb;
