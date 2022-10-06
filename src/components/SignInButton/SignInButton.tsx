const CLIENT_ID = process.env.REACT_APP_TWITTER_CLIENT_ID
const REDIRECT_URI = process.env.REACT_APP_TWITTER_REDIRECT_URI
const OAUTH_URL = 'https://twitter.com/i/oauth2/authorize'
const OAUTH_SCOPES = encodeURI(
  [
    'users.read',
    'tweet.read',
    'tweet.write',
    'like.read',
    'like.write',
    'offline.access',
  ].join(' '),
)
const OAUTH_RESPONSE_TYPE = 'code'
const CODE_CHALLENGE_METHOD = 'plain'
const CODE_CHALLENGE = 'challenge'
const CODE_CHALLENGE_STATE = 'state'

const TWITTER_AUTH_URL = `${OAUTH_URL}?response_type=${OAUTH_RESPONSE_TYPE}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${OAUTH_SCOPES}&state=${CODE_CHALLENGE_STATE}&code_challenge=${CODE_CHALLENGE}&code_challenge_method=${CODE_CHALLENGE_METHOD}`

const SignInButton = () => (
  <a href={TWITTER_AUTH_URL} tabIndex={-1}>
    <button>Sign in with Twitter!</button>
  </a>
)

export {SignInButton}
