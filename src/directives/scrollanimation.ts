const animationScrollObserver = new IntersectionObserver(
  (entries, animatedScrollObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('enter');
        animatedScrollObserver.unobserve(entry.target);
      }
    });
  }
);

const makeObserver = (options: any) =>
  new IntersectionObserver((entries, makeObserver) => {
    entries.forEach((entry) => {
      console.log({ entry, ratio: options.threshold });
      if (entry.isIntersecting) {
        entry.target.classList.add(options);
        makeObserver.unobserve(entry.target);
      }
    });
  }, options);

export default {
  bind(el: any, binding: any) {
    // const cssClassBefore = binding.value.cssClassBefore;
    // el.classList.add(cssClassBefore);
    // if (binding.arg == 'top') {
    //   el.style.transform = 'translate(0, -100px)'
    // }
    el.classList.add('before-enter');
    animationScrollObserver.observe(el);
    // makeObserver(binding.value.cssClassAfter).observe(el);
  },
};
