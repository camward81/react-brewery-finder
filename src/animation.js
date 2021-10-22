export const fadeInRight = {
  hidden: {
    opacity: 0,
    x: -600,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    x: -300,
    transition: {
      duration: 1,
    },
  },
};

export const slideUp = {
  hidden: {
    opacity: 0,
    y: 600,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
    },
  },
};
