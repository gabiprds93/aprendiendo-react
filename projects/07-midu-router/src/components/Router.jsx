import { useState, useEffect, Children } from 'react'
import { match } from 'path-to-regexp'

import { EVENTS } from '../utils/consts'
import { getCurrentPath } from '../utils/getCurrentPath'

export function Router({
  children,
  routes = [],
  defaultComponent: DefaultComponent = () => null,
}) {
  const [currentPath, setCurrentPath] = useState(getCurrentPath)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  let routeParams = {}

  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const isRoute = type.name === 'Route'

    return isRoute ? props : null
  })

  const routesToUse = routes.concat(routesFromChildren).filter(Boolean)

  const Page = routesToUse.find((route) => {
    if (route.path === currentPath) return true
    const matcherUrl = match(route.path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)
    if (!matched) return false

    routeParams = matched.params
    return true
  })?.Component

  return Page ? <Page routeParams={routeParams} /> : <DefaultComponent />
}
