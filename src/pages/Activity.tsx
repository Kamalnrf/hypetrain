import {useLayoutEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ReactComponent as CloseIcon} from '../assets/close.svg'
import {ReactComponent as ActivityIcon} from '../assets/activity.svg'
import {QUERIES} from '../constants'

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
            <CloseIcon width={'auto'} height={32} />
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
  margin-block-end: 48px;
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

const StyledActivityIcon = styled(ActivityIcon)`
  border: 1px solid black;
  margin-block-start: 80px;

  @media ${QUERIES.mobile} {
    height: 96px;
    margin-block-start: 64px;
  }
`

export default Activity
