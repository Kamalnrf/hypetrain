import {useLayoutEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ReactComponent as CloseIcon} from '../assets/close.svg'
import {ReactComponent as ActivityIcon} from '../assets/activity.svg'

function Activity() {
  useLayoutEffect(() => {
    document.documentElement.style.setProperty(
      '--background-color',
      'var(--blue-tint)',
    )
  }, [])

  return (
    <>
      <Header>
        <StyledActivityIcon width={174} height={128} />
        <CloseIconContainer>
          <Link to={'/'}>
            <CloseIcon width={56} height={48} />
          </Link>
        </CloseIconContainer>
      </Header>
      <MainText>here's our activity through your account...</MainText>
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

const MainText = styled.main`
  font-size: 2.4rem;
  line-height: 1.35;
`

const CloseIconContainer = styled.div`
  margin-block-start: 8px;
`

const StyledActivityIcon = styled(ActivityIcon)`
  border: 1px solid black;
`

export default Activity
