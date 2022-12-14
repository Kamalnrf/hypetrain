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
    <Wrapper>
      <TextWrapper>
        <Scribble />
        go
      </TextWrapper>
      <BackButton onClick={goBack}>
        back?
        <StyledCircle />
        <StyledUnderline />
      </BackButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  line-height: 1.15;
`

const TextWrapper = styled.h1`
  color: var(--white);
  font-weight: var(--font-weight-regular);
  font-size: 4rem;
  line-height: 1.15;
  position: relative;

  & > svg {
    width: 84px;
    height: auto;
    position: absolute;
    top: -16px;
    left: -56px;
  }

  @media ${QUERIES.mobile} {
    font-size: 3rem;

    & > svg {
      width: 48px;
      height: auto;
      top: -8px;
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
    cursor: none;
  }
`

const StyledCircle = styled(Circle)`
  position: absolute;
  top: -8px;
  left: -16px;
  width: 210px;
  height: auto;

  @media ${QUERIES.mobile} {
    top: -12px;
    left: -10px;
  }
`

const StyledUnderline = styled(Underline)`
  position: absolute;
  top: 72px;
  left: -32px;
  width: 240px;
  height: auto;

  @media ${QUERIES.mobile} {
    top: 52px;
    left: -28px;
  }
`

export {GoBack}
