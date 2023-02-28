import { Helmet } from "react-helmet-async";

const Head = (title: any) => {
  return (
    <Helmet>
      <title>{title || ""}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ffe600" />
      <meta name="description" content="Challenge frontend de Mercado Libre." />
      <meta name="keywords" content="Mercado Libre, React, Typescript, SASS" />
      <meta name="author" content="Abel Gascia" />
    </Helmet>
  );
};

export default Head;
