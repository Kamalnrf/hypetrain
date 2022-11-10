import {FavoritesStateChange} from '../FavoritesStateChange'
import {RetweetsStateChange} from '../RetweetsStateChange'
import {usePrevious} from '../../hooks/usePrevious'

type Props = {
  visible: boolean
  onClose: () => void
} & Preference

type Preference = {
  retweetTweets: boolean
  likeTweets: boolean
}

function getWhatChanged(prev: Preference, curr: Preference) {
  if (prev.likeTweets !== curr.likeTweets) {
    return 'like'
  } else if (prev.retweetTweets !== curr.retweetTweets) {
    return 'retweets'
  }

  return 'unknown'
}

function PreferenceChange({
  likeTweets,
  retweetTweets,
  visible,
  onClose,
}: Props) {
  const prevLikeTweets = usePrevious(likeTweets)
  const prevRetweetTweets = usePrevious(retweetTweets)
  const whatChanged = getWhatChanged(
    {
      likeTweets: prevLikeTweets ?? false,
      retweetTweets: prevRetweetTweets ?? false,
    },
    {likeTweets, retweetTweets},
  )

  return whatChanged === 'like' ? (
    <FavoritesStateChange
      likeTweets={likeTweets}
      visible={visible}
      onClose={onClose}
    />
  ) : (
    <RetweetsStateChange
      retweetTweets={retweetTweets}
      visible={visible}
      onClose={onClose}
    />
  )
}

export {PreferenceChange}
