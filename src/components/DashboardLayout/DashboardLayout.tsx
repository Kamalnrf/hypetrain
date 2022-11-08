import {Header} from '../Header'
import {Footer} from '../Footer'
import {Outlet} from 'react-router-dom'
import {useLayoutEffect} from 'react'
import styled from 'styled-components'

function DashboardLayout() {
  useLayoutEffect(() => {
    document.documentElement.style.setProperty(
      '--background-color',
      'var(--black)',
    )
  }, [])

  return (
    <Wrapper>
      <Header />
      <main>
        <Outlet />
      </main>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const FooterWrapper = styled.div`
  margin-top: auto;
`

export {DashboardLayout}
