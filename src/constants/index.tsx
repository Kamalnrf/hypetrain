export const BREAKPOINTS = {
  tabletMin: 540,
  laptopMin: 1100,
  desktopMin: 1440,
}

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin}px)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin}px)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin}px)`,
}

const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i
export const IS_MOBILE_USER_AGENT = mobileRegex.test(navigator.userAgent)
