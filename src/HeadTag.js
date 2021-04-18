import React from "react";
import { Helmet } from "react-helmet";

const HeadTag = ({title, desc}) => {
  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <base href="/" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content= {desc}
        />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>{title}</title>

        <meta
          name="description"
          content={desc}
        />
        <meta
          name="keywords"
          content="XX Watts, ${comma separated services-titles}"
        />
        <meta name="robots" content="index/follow" />
        <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />

        <meta
          itemprop="name"
          content={title}
        />
        <meta
          itemprop="description"
          content={desc}
        />
        <meta itemprop="image" content="${%PUBLIC_URL%/og.jpg}" />

        <meta
          property="og:title"
          content= {title}
        />
        <meta property="og:image" content="${%PUBLIC_URL%/og.jpg}" />
        <meta
          property="og:description"
          content={desc}
        />

        <meta name="theme-color" content="#fff" />
        <meta name="msapplication-navbutton-color" content="#fff" />
      </Helmet>
    </>
  );
};

export default HeadTag;
