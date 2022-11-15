import {Header} from '../Header'
import {Footer} from '../Footer'
import {Outlet} from 'react-router-dom'
import {useLayoutEffect} from 'react'
import {SuperHeader} from '../SuperHeader'

function DashboardLayout() {
  useLayoutEffect(() => {
    document.documentElement.style.setProperty(
      '--background-color',
      'var(--black)',
    )
  }, [])

  return (
    <>
      <div>
        <header>
          <SuperHeader />
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  )
}

export {DashboardLayout}
