import React from 'react'

import Page from './Page'

export default function Home() {
  React.useEffect(() => {
    console.log('Home mounted')
    return () => console.log('Home unmounted')
  }, [])
  return (
    <Page>
      <h2>Home</h2>
    </Page>
  )
}
