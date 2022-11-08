import {useNavigate} from 'react-router-dom'
import {ReactComponent as Scribble} from '../../assets/sparkle-two.svg'
import {ReactComponent as Circle} from '../../assets/circle.svg'
import {ReactComponent as Underline} from '../../assets/underline.svg'
import styled from 'styled-components'

import {QUERIES} from '../../constants'

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

const TextWrapper = styled.h1`
  color: var(--white);
  font-weight: var(--font-weight-regular);
  font-size: 4rem;
  line-height: 1.15;
  margin-block-start: 80px;
  margin-block-end: 48px;
  position: relative;

  & > svg {
    width: 84px;
    position: absolute;
    top: -36px;
    left: -64px;
  }

  @media ${QUERIES.mobile} {
    font-size: 3rem;
    margin-block-start: 15vh;
    margin-block-end: 32px;

    & > svg {
      width: 48px;
      top: -40px;
      left: -32px;
    }
  }
`

const BackButton = styled.button`
  text-decoration: none;
  color: var(--yellow);
  font-weight: var(--font-weight-semibold);
  font-size: 4rem;
  position: relative;
  display: block;
  border: 0;
  background-color: var(--black);
  cursor: pointer;

  @media ${QUERIES.mobile} {
    font-size: 3rem;
  }
`

const StyledCircle = styled(Circle)`
  position: absolute;
  top: -48px;
  left: -16px;
  width: 210px;

  @media ${QUERIES.mobile} {
    top: -56px;
    left: -16px;
  }
`

const StyledUnderline = styled(Underline)`
  position: absolute;
  top: 64px;
  left: -32px;
  width: 240px;

  @media ${QUERIES.mobile} {
    top: 44px;
    left: -28px;
  }
`

export {GoBack}
