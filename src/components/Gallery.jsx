import { useContext } from "react";
import NasaContext from "../context/nasaContext";
import GalleryImage from "./GalleryImage";
import { Box } from "./StarBackground";
import { useInView } from "react-intersection-observer";

const Gallery = () => {
  const { nasaImages } = useContext(NasaContext);

  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  const galleryImages = nasaImages
    ? nasaImages.map((image, index) => (
        <GalleryImage key={index} data={image} inView={inView} index={index} />
      ))
    : null;

  return (
    <>
      <Box></Box>
      <div className="images" id="gallery" ref={ref}>
        {galleryImages}
      </div>
    </>
  );
};

export default Gallery;
