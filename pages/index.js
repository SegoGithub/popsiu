import Head from 'next/head'
import Image from 'next/image'
import s from '../public/s.png'
import si from '../public/si.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;900&display=swap" rel="stylesheet" />
      </Head>
      <main className="home-header">
        <div id="btn">
          <Image id="s" src={s} layout="fill" objectFit="cover" quality={100} />
          <Image id="si" src={si} layout="fill" objectFit="cover" quality={100} />
        </div>
        <div className="center">
          <div className="zindex center">
            <h1 className="font-nunito font-black text-8xl white thickborder">POPSIU</h1>
            <h1 id="count" className="font-nunito font-black white count">0</h1>
          </div>
        </div>
      </main>
      <script src="/main.js"></script>
    </>
  )
}
