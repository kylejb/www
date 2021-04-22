import { mediaQuery } from 'utils/mediaQuery';
import { breakpoints } from './_variables';

export const media = {
    mobileM: mediaQuery`(min-width: ${breakpoints.xsmall}px)`,
    mobileL: mediaQuery`(min-width: ${breakpoints.small}px)`,
    tablet: mediaQuery`(min-width: ${breakpoints.medium}px)`,
    laptopM: mediaQuery`(min-width: ${breakpoints.large}px)`,
    laptopL: mediaQuery`(min-width: ${breakpoints.xlarge}px)`,
    desktopM: mediaQuery`(min-width: ${breakpoints.xxlarge}px)`,
    desktopL: mediaQuery`(min-width: ${breakpoints.xxxlarge}px)`
};

export const maxDownMediaBreakpoints = {
    mobileL: mediaQuery`(max-width: ${breakpoints.medium - 1}px)`,
    tablet: mediaQuery`(max-width: ${breakpoints.large - 1}px)`,
    laptopM: mediaQuery`(max-width: ${breakpoints.xlarge - 1}px)`,
    laptopL: mediaQuery`(max-width: ${breakpoints.xxlarge - 1}px)`,
    desktopM: mediaQuery`(max-width: ${breakpoints.xxxlarge - 1}px)`
}
