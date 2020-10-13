import React from 'react'

import Page from './Page'
import logo from './logo.svg'

export default function Contact() {
  React.useEffect(() => {
    console.log('Contact mounted')
    return () => console.log('Contact unmounted')
  }, [])
  return (
    <Page>
      <h2>Contact</h2>
      <img src={logo} className="App-logo" alt="logo" />
    </Page>
  )
}
