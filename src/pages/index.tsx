import Image from 'next/image'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Main from '@/components/main'


export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}