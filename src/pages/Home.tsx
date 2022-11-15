import {useState} from 'react'
import styled from 'styled-components'
import {ReactComponent as FavoriteIcon} from '../assets/favorite.svg'
import {ReactComponent as FavoriteDisabledIcon} from '../assets/favorite-disabled.svg'
import {ReactComponent as FavoriteStrikethrough} from '../assets/favorite-strikethrough.svg'
import {ReactComponent as RetweetIcon} from '../assets/retweet.svg'
import {ReactComponent as RetweetDisabledIcon} from '../assets/retweet-disabled.svg'
import {ReactComponent as RetweetStrikethrough} from '../assets/retweet-strikethrough.svg'
import {ReactComponent as ActivityIcon} from '../assets/activity.svg'
import {ReactComponent as ShareIcon} from '../assets/share.svg'
import {ReactComponent as TwitterLogo} from '../assets/twitter-blue.svg'
import {QUERIES} from '../constants'
import {useUser} from '../components/UserProvider'
import {useQuery, useMutation, useQueryClient} from 'react-query'
import {client, Response} from '../utils/api'
import {PreferenceChange} from '../components/PreferenceChange'

const HASHTAG = 'hypetrain'
const PREFERENCES_QUERY = 'user-preferences'

type Preferences = {
  likeTweets: boolean
  retweetTweets: boolean
}

function Home() {
  const {username} = useUser()
  const queryClient = useQueryClient()
  const [visible, setVisible] = useState(false)

  const tweetIntent =
    'https://twitter.com/intent/tweet?text=%22replace%20this%20with%20what%20you%20want%20to%20say%21%22%20%23hypetrain'
  const shareIntent =
    'https://twitter.com/intent/tweet?text=yo%2C%20you%20should%20all%20get%20onboard%20the%20hypetrain%21%20cool%20stuff%20%3A%29'
  const userActivity = `https://twitter.com/search?q=(from%3A${username})%20%23${HASHTAG}&src=typed_query&f=top`

  const {data: preferences, isLoading} = useQuery(PREFERENCES_QUERY, () =>
    client<Preferences>('preference'),
  )

  const {mutate} = useMutation({
    mutationFn(preferences: Preferences) {
      return client<Preferences>('preference', {
        data: preferences,
      })
    },
    onSuccess(updatedPreferences) {
      if (updatedPreferences.success) {
        queryClient.setQueryData<Response<Preferences>>([PREFERENCES_QUERY], {
          success: true,
          data: {
            ...updatedPreferences.data,
          },
        })
        setVisible(true)
      }
    },
  })

  function updateFavorites() {
    return mutate({
      retweetTweets: Boolean(
        preferences?.success && preferences.data.retweetTweets,
      ),
      likeTweets: !(preferences?.success && preferences.data.likeTweets),
    })
  }

  function updateRetweets() {
    return mutate({
      retweetTweets: !(preferences?.success && preferences.data.retweetTweets),
      likeTweets: Boolean(preferences?.success && preferences.data.likeTweets),
    })
  }

  if (isLoading) {
    return <></>
  }

  return (
    <>
      <Actions>
        <ItemWrapper
          onClick={updateFavorites}
          isEnabled={Boolean(
            preferences?.success && preferences.data.likeTweets,
          )}
        >
          <IconContainer>
            {preferences?.success && preferences.data.likeTweets ? (
              <FavoriteIcon height={60} width={60} />
            ) : (
              <FavoriteDisabledIcon height={60} width={60} />
            )}
          </IconContainer>
          favorite
          <StyledFavoriteStrikethrough
            isEnabled={Boolean(
              preferences?.success && preferences.data.likeTweets,
            )}
          />
        </ItemWrapper>
        <ItemWrapper
          onClick={updateRetweets}
          isEnabled={Boolean(
            preferences?.success && preferences.data.retweetTweets,
          )}
        >
          <IconContainer>
            {preferences?.success && preferences.data.retweetTweets ? (
              <RetweetIcon width={84} />
            ) : (
              <RetweetDisabledIcon width={84} />
            )}
          </IconContainer>
          retweet
          <StyledRetweetStrikethrough
            isEnabled={Boolean(
              preferences?.success && preferences.data.retweetTweets,
            )}
          />
        </ItemWrapper>
        <ItemWrapper isEnabled>
          <StyledLink href={userActivity} target={'_blank'}>
            <IconContainer>
              <ActivityIcon width={72} />
            </IconContainer>
            activity
          </StyledLink>
        </ItemWrapper>
        <ItemWrapper isEnabled>
          <StyledLink href={tweetIntent} target={'_blank'}>
            <IconContainer>
              <TwitterLogo width={64} />
            </IconContainer>
            tweet
          </StyledLink>
        </ItemWrapper>
        <ItemWrapper isEnabled>
          <StyledLink href={shareIntent} target={'_blank'}>
            <IconContainer>
              <ShareIcon width={72} />
            </IconContainer>
            share
          </StyledLink>
        </ItemWrapper>
      </Actions>
      <PreferenceChange
        likeTweets={Boolean(
          preferences?.success && preferences.data.likeTweets,
        )}
        retweetTweets={Boolean(
          preferences?.success && preferences.data.retweetTweets,
        )}
        onClose={() => {
          setVisible(false)
        }}
        visible={visible}
      />
    </>
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

type StrikeProps = {
  isEnabled: boolean
}

const ItemWrapper = styled.div<Partial<StrikeProps>>`
  display: flex;
  align-items: center;
  margin-block-end: 12px;
  cursor: pointer;
  user-select: none;
  width: fit-content;
  position: relative;
  color: ${props =>
    props.isEnabled ? 'var(--white)' : 'hsla(0, 0%, 100%, 0.5)'};

  @media ${QUERIES.mobile} {
    margin-block-end: 24px;
    cursor: none;
  }
`

const IconContainer = styled.div`
  width: 92px;
  height: 84px;
  margin-inline-end: 24px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media ${QUERIES.mobile} {
    align-items: center;
    width: 64px;
    height: 56px;

    svg {
      height: 44px;
    }
  }
`

const StyledFavoriteStrikethrough = styled(FavoriteStrikethrough)<StrikeProps>`
  display: ${props => (props.isEnabled ? 'none' : 'block')};
  position: absolute;
  top: 36px;
  left: -16px;
  min-width: 290px;

  @media ${QUERIES.mobile} {
    min-width: 210px;
    top: 20px;
    left: -8px;
  }
`

const StyledRetweetStrikethrough = styled(RetweetStrikethrough)<StrikeProps>`
  display: ${props => (props.isEnabled ? 'none' : 'block')};
  position: absolute;
  top: 32px;
  left: -16px;
  min-width: 280px;

  @media ${QUERIES.mobile} {
    min-width: 210px;
    top: 16px;
    left: -12px;
  }
`

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
`

export default Home
