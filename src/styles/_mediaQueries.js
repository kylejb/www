import { mediaQuery } from '../utils/mediaQuery';
import { breakpoints } from './_variables';

export const media = {
    mobileM: mediaQuery`(min-width: ${breakpoints.xsmall})`,
    mobileL: mediaQuery`(min-width: ${breakpoints.small})`,
    tablet: mediaQuery`(min-width: ${breakpoints.medium})`,
    laptopM: mediaQuery`(min-width: ${breakpoints.large})`,
    laptopL: mediaQuery`(min-width: ${breakpoints.xlarge})`,
    desktopM: mediaQuery`(min-width: ${breakpoints.xxlarge})`,
    desktopL: mediaQuery`(min-width: ${breakpoints.xxxlarge})`
};
