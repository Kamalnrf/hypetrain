import {FeedbackFish} from '@feedback-fish/react'
import styled from 'styled-components'
import {QUERIES} from '../../constants'
import {ReactComponent as FeedbackIcon} from '../../assets/feedback.svg'
import {Link} from 'react-router-dom'
import {ReactComponent as HelpIcon} from '../../assets/help.svg'
import {useUser} from '../UserProvider'

function Menu() {
  const {username} = useUser()

  return (
    <Wrapper>
      <FeedbackFish
        projectId={process.env.REACT_APP_FEEDBACK_FISH_ID as string}
        userId={username}
      >
        <StyledFeedbackIcon />
      </FeedbackFish>
      <Link to={'help'}>
        <HelpIcon />
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  position: absolute;
  height: 40px;
  right: 0;
  top: 32px;

  svg {
    height: 40px;
  }

  @media ${QUERIES.mobile} {
    gap: 8px;
    right: -12px;
    top: 20px;

    svg {
      height: 36px;
    }
  }
`

const StyledFeedbackIcon = styled(FeedbackIcon)`
  cursor: pointer;
`

export {Menu}
