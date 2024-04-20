import { Suspense, lazy } from 'react'

import Page404 from './pages/404'
import SearchPage from './pages/Search'
import { Router } from './components/Router'
import { Route } from './components/Route'

const LazyHomePage = lazy(() => import('./pages/Home'))
const LazyAboutPage = lazy(() => import('./pages/About'))

const appRoutes = [
  { path: '/:lang/about', Component: LazyAboutPage },
  { path: '/search/:query', Component: SearchPage },
]

function App() {
  return (
    <main>
      <Suspense>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
