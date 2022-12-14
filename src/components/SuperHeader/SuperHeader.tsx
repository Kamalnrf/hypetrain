import styled, {keyframes} from 'styled-components'
import {QUERIES} from '../../constants'

function SuperHeader() {
  return (
    <FullBleed>
      <SuperHeaderContainer>
        <Text>
          go on, tweet something with <Hashtag>#hypetrain</Hashtag> to see the
          magic! 🥳
        </Text>
      </SuperHeaderContainer>
    </FullBleed>
  )
}

const FullBleed = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`

const SuperHeaderContainer = styled.div`
  background-color: var(--blue);
  padding-block: 8px;
  overflow: hidden;
`

const scrollMobile = keyframes`
 from {
  transform: translateX(100vw);
 }
 to {
  transform: translateX(-150vw);
 }
`

const Text = styled.p`
  position: relative;
  font-size: 1.25rem;
  text-align: center;

  @media ${QUERIES.mobile} {
    white-space: nowrap;
    animation: ${scrollMobile} 15s linear infinite;
  }
`

const Hashtag = styled.span`
  color: var(--yellow);
`

export {SuperHeader}
