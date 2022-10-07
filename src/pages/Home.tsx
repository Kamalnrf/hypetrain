import {Link} from 'react-router-dom'
import {useUser} from '../components/UserProvider'
import styled from 'styled-components'
import '@fontsource/bungee-shade'

export default function Home() {
  const {logout, username} = useUser()
  const tweetIntent =
    'https://twitter.com/intent/tweet?text=yo%2C%20you%20should%20all%20get%20onboard%20the%20hypetrain%21%20cool%20stuff%20%3A%29'
  return (
    <>
      <Greetings>
        Hello,
        <Newline />
        <Name>@{username}!</Name>
      </Greetings>
      <InteractiveText>
        Welcome to the circus. Did you change your mind about retweeting and
        favoriting tweets of all your fellow clowns? No? Are you possibly here
        to <Link to="/activity">see all our clowning?</Link>
      </InteractiveText>
      <InteractiveText>
        Do you love your fellow clowns enough to{' '}
        <a href={tweetIntent}>share about circus?</a> Or, did you want to offer
        us some feedback? Nothing? Sure, go ahead and{' '}
        <Link to="/" onClick={logout}>
          logout
        </Link>
        . Wait, don’t tell us you wish to leave the circus? Do you really want
        to DELETE your account?
      </InteractiveText>
    </>
  )
}

const Greetings = styled.h1`
  font-family: 'Bungee Shade', cursive;
  font-weight: normal;
  font-size: calc(84 / 16 * 1rem);
  line-height: 1;
  margin-block-end: 48px;
`

const Newline = styled.br``

const Name = styled.div`
  font-size: calc(96 / 16 * 1rem);
`

const InteractiveText = styled.p`
  font-size: calc(26 / 16 * 1rem);
  line-height: 2;
  margin-block-end: 36px;
`
