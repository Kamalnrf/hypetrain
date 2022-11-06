import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {ReactComponent as FavoriteIcon} from '../assets/favorite.svg'
import {ReactComponent as RetweetIcon} from '../assets/retweet.svg'
import {ReactComponent as ActivityIcon} from '../assets/activity.svg'
import {ReactComponent as ShareIcon} from '../assets/share.svg'
import {QUERIES} from '../constants'

function Home() {
  const tweetIntent =
    'https://twitter.com/intent/tweet?text=yo%2C%20you%20should%20all%20get%20onboard%20the%20hypetrain%21%20cool%20stuff%20%3A%29'

  return (
    <Actions>
      <ItemWrapper>
        <IconContainer>
          <FavoriteIcon width={108} />
        </IconContainer>
        favorite
      </ItemWrapper>
      <ItemWrapper>
        <IconContainer>
          <RetweetIcon width={108} />
        </IconContainer>
        retweet
      </ItemWrapper>
      <StyledLink to={'./activity'}>
        <ItemWrapper>
          <IconContainer>
            <ActivityIcon width={108} />
          </IconContainer>
          activity
        </ItemWrapper>
      </StyledLink>
      <TweetLink href={tweetIntent}>
        <ItemWrapper>
          <IconContainer>
            <ShareIcon width={108} />
          </IconContainer>
          share
        </ItemWrapper>
      </TweetLink>
    </Actions>
  )
}

const Actions = styled.div`
  color: var(--white);
  font-size: 3rem;

  @media ${QUERIES.mobile} {
    font-size: 1.5rem;
  }
`

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-block-end: 32px;
`

const IconContainer = styled.div`
  max-width: 108px;
  height: 72px;
  margin-inline-end: 24px;

  @media ${QUERIES.mobile} {
    display: flex;
    align-items: center;
    width: 76px;
    height: 48px;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const TweetLink = styled.a`
  text-decoration: none;
  color: inherit;
`

export default Home
