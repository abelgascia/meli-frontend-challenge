import React from "react";
import Crumb from "../../atoms/Breadcrumb/Crumb";
import "./index.scss";

type Props = {
  categories: string[];
};

const Breadcrumb = ({ categories }: Props) => {
  return (
    <section>
      <ul className="container breadcrumb">
        {categories?.map((category, index) => (
          <Crumb
            category={category}
            index={index}
            separator={categories.length > index + 1}
          />
        ))}
      </ul>
    </section>
  );
};

export default Breadcrumb;
