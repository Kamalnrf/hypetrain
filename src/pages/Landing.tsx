import {useLayoutEffect} from 'react'
import {SignInButton} from '../components/SignInButton'
import styled from 'styled-components'
import {QUERIES} from '../constants'
import {Footer} from '../components/Footer'

export default function Landing() {
  useLayoutEffect(() => {
    document.documentElement.style.setProperty(
      '--background-color',
      'var(--blue)',
    )
  }, [])

  return (
    <Wrapper>
      <Header>No breaks on the Hypetrain!</Header>
      <main>
        <Text>
          Ever scream into the Twitter void with something you thought was very
          clever to receive no likes or retweets? It's annoying, we get it.
          Which is why we've found a way to make everyone famous on Twitter.{' '}
          <em>Because</em>, when everybody's famous, no-one is famous, right?{' '}
          <em>Right</em>?
        </Text>
        <Text>
          When you get aboard the Hypetrain, you can Tweet literally{' '}
          <em>anything</em> with #hypetrain and the entire Hypetrain community
          will cheer you on with likes and retweets. We're not lying when we say
          that <strong>this pack has your back</strong>. When it rains, it
          really does pour.
        </Text>
        <Text>
          You might be thinking: What if I wish to only like tweets from the
          Hypetrain community? Don't worry, we give you granular control over
          everything we can do. What more, even leaving Hypetrain is made simple
          and transparent. What you see is all there is to this fun tool. Come
          on now, why wait? Get aboard the Hypetrain and let's all have some
          fun!
        </Text>
        <SignInButton />
      </main>
      <StyledFooter />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 872px;
  margin: 0 auto;
  line-height: 1.15;
  padding-block-start: 64px;
  padding-block-end: 4px;
  padding-inline: 32px;

  @media ${QUERIES.mobile} {
    padding-block-start: 48px;
  }
`

const Header = styled.h1`
  font-size: 4rem;
  margin-block-end: 32px;
  color: var(--yellow);

  @media ${QUERIES.mobile} {
    font-size: 3rem;
    margin-block-end: 24px;
  }
`

const Text = styled.p`
  font-size: 2rem;
  margin-block-end: 24px;
  line-height: 1.5;

  strong {
    color: var(--cobalt);
  }

  @media ${QUERIES.mobile} {
    font-size: 1.5rem;
    margin-block-end: 16px;
  }
`

const StyledFooter = styled(Footer)`
  margin-block-start: 48px;
`
