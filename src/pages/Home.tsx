import {useState} from 'react'
import styled from 'styled-components'
import {ReactComponent as FavoriteIcon} from '../assets/favorite.svg'
import {ReactComponent as FavoriteDisabledIcon} from '../assets/favorite-disabled.svg'
import {ReactComponent as RetweetIcon} from '../assets/retweet.svg'
import {ReactComponent as RetweetDisabledIcon} from '../assets/retweet-disabled.svg'
import {ReactComponent as ActivityIcon} from '../assets/activity.svg'
import {ReactComponent as ShareIcon} from '../assets/share.svg'
import {QUERIES} from '../constants'
import {useUser} from '../components/UserProvider'

function Home() {
  const [favorite, setFavorite] = useState(true)
  const [retweet, setRetweet] = useState(true)
  const {username} = useUser()
  const hashtag = 'hypetrain'

  const tweetIntent =
    'https://twitter.com/intent/tweet?text=yo%2C%20you%20should%20all%20get%20onboard%20the%20hypetrain%21%20cool%20stuff%20%3A%29'
  const userActivity = `https://twitter.com/search?q=(from%3A${username})%20%23${hashtag}&src=typed_query&f=top`

  return (
    <Actions>
      <ItemWrapper onClick={() => setFavorite(!favorite)}>
        <IconContainer>
          {favorite ? (
            <FavoriteIcon height={60} width={60} />
          ) : (
            <FavoriteDisabledIcon height={60} width={60} />
          )}
        </IconContainer>
        favorite
      </ItemWrapper>
      <ItemWrapper onClick={() => setRetweet(!retweet)}>
        <IconContainer>
          {retweet ? (
            <RetweetIcon width={84} />
          ) : (
            <RetweetDisabledIcon width={84} />
          )}
        </IconContainer>
        retweet
      </ItemWrapper>
      <StyledLink href={userActivity}>
        <ItemWrapper>
          <IconContainer>
            <ActivityIcon width={72} />
          </IconContainer>
          activity
        </ItemWrapper>
      </StyledLink>
      <TweetLink href={tweetIntent}>
        <ItemWrapper>
          <IconContainer>
            <ShareIcon width={72} />
          </IconContainer>
          share
        </ItemWrapper>
      </TweetLink>
    </Actions>
  )
}

const Actions = styled.div`
  color: var(--white);
  font-size: 2rem;

  @media ${QUERIES.mobile} {
    font-size: 1.5rem;
    margin-inline-start: 16px;
  }
`

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-block-end: 12px;

  @media ${QUERIES.mobile} {
    margin-block-end: 24px;
  }
`

const IconContainer = styled.div`
  width: 92px;
  height: auto;
  margin-inline-end: 24px;
  display: flex;
  justify-content: flex-start;

  @media ${QUERIES.mobile} {
    align-items: center;
    width: 64px;
    height: auto;

    svg {
      height: 44px;
    }
  }
`

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`

const TweetLink = styled.a`
  text-decoration: none;
  color: inherit;
`

export default Home
