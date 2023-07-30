"use client"
import React from 'react';
import { i18n } from '../../translate/i18n'
import './style.css'

interface IHeader {
  languageSelected?: string;
  handleLanguageSelected: (item: string) => void;
}

const Header: React.FC<IHeader> = ({ handleLanguageSelected, languageSelected }) => {
  return (
    <header className="bg-red-500 px-4 py-3">
      <div className="flex-container">
        {/* Nome do site */}
        <div className="site-name text-white text-lg font-bold">BibleConvert</div>

        <div className="title text-white text-lg font-bold">{i18n.t('titles.app')}</div>

        {/* Botões de bandeira */}
        <div className="language-buttons">
          <button
            onClick={() => handleLanguageSelected('pt-BR')}
            className={languageSelected === 'pt-BR' ? 'border-2 border-white rounded-3xl mr-1' : ' mr-1'}
          >
            <img src="../../brazil.png" alt="Bandeira Brasil" className="w-8 h-8" />
          </button>
          <button
            onClick={() => handleLanguageSelected('en')}
            className={languageSelected === 'en' ? 'border-2 border-white rounded-3xl' : ''}
          >
            <img src="../../usa.png" alt="Bandeira EUA" className="w-8 h-8" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
