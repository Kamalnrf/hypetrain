import {useState, useLayoutEffect} from 'react'
const OEMBED_URL = 'https://publish.twitter.com/oembed'
const TWEET_URL = 'https://twitter.com/Rich_Harris/status/1579870277844205568'
const ALIGN = 'center'

function useTweetEmbed() {
  const [tweetEmbed, setTweetEmbed] = useState<string | null>(null)

  useLayoutEffect(() => {
    const TWEET_EMBED_URL = `${OEMBED_URL}?url=${TWEET_URL}&align=${ALIGN}`
    const tweet = fetch(TWEET_EMBED_URL)
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

  return tweetEmbed
}

const Tweet = () => {
  const tweetEmbedLink = useTweetEmbed()

  return <p>{tweetEmbedLink}</p>
}

export {Tweet}
