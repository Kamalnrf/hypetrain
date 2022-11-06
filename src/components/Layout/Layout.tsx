import {MaxWidthWrapper} from '../MaxWidthWrapper'

type Props = {
  children: React.ReactNode
}

function Layout({children}: Props) {
  return <MaxWidthWrapper>{children}</MaxWidthWrapper>
}

export {Layout}
