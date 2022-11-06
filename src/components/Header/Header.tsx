import styled from 'styled-components'
import {Link, useMatch, useNavigate} from 'react-router-dom'
import {FeedbackFish} from '@feedback-fish/react'
import {ReactComponent as FeedbackIcon} from '../../assets/feedback.svg'
import {ReactComponent as HelpIcon} from '../../assets/help.svg'
import {ReactComponent as Sparkle} from '../../assets/sparkle.svg'
import {ReactComponent as LeftHighlight} from '../../assets/left-highlight.svg'
import {ReactComponent as RightHighlight} from '../../assets/right-highlight.svg'
import {ReactComponent as Scribble} from '../../assets/sparkle-two.svg'
import {ReactComponent as Circle} from '../../assets/circle.svg'
import {ReactComponent as Underline} from '../../assets/underline.svg'
import {QUERIES} from '../../constants'

function Menu() {
  return (
    <MenuWrapper>
      <FeedbackIconContainer>
        <FeedbackFish projectId="d5f1ee6b372937" userId={'vishalxk'}>
          <FeedbackIcon />
        </FeedbackFish>
      </FeedbackIconContainer>
      <Link to={'help'}>
        <HelpIcon />
      </Link>
    </MenuWrapper>
  )
}

function UserDetails() {
  return (
    <WelcomeMessage>
      <Greetings>
        <StyledSparkle />
        hello,
      </Greetings>
      <Name>
        <StyledLeftHighlight />
        <StyledLink to={'account'}>@vishalxk!</StyledLink>
        <StyledRightHighlight />
      </Name>
    </WelcomeMessage>
  )
}

function GoBack() {
  const navigate = useNavigate()
  const goBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1)
    } else {
      navigate('/')
    }
  }

  return (
    <TextWrapper>
      <Scribble />
      go
      <BackButton onClick={goBack}>
        back?
        <StyledCircle />
        <StyledUnderline />
      </BackButton>
    </TextWrapper>
  )
}

function Header() {
  const isHome = useMatch('/')

  return (
    <Wrapper>
      <Menu />
      {!Boolean(isHome) ? <GoBack /> : <UserDetails />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
`

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  height: 48px;
  position: absolute;
  right: 0;
  top: 32px;

  @media ${QUERIES.mobile} {
    gap: 12px;
    right: -8px;
    top: 24px;

    svg {
      height: 40px;
    }
  }
`

const FeedbackIconContainer = styled.div`
  cursor: pointer;
`

const WelcomeMessage = styled.h1`
  color: var(--white);
  font-weight: var(--font-weight-regular);
  font-size: 6rem;
  line-height: 1.15;
  margin-block-start: 80px;
  margin-block-end: 48px;

  @media ${QUERIES.mobile} {
    font-size: 3rem;
    margin-block-start: 40%;
    margin-block-end: 32px;
  }
`

const StyledSparkle = styled(Sparkle)`
  //TODO
  @media ${QUERIES.mobile} {
    display: none;
  }
`

const Greetings = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: -36px;
    left: -44px;
  }
`

const Name = styled.div`
  color: var(--lavender);
  font-weight: var(--font-weight-semibold);
  position: relative;
`

const StyledLeftHighlight = styled(LeftHighlight)`
  position: absolute;
  left: -48px;
  top: -4px;

  //TODO
  @media ${QUERIES.mobile} {
    display: none;
  }
`

const StyledRightHighlight = styled(RightHighlight)`
  position: absolute;
  left: 472px;
  top: -16px;

  //TODO
  @media ${QUERIES.mobile} {
    display: none;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const TextWrapper = styled.h1`
  color: var(--white);
  font-weight: var(--font-weight-regular);
  font-size: calc(96 / 16 * 1rem);
  line-height: 1.15;
  margin-block-start: 80px;
  margin-block-end: 48px;
  position: relative;

  & > svg {
    position: absolute;
    top: -32px;
    left: -96px;
  }

  @media ${QUERIES.mobile} {
    font-size: 3rem;
    margin-block-start: 170px;
    margin-block-end: 32px;
  }
`

const BackButton = styled.button`
  text-decoration: none;
  color: var(--yellow);
  font-weight: var(--font-weight-semibold);
  font-size: calc(96 / 16 * 1rem);
  position: relative;
  display: block;
  border: 0;
  background-color: var(--black);
  cursor: pointer;
`

const StyledCircle = styled(Circle)`
  position: absolute;
  top: -32px;
  left: -32px;
  max-width: 316px;
`

const StyledUnderline = styled(Underline)`
  position: absolute;
  top: 96px;
  left: -32px;
  max-width: 285px;
`

export {Header}
