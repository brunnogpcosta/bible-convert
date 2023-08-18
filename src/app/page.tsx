"use client"
import Header from './components/Header'
import SidebarMenu from './components/SlidebarMenu'
import Converter from './components/Converter'
import { useState } from 'react';
import { i18n } from './translate/i18n';
import SEO from './components/Seo';
import './page.css';
import Modal from './components/Modal';
import Script from "next/script"
import Footer from './components/Footer';
import AdBanner from './components/AdSense';

export default function Home() {
  const title = i18n.t('metadata.title');
  const description = i18n.t('metadata.description');
  const image = '/caminho-para-imagem.jpg';
  const url = 'https://bibleconvert.com/';

  const [languageSelected, setLanguageSelected] = useState(i18n.language);
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState('');
  const [descriptionModal, setDescriptionModal] = useState('');

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

  return (
    <div className="flex flex-col min-h-screen">
     <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="ga-tag" strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9466959895851189`}
        strategy="lazyOnload"
        crossOrigin="anonymous"
      />
      {/* <AdBanner data-ad-slot="7434970023"
        data-ad-format="auto"
        data-full-width-responsive="true" /> */}
      <meta name="google-site-verification" content="dkLg9GAqawiLt719kp-J_bkbbackWV8rJFMZMrH9Tl4" />
      <SEO title={title} description={description} image={image} url={url} />
      <Header handleLanguageSelected={handleLanguageSelected} languageSelected={languageSelected} />
      <main className="flex flex-grow p-2 main-container">
        <SidebarMenu />
        <Converter handleQuoteSelected={(vers, desc) => handleModal(vers, desc)} />
        {showModal && <Modal title={titleModal} description={descriptionModal} onClose={handleModalClose}></Modal>}
      </main>
      <Footer />
    </div>
  );
}