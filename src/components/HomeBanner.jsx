import { motion } from "framer-motion";
import { useContext } from "react";
import NasaContext from "../context/nasaContext";

const HomeBanner = () => {
  const { nasaHeroBanner } = useContext(NasaContext);

  return (
    <div className="homebanner">
      {nasaHeroBanner ? (
        <motion.img
          src={nasaHeroBanner.url}
          // drag="x"
          // dragConstraints={{ left: 0, right: 300 }}
          whileHover={{
            scale: 1.1,
            filter: "contrast(2)",
            transition: { duration: 2 },
          }}
          // whileTap={{ scale: 0.95 }}
        />
      ) : null}
    </div>
  );
};

export default HomeBanner;

//   <motion.h1
//     initial={initial}
//     animate={animate}
//     transition={{ delay: 0.5, duration: 2 }}
//   >
//     Hello Framer Motion
//   </motion.h1>
//   <motion.h1
//     initial={initial}
//     animate={{ ...animate, x: 50 }}
//     transition={{ delay: 0.5, duration: 2 }}
//   >
//     Hello Framer Motion
//   </motion.h1>
//   <motion.h1
//     initial={initial}
//     animate={animate}
//     transition={{ delay: 0.5, duration: 2 }}
//   >
//     Hello Framer Motion
//   </motion.h1>
