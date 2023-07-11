import { createContext, useState, useEffect } from "react";
import { getNasaHeroImage, getNasaImages } from "../helpers/apiCalls";

const NasaContext = createContext(null);

export const NasaProvider = ({ children }) => {
  const [nasaHeroBanner, setNasaHeroBanner] = useState();
  const [nasaImages, setNasaImages] = useState();

  useEffect(() => {
    (async () => {
      try {
        const heroBanner = await getNasaHeroImage();
        const images = await getNasaImages();

        setNasaHeroBanner(heroBanner);
        setNasaImages(images);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <NasaContext.Provider value={{ nasaHeroBanner, nasaImages }}>
      {children}
    </NasaContext.Provider>
  );
};

export default NasaContext;
