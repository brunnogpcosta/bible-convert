"use client"
import Header from './components/Header'

import SidebarMenu from './components/SlidebarMenu'
import Converter from './components/Converter'
import { useState } from 'react';
import { i18n } from './translate/i18n';
import SEO from './components/Seo';
import './page.css';

export default function Home() {
  const title = i18n.t('metadata.title');
  const description = i18n.t('metadata.description');
  const image = '/caminho-para-imagem.jpg';
  const url = 'https://bibleconvert.com/';

  const [itemSelected, setItemSelected] = useState('');
  const [languageSelected, setLanguageSelected] = useState(i18n.language);

  const handleItemSelected = (item: string) => {
    setItemSelected(item);
  };

  const handleLanguageSelected = (item: string) => {
    setLanguageSelected(item);
    i18n.changeLanguage(item);
  };

  return (
    <>
      <SEO title={title} description={description} image={image} url={url} />
      <Header handleLanguageSelected={handleLanguageSelected} languageSelected={languageSelected} />
      <main className="flex min-h-screen flex-row justify-center p-24 main-container">
        <SidebarMenu itemSelected={itemSelected} handleItemSelected={handleItemSelected} />
        <Converter itemSelected={itemSelected} />
      </main>
    </>
  );
}