import Image from 'next/image'
import Header from './components/Header'

import SidebarMenu from './components/SlidebarMenu'
import Converter from './components/Converter'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-row justify-center p-24">
        <SidebarMenu className="mr-4"/>
        <Converter />
      </main>
    </>
  )
}
