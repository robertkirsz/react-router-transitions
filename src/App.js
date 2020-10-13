import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import flattenByKey from './flattenByKey'

const Home = lazy(() => import(/* webpackChunkName: "HomePage" */ './Home'))
const About = lazy(() => import(/* webpackChunkName: "AboutPage" */ './About'))
const Contact = lazy(() => import(/* webpackChunkName: "ContactPage" */ './Contact'))

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/about-1', name: 'About', Component: About },
  { path: '/about-2', name: 'About', Component: About },
  { path: ['/contact-1/', '/contact-2/'], name: 'Contact', Component: Contact },
]

const flatRoutes = flattenByKey(routes, 'path')

export default function App() {
  return (
    <Router>
      <div>
        {flatRoutes.map((route) => (
          <NavLink key={route.path} to={route.path}>
            {route.name}
          </NavLink>
        ))}
      </div>

      <div className="page-container">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                appear={false}
                enter={false}
                timeout={300}
                classNames="route-transition"
                unmountOnExit
              >
                <Suspense fallback={null}>
                  <Component />
                </Suspense>
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
    </Router>
  )
}
