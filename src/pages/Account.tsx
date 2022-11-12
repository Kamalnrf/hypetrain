import {useEffect, useState} from 'react'
import {useUser} from '../components/UserProvider'
import styled from 'styled-components'
import {ReactComponent as LogoutIcon} from '../assets/logout.svg'
import {ReactComponent as DeleteIcon} from '../assets/delete.svg'
import {ReactComponent as Highlight} from '../assets/highlight.svg'
import {ReactComponent as HappySmiley} from '../assets/smiley-happy.svg'
import {ReactComponent as SadSmiley} from '../assets/smiley-sad.svg'
import {ReactComponent as Underline} from '../assets/underline-vishal.svg'
import {ReactComponent as Circle} from '../assets/circle-two.svg'
import {QUERIES} from '../constants'
import {Modal} from '../components/Modal'
import {SelfDestruct} from '../components/SelfDestruct'

export default function Home() {
  const mobileMatch = window.matchMedia(QUERIES.mobile)
  const {logout, deleteUser} = useUser()
  const [isMobile, setMobile] = useState(mobileMatch.matches)
  const [isVisible, setVisible] = useState({
    logoutModal: false,
    deleteModal: false,
  })

  function handleLogoutModal() {
    setVisible({
      ...isVisible,
      logoutModal: true,
    })
  }

  function handleDeleteModal() {
    setVisible({
      ...isVisible,
      deleteModal: !isVisible.deleteModal,
    })
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
      <ItemWrapper onClick={handleLogoutModal}>
        <IconContainer>
          <LogoutIcon width={isMobile ? 52 : 72} height={'auto'} />
        </IconContainer>
        logout
      </ItemWrapper>
      <ItemWrapper onClick={handleDeleteModal}>
        <IconContainer>
          <DeleteIcon width={isMobile ? 64 : 84} />
        </IconContainer>
        delete
      </ItemWrapper>
      <Modal backgroundColor="var(--white)" isVisible={isVisible.logoutModal}>
        <SelfDestruct destroyAfter={3000} onComplete={logout}>
          <Wrapper>
            <StyledLogoutHighlight />
            <LogoutIcon />
            <Text className="logout-text">see you later!</Text>
            <StyledHappySmiley />
          </Wrapper>
        </SelfDestruct>
      </Modal>
      <Modal backgroundColor="var(--blue)" isVisible={isVisible.deleteModal}>
        <Wrapper>
          <StyledDeleteHighlight />
          <DeleteIcon width={isMobile ? 144 : 180} />
          <Text>are you sure you want to delete your account?</Text>
          <ResponseContainer>
            <ButtonContainer>
              <Button onClick={deleteUser}>yes</Button>
              <StyledUnderline />
            </ButtonContainer>
            <ButtonContainer onClick={handleDeleteModal}>
              <Button className="no-button">no</Button>
              <StyledCircle cursor="pointer" />
            </ButtonContainer>
          </ResponseContainer>
          <StyledSadSmiley />
        </Wrapper>
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

const StyledLogoutHighlight = styled(Highlight)`
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

const StyledDeleteHighlight = styled(Highlight)`
  width: 56px;
  position: absolute;
  top: 4px;
  left: -24px;

  @media ${QUERIES.mobile} {
    width: 40px;
    top: 0px;
    left: -16px;
  }
`

const Text = styled.p`
  color: inherit;
  margin-block-start: 24px;

  &.logout-text {
    color: var(--black);
  }
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

const StyledSadSmiley = styled(SadSmiley)`
  width: 100px;
  position: absolute;
  bottom: 8px;
  right: 0px;

  @media ${QUERIES.mobile} {
    width: 75px;
    bottom: -12px;
    right: -12px;
  }
`

const ResponseContainer = styled.div`
  display: flex;
  gap: 56px;
  margin-block-start: 24px;

  @media ${QUERIES.mobile} {
    gap: 32px;
  }
`

const ButtonContainer = styled.div`
  position: relative;
`

const Button = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  color: var(--cobalt);

  &.no-button {
    color: var(--green);
  }
`

const StyledUnderline = styled(Underline)`
  position: absolute;
  width: 72px;
  height: auto;
  bottom: 8px;

  path {
    color: var(--yellow);
    stroke-width: 0;
  }
`

const StyledCircle = styled(Circle)`
  position: absolute;
  width: 72px;
  height: auto;
  bottom: 2px;
  right: 2px;

  @media ${QUERIES.mobile} {
    bottom: 0px;
  }
`
