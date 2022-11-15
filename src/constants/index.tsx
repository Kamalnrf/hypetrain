export const USER_LOCAL_STORAGE = 'user'
export const TOKEN_LOCAL_STORAGE = 'user_token'

export const BREAKPOINTS = {
  sMobileMax: 375,
  mobileMax: 540,
  tabletMax: 1100,
  laptopMax: 1440,
}

export const QUERIES = {
  sMobile: `(max-width: ${BREAKPOINTS.sMobileMax}px)`,
  mobile: `(max-width: ${BREAKPOINTS.mobileMax}px)`,
  tablet: `(max-width: ${BREAKPOINTS.tabletMax}px)`,
  laptop: `(max-width: ${BREAKPOINTS.laptopMax}px)`,
}

const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i
export const IS_MOBILE_USER_AGENT = mobileRegex.test(navigator.userAgent)
