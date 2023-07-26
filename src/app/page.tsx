"use client"

import Image from 'next/image'
import Header from './components/Header'

import SidebarMenu from './components/SlidebarMenu'
import Converter from './components/Converter'
import { useState } from 'react';

export default function Home() {
  const [itemSelected, setItemSelected] = useState('');

  const handleItemSelected = (item: string) => {
    setItemSelected(item);
  };
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-row justify-center p-24">
        <SidebarMenu itemSelected={itemSelected} handleItemSelected={handleItemSelected}/>
        <Converter itemSelected={itemSelected}/>
      </main>
    </>
  )
}
