import styled from 'styled-components'
import {MaxWidthWrapper} from '../MaxWidthWrapper'

type Props = {
  children: React.ReactNode
}

function Layout({children}: Props) {
  return (
    <MaxWidthWrapper>
      <Flex>{children}</Flex>
    </MaxWidthWrapper>
  )
}

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export {Layout}
