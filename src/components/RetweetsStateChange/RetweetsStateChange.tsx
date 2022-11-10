import {Modal} from '../Modal'
import {SelfDestruct} from '../SelfDestruct'
import {ReactComponent as Highlight} from '../../assets/highlight.svg'
import {ReactComponent as RetweetsEnabledLogo} from '../../assets/retweet.svg'
import {ReactComponent as RetweetsDisabledLogo} from '../../assets/retweet-disabled.svg'
import {ReactComponent as HappySmiley} from '../../assets/smiley-happy.svg'
import {ReactComponent as SadSmiley} from '../../assets/smiley-sad.svg'
import styled from 'styled-components'
import {QUERIES} from '../../constants'

type Props = {
  retweetTweets: boolean
  visible: boolean
  onClose: () => void
}

function RetweetsStateChange({visible, onClose, retweetTweets}: Props) {
  return (
    <SelfDestruct destroyAfter={3000} onComplete={onClose}>
      <Modal
        backgroundColor={retweetTweets ? 'var(--green)' : 'var(--white)'}
        isVisible={visible}
      >
        <Wrapper>
          <StyledHighlight />
          {retweetTweets ? (
            <StyledRetweetsEnabledLogo />
          ) : (
            <StyledRetweetsDisabledLogo />
          )}
          <Text retweetTweets={retweetTweets}>
            you have {retweetTweets ? 'enabled' : 'disabled'} favorites for
            tweets from the hypetrain family!
          </Text>
          {retweetTweets ? <StyledHappySmiley /> : <StyledSadSmiley />}
        </Wrapper>
      </Modal>
    </SelfDestruct>
  )
}

const Wrapper = styled.div`
  width: 420px;
  font-size: 2rem;
  margin-block-start: -32px;
  position: relative;

  @media ${QUERIES.mobile} {
    width: 280px;
    font-size: 1.5rem;
  }
`

const StyledHighlight = styled(Highlight)`
  width: 56px;
  position: absolute;
  top: -36px;
  left: -28px;

  @media ${QUERIES.mobile} {
    width: 40px;
    top: -34px;
    left: -22px;
  }
`

const StyledRetweetsEnabledLogo = styled(RetweetsEnabledLogo)`
  width: 160px;
  height: auto;

  @media ${QUERIES.mobile} {
    width: 132px;
  }
`

const StyledRetweetsDisabledLogo = styled(RetweetsDisabledLogo)`
  width: 160px;
  height: auto;

  @media ${QUERIES.mobile} {
    width: 132px;
  }
`

type TextProps = {
  retweetTweets: boolean
}

const Text = styled.p<TextProps>`
  color: ${props => (props.retweetTweets ? 'inherit' : 'var(--black)')};
  margin-block-start: 24px;
`

const StyledHappySmiley = styled(HappySmiley)`
  width: 100px;
  position: absolute;
  bottom: -16px;
  right: 32px;

  @media ${QUERIES.mobile} {
    width: 75px;
    bottom: -56px;
    right: 0px;
  }
`

const StyledSadSmiley = styled(SadSmiley)`
  width: 100px;
  position: absolute;
  bottom: -32px;
  right: 24px;

  @media ${QUERIES.mobile} {
    width: 75px;
    bottom: -74px;
    right: -8px;
  }
`

export {RetweetsStateChange}
