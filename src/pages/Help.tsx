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
import {ReactComponent as LeftHighlight} from '../assets/left-highlight.svg'
import {ReactComponent as RightHighlight} from '../assets/right-highlight.svg'
import {QUERIES} from '../constants'

function Help() {
  const navigate = useNavigate()
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
    <>
      <Header>
        <StyledHelpIcon width={75} height={128} />
        <CloseIconContainer>
          <Link to={'/'} onClick={goBack}>
            <CloseIcon width={56} height={48} />
          </Link>
        </CloseIconContainer>
      </Header>
      <MainText>
        this is an interactive playground. click{' '}
        <IconContainer>
          <Favorite width={52} height={48} />
        </IconContainer>{' '}
        or{' '}
        <IconContainer>
          <Retweet width={74} height={48} />
        </IconContainer>{' '}
        to toggle favorites or retweets,{' '}
        <IconContainer>
          <Activity width={76} height={48} />
        </IconContainer>{' '}
        to see your activity,{' '}
        <IconContainer>
          <Share width={77} height={48} />{' '}
        </IconContainer>{' '}
        to tweet about us,{' '}
        <IconContainer>
          <Feedback width={50} height={48} />{' '}
        </IconContainer>{' '}
        to offer feedback, and{' '}
        <IconContainer>
          <HelpIcon width={28} height={48} />{' '}
        </IconContainer>{' '}
        for help.
        <Spacer />
        to logout or delete your account, click{' '}
        <Name>
          <StyledLeftHighlight width={29} height={32} />
          @vishalxk!
          <StyledRightHighlight width={30} height={33} />
        </Name>
      </MainText>
    </>
  )
}

const Header = styled.header`
  color: var(--white);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-block-start: 80px;
  margin-block-end: 48px;
`

const CloseIconContainer = styled.div`
  margin-block-start: 8px;
`

const StyledHelpIcon = styled(HelpIcon)`
  border: 1px solid black;
`

const MainText = styled.main`
  font-size: 2.4rem;
  line-height: 1.35;

  @media ${QUERIES.mobile} {
    font-size: 1.5rem;

    svg {
      height: 32px;
      width: fit-content;
    }
  }
`

const IconContainer = styled.div`
  display: inline-block;
  margin-bottom: -10px;
`

const Name = styled.div`
  display: inline-block;
  color: var(--lavender);
  font-weight: var(--font-weight-semibold);
  position: relative;
  margin-inline-start: 8px;
`

const StyledLeftHighlight = styled(LeftHighlight)`
  position: absolute;
  left: -16px;
`

const StyledRightHighlight = styled(RightHighlight)`
  position: absolute;
  left: 188px;
  top: -4px;
`

const Spacer = styled.div`
  height: 32px;
`

export default Help
