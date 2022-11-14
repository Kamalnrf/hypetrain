import styled, {createGlobalStyle} from 'styled-components'
import {Portal} from 'react-portal'
import {MaxWidthWrapper} from '../MaxWidthWrapper'

type Props = {
  children: React.ReactNode
  backgroundColor: string
  isVisible: boolean
}

function Modal({children, backgroundColor, isVisible}: Props) {
  if (!isVisible) {
    return <></>
  }

  return (
    <Portal>
      <GlobalStyles />
      <Wrapper backgroundColor={backgroundColor}>
        <MaxWidthWrapper>
          <ModalBody>{children}</ModalBody>
        </MaxWidthWrapper>
      </Wrapper>
    </Portal>
  )
}

const GlobalStyles = createGlobalStyle`
  body {
    overflow: hidden;
  }

  #root {
    display: none;
  }
`

const Wrapper = styled.div<{backgroundColor: string}>`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${({backgroundColor}) => backgroundColor};
`

const ModalBody = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export {Modal}
