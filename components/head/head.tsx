import Head from 'next/head'
import React from 'react'

type Props = {}

function HeadComponent({}: Props) {
  return (
    <Head>
        <title>Antoine Ando</title>
        <meta name="description" content="Fullstack JS Developer"/>
        <meta property="og:title" content="Antoine Ando"/>
        <meta property="og:description" content="Fullstack JS Developer"/>
        <meta property="og:url" content="https:/antoineando.com"/>
        <meta property="og:type" content="website"/>
        <link rel="icon" href="/moon.png"/>
    </Head>
  )
}

export default HeadComponent