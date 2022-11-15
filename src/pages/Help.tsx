import {useLayoutEffect} from 'react'
import styled from 'styled-components'
import {Link, useNavigate} from 'react-router-dom'
import {ReactComponent as HelpIcon} from '../assets/help.svg'
import {ReactComponent as CloseIcon} from '../assets/close.svg'
import {ReactComponent as Favorite} from '../assets/favorite.svg'
import {ReactComponent as Retweet} from '../assets/retweet.svg'
import {ReactComponent as Activity} from '../assets/activity.svg'
import {ReactComponent as Share} from '../assets/share.svg'
import {ReactComponent as Feedback} from '../assets/feedback.svg'
import {QUERIES} from '../constants'
import {useUser} from '../components/UserProvider'

function Help() {
  const navigate = useNavigate()
  const {username} = useUser()
  useLayoutEffect(() => {
    document.documentElement.style.setProperty(
      '--background-color',
      'var(--purple)',
    )
  }, [])

  const goBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1)
    } else {
      navigate('/')
    }
  }

  return (
    <Wrapper>
      <Header>
        <StyledHelpIcon width={75} height={128} />
        <CloseIconContainer>
          <Link to={'/'} onClick={goBack}>
            <CloseIcon height={32} />
          </Link>
        </CloseIconContainer>
      </Header>
      <MainText>
        this is an interactive playground. click{' '}
        <IconContainer>
          <Favorite width={'auto'} height={40} />
        </IconContainer>{' '}
        or{' '}
        <IconContainer>
          <Retweet width={'auto'} height={40} />
        </IconContainer>{' '}
        to toggle favorites or retweets,{' '}
        <IconContainer>
          <Activity width={'auto'} height={40} />
        </IconContainer>{' '}
        to see your activity,{' '}
        <IconContainer>
          <Share width={'auto'} height={36} />{' '}
        </IconContainer>{' '}
        to tweet about us,{' '}
        <IconContainer>
          <Feedback width={'auto'} height={40} />{' '}
        </IconContainer>{' '}
        to offer feedback, and{' '}
        <IconContainer>
          <HelpIcon width={'auto'} height={40} />{' '}
        </IconContainer>{' '}
        for help.
        <Spacer />
        to logout or delete your account, click <Name>@{username}!</Name>
      </MainText>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`

const Header = styled.header`
  color: var(--white);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-block-end: 48px;
`

const CloseIconContainer = styled.div`
  margin-block-start: calc(80px + 8px);

  @media ${QUERIES.mobile} {
    margin-inline-start: -32px;
    margin-block-start: 24px;

    svg {
      height: 24px;
    }
  }
`

const StyledHelpIcon = styled(HelpIcon)`
  margin-block-start: 80px;

  @media ${QUERIES.mobile} {
    height: 96px;
    margin-block-start: 64px;
  }
`

const Name = styled.div`
  color: var(--lavender);
  font-weight: var(--font-weight-semibold);
  text-overflow: ellipsis;
  overflow: hidden;
  width: 14ch;
  max-width: 100%;
  width: fit-content;
`

const MainText = styled.main`
  font-size: 2rem;
  line-height: 1.35;

  @media ${QUERIES.mobile} {
    font-size: 1.5rem;

    svg {
      height: 28px;
    }
  }
`

const IconContainer = styled.div`
  display: inline-block;
  margin-bottom: -8px;
`

const Spacer = styled.div`
  height: 32px;
`

export default Help
