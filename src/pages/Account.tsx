import {useEffect, useState} from 'react'
import {useUser} from '../components/UserProvider'
import styled from 'styled-components'
import {ReactComponent as LogoutIcon} from '../assets/logout.svg'
import {ReactComponent as DeleteIcon} from '../assets/delete.svg'
import {ReactComponent as Highlight} from '../assets/highlight.svg'
import {ReactComponent as HappySmiley} from '../assets/smiley-happy.svg'
import {QUERIES} from '../constants'
import {Modal} from '../components/Modal'
import {SelfDestruct} from '../components/SelfDestruct'

export default function Home() {
  const mobileMatch = window.matchMedia(QUERIES.mobile)
  const {logout} = useUser()
  const [isMobile, setMobile] = useState(mobileMatch.matches)
  const [isVisible, setVisible] = useState(false)

  function handleClick() {
    setVisible(!isVisible)
  }

  useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setMobile(event.matches)
    }
    mobileMatch.addEventListener('change', onChange)

    return () => {
      mobileMatch.removeEventListener('change', onChange)
    }
  }, [mobileMatch])

  return (
    <Actions>
      <ItemWrapper onClick={handleClick}>
        <IconContainer>
          <LogoutIcon width={isMobile ? 52 : 72} height={'auto'} />
        </IconContainer>
        logout
      </ItemWrapper>
      <ItemWrapper>
        <IconContainer>
          <DeleteIcon width={isMobile ? 64 : 84} />
        </IconContainer>
        delete
      </ItemWrapper>
      <Modal backgroundColor="var(--white)" isVisible={isVisible}>
        <SelfDestruct destroyAfter={3000} onComplete={logout}>
          <Wrapper>
            <StyledHighlight />
            <LogoutIcon />
            <Text>see you later!</Text>
            <StyledHappySmiley />
          </Wrapper>
        </SelfDestruct>
      </Modal>
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
  cursor: pointer;
  width: fit-content;

  @media ${QUERIES.mobile} {
    margin-block-end: 24px;
    cursor: none;
  }
`

const IconContainer = styled.div`
  width: 92px;
  margin-inline-end: 24px;

  @media ${QUERIES.mobile} {
    display: flex;
    align-items: center;
    width: 64px;
  }
`

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

const Text = styled.p`
  color: var(--black);
  margin-block-start: 24px;
`

const StyledHappySmiley = styled(HappySmiley)`
  width: 100px;
  position: absolute;
  bottom: -64px;
  right: 32px;

  @media ${QUERIES.mobile} {
    width: 75px;
    bottom: -56px;
    right: 0px;
  }
`
