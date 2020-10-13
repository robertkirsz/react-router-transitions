import React from 'react'

import Page from './Page'

export default function About() {
  React.useEffect(() => {
    console.log('About mounted')
    return () => console.log('About unmounted')
  }, [])
  return (
    <Page>
      <h2>About</h2>
    </Page>
  )
}
