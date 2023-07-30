"use client"
import Header from './components/Header'

import SidebarMenu from './components/SlidebarMenu'
import Converter from './components/Converter'
import { useState } from 'react';
import { i18n } from './translate/i18n';
import SEO from './components/Seo';
import { useEffect } from 'react';
import { initGA, logPageView } from './components/Analytics'
import './page.css';
import Modal from './components/Modal';
import Script from "next/script"
import Footer from './components/Footer';


export default function Home() {
  const title = i18n.t('metadata.title');
  const description = i18n.t('metadata.description');
  const image = '/caminho-para-imagem.jpg';
  const url = 'https://bibleconvert.com/';

  const [itemSelected, setItemSelected] = useState('');
  const [languageSelected, setLanguageSelected] = useState(i18n.language);
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState('');
  const [descriptionModal, setDescriptionModal] = useState('');

  const handleItemSelected = (item: string) => {
    setItemSelected(item);
  };

  const handleLanguageSelected = (item: string) => {
    setLanguageSelected(item);
    i18n.changeLanguage(item);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModal = (title: string, description: string) => {
    setTitleModal(title)
    setDescriptionModal(description)
    setShowModal(true);
  };



  // useEffect(() => {
  //   initGA();
  //   logPageView();
  // }, []);

  return (
    <>
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-T5J86DEMS2');
        `}
      </Script>
      <meta name="google-site-verification" content="dkLg9GAqawiLt719kp-J_bkbbackWV8rJFMZMrH9Tl4" />
      <SEO title={title} description={description} image={image} url={url} />
      <Header handleLanguageSelected={handleLanguageSelected} languageSelected={languageSelected} />
      <main className="flex flex-row p-2 main-container">
        <SidebarMenu itemSelected={itemSelected} handleItemSelected={handleItemSelected} />
        <Converter itemSelected={itemSelected} handleQuoteSelected={(vers, desc) => handleModal(vers, desc)} />
        {showModal && <Modal title={titleModal} description={descriptionModal} onClose={handleModalClose}></Modal>}
      </main>
      {/* <Footer/> */}
    </>
  );
}