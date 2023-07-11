import { motion, useAnimation } from "framer-motion";

const GalleryImage = ({ data, inView, index }) => {
  const galleryAnimation = useAnimation();

  if (inView) {
    galleryAnimation.start({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.2 * index },
    });
  }
  return (
    <motion.div
      className="image"
      initial={{ opacity: 0, x: "10px" }}
      animate={galleryAnimation}
    >
      <img src={data.url} alt={data.title} />
    </motion.div>
  );
};

export default GalleryImage;
