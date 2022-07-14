/* eslint-disable no-console */
/* eslint-disable consistent-return */
const isInViewport = (element) => {
  let isInView = false;

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      const option = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      };
      const observer = new IntersectionObserver((target) => {
        target.forEach((el) => {
          isInView = el;
        });
      }, option);
      const target = document.querySelector(`#${element}`);

      observer.observe(target);
    });
  }
  return isInView;
};

export default isInViewport;
