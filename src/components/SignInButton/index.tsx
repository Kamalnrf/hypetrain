const SignInButton = () => {
  const twitterOAuth =
    'https://twitter.com/i/oauth2/authorize?response_type=code&client_id=cmNTMjM4US1Gal9FcEJQSVAxdjA6MTpjaQ&redirect_uri=http://localhost:3000/callback&scope=users.read%20tweet.read%20tweet.write%20like.read%20like.write%20offline.access&state=state&code_challenge=challenge&code_challenge_method=plain'

  return (
    <a href={twitterOAuth} tabIndex={-1}>
      <button>Sign in with Twitter!</button>
    </a>
  )
}

export default SignInButton
