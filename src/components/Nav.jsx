import { motion } from "framer-motion";

const Nav = () => {
  const logoName = "NASA IMAGES";
  const letters = logoName.split("");

  const letterVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 },
  };

  const logo = letters.map((letter, index) => {
    if (letter === " ") {
      return (
        <motion.p key={index} className="type-space" variants={letterVariants}>
          {letter}
        </motion.p>
      );
    } else {
      return (
        <motion.p key={index} className="type-color" variants={letterVariants}>
          {letter}
        </motion.p>
      );
    }
  });

  const logoVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <motion.nav
      className="nav"
      id="nav"
      initial={{
        height: "100vh",
        backgroundColor: "#0b3d91",
      }}
      animate={{ height: "100px", background: "#020202" }}
      transition={{ duration: 0.5, delay: 3 }}
    >
      <motion.div variants={logoVariants} initial="hidden" animate="visible">
        <a href="#" className="logo">
          {logo}
        </a>
      </motion.div>
      <motion.div
        className="menu"
        initial={{ opacity: 0, x: "-100px" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3.6, duration: 0.7 }}
      >
        <a href="#gallery">Gallery</a>
      </motion.div>
    </motion.nav>
  );
};

export default Nav;

//* variants
// Variants are a declarative way to orchestrate complex animations throughout a component tree. By providing multiple components with a variants object with visual states of the same name, they can all be animated in sync by the switch of a single animate prop.
