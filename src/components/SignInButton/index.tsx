/*
  1. Generate OAuth URL
  2. Redirect user to Authenticate 
  3. Setup Routing 
     1. callback url 
  4. Log the Code recevied in callback URL
 */
import {Link} from 'react-router-dom'

const SignInButton = () => {
  const twitterOAuth =
    'https://twitter.com/i/oauth2/authorize?response_type=code&client_id=YS1XY3NMWGVDRFB5Z0tPQkZ2OXQ6MTpjaQ&redirect_uri=http://localhost:3000/callback&scope=users.read%20tweet.read%20tweet.write%20like.write%20like.read%20offline.access&state=state&code_challenge=challenge&code_challenge_method=plain'

  return (
    <a href={twitterOAuth} tabIndex={-1}>
      <button>Sign in with Twitter!</button>
    </a>
  )
}

export default SignInButton
