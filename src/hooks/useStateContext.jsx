import { createContext, useState, useEffect } from "react";

export const ShorterContext = createContext();

const ShorterProvider = ({ children }) => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const links = localStorage.getItem("links");
    if (links) {
      setLinks(JSON.parse(links));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  const addToLinks = (urls) => {
    console.log(urls);
    setLinks([urls, ...links]);
  };

  const removeLinkShorter = (url) => {
    const newLinks = links.filter((link) => {
      return link.base !== url.base;
    });
    setLinks(newLinks);
  };

  return (
    <ShorterContext.Provider
      value={{ links, setLinks, addToLinks, removeLinkShorter }}
    >
      {children}
    </ShorterContext.Provider>
  );
};

export default ShorterProvider;
