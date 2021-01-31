import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components';


export default function Home() {
  return (
    <IndexStyle>
      <Head>
        <title>Daily Gratitude</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Daily Gratitude</h1>
        <Link href="/login">
          <a>Login</a>
        </Link>
        <Link href="/signup">
          <a>Sign</a>
        </Link>

      </main>

    </IndexStyle>
  )
}

const IndexStyle = styled.div`
  color: purple;
`;
