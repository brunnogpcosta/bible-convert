"use client"
import React from 'react';
import { i18n } from '../../translate/i18n'

interface IHeader {
  languageSelected?: string;
  handleLanguageSelected: (item: string) => void;
}

const Header: React.FC<IHeader> = ({ handleLanguageSelected, languageSelected}) => {
  return (
    <header className="flex items-center justify-between bg-red-500 px-4 py-3">
      {/* Logo
      <div>
        <img src="/path/to/logo.png" alt="Logo" className="w-10 h-10" />
      </div> */}

      {/* Nome do site */}
      <div className="text-white text-lg font-bold">
        BibleConvert
      </div>

      <div className="text-white text-lg font-bold">
        {i18n.t('titles.app')}
      </div>

      {/* Botões de bandeira */
        /*<a href="https://www.flaticon.com/free-icons/brazil" title="brazil icons">Brazil icons created by Freepik - Flaticon</a>*/
        /*<a href="https://www.flaticon.com/free-icons/usa" title="usa icons">Usa icons created by GeekClick - Flaticon</a>*/
      }
      <div className="flex space-x-2">
        <button onClick={() => handleLanguageSelected('pt-BR')} className={languageSelected === 'pt-BR' ? 'border border-white rounded-3xl' : ''}>
          <img src="../../brazil.png" alt="Bandeira Brasil" className="w-8 h-8" width={100} height={100} />
        </button>
        <button onClick={() => handleLanguageSelected('en')} className={languageSelected === 'en' ? 'border border-white rounded-3xl' : ''}>
          <img src="../../usa.png" alt="Bandeira EUA" className="w-8 h-8" width={100} height={100} />
        </button>
      </div>
    </header>
  );
};

export default Header;
