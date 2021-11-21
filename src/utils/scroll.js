// checks whether code runs in node or browser
const isBrowser = () => typeof document !== 'undefined';

const isSmoothScrollSupported =
  isBrowser() && ((document || {}).documentElement || {}).style
    ? 'scrollBehavior' in document.documentElement.style
    : false;

export const toTop = () => {
  if (isSmoothScrollSupported) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  } else {
    window.scrollTo(0, 0);
  }
};

export const to = (ycoordinate) => {
  if (isSmoothScrollSupported) {
    window.scroll({
      top: ycoordinate,
      left: 0,
      behavior: 'smooth',
    });
  } else {
    window.scrollTo(0, ycoordinate);
  }
};

export const toElement = (element) => {
  if (element) {
    if (isSmoothScrollSupported) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      element.scrollIntoView();
    }
  }
};
