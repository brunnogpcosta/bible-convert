"use client"
import Header from './components/Header'

import SidebarMenu from './components/SlidebarMenu'
import Converter from './components/Converter'
import { useState } from 'react';
import { i18n } from './translate/i18n';
import SEO from './components/Seo';

export default function Home() {
  const title = 'bibleConvert';
  const description = 'Descrição da sua página';
  const image = '/caminho-para-imagem.jpg'; // Opcional: caso queira uma imagem específica para a página
  const url = 'https://www.seusite.com/sua-pagina'; // Substitua pela URL real da sua página


  const [itemSelected, setItemSelected] = useState('');
  const [languageSelected, setLanguageSelected] = useState(i18n.language);

  const handleItemSelected = (item: string) => {
    setItemSelected(item);
  };

  const handleLanguageSelected = (item: string) => {
    setLanguageSelected(item);
    i18n.changeLanguage(item)
  };


  return (
    <>
      <SEO title={title} description={description} image={image} url={url} />
      <Header handleLanguageSelected={handleLanguageSelected} languageSelected={languageSelected} />
      <main className="flex min-h-screen flex-row justify-center p-24">
        <SidebarMenu itemSelected={itemSelected} handleItemSelected={handleItemSelected} />
        <Converter itemSelected={itemSelected} />
      </main>
    </>
  )
}
