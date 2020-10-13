import React from 'react'
import { CSSTransition } from 'react-transition-group'

export default function Page(props) {
  return (
    <CSSTransition classNames="route-transition" in appear exit={false} timeout={300}>
      <div className="page" {...props} />
    </CSSTransition>
  )
}
