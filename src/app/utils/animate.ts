export const cardTransition = {
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };
  
  export const transit = {
    duration: 0.7,
    transition: 'linear',
    ease: 'easeIn',
  };

  export const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5
      }
    }
  }

  export const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }