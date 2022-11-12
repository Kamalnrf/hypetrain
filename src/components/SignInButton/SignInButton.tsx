import styled from 'styled-components'
import {QUERIES} from '../../constants'

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
  <Wrapper>
    <AuthLink href={TWITTER_AUTH_URL} tabIndex={-1}>
      <JoinButton>Join Hypetrain!</JoinButton>
    </AuthLink>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const AuthLink = styled.a``

const JoinButton = styled.button`
  font-size: 2rem;
  padding-block: 16px;
  padding-inline: 48px;
  border: none;
  outline: none;
  border-radius: 10000px;
  background-color: var(--green);
  cursor: pointer;

  @media ${QUERIES.mobile} {
    font-size: 1.5rem;
  }
`

export {SignInButton}
