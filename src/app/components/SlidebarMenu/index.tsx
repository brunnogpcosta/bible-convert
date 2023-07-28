"use client"
import { i18n } from '@/app/translate/i18n';
import React, { useState } from 'react';


interface ISidebarMenu {
  itemSelected: string;
  handleItemSelected: (item: string) => void;
}

const data = [
  {
    type: 'weight',
    keys: ['pound', 'bekah', 'shekel', 'talent']
  },
  {
    type: 'volume',
    keys: ['bath', 'kor', 'ephah', 'gomer', 'hin', 'letech', 'log']
  },
  {
    type: 'length',
    keys: ['fathom', 'cubit', 'finger','span']
  },
];

data.sort

const SidebarMenu: React.FC<ISidebarMenu> = ({ itemSelected, handleItemSelected }) => {
  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


  return (
    <nav className="w-60 text-red-600 bg-red-200 rounded-lg pb-5 mr-4">
      {data.map((category, index) => (
        <div className="mb-4" key={index}>
          {index === 0 ? <div className="font-bold mb-2 p-2 bg-red-300 rounded-t-lg rounded-t-r">
            {capitalizeFirstLetter(i18n.t('titles.measurements.' + category.type))}
          </div> : <div className="font-bold mb-2 p-2 bg-red-300">
            {capitalizeFirstLetter(i18n.t('titles.measurements.' + category.type))}
          </div>}
          <ul className="ml-4">
            {category.keys.map((key, keyIndex) => (
              <li
                className="cursor-pointer"
                key={keyIndex}
                onClick={() => handleItemSelected(key)}
              >
                {capitalizeFirstLetter(i18n.t('units.' + key))}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default SidebarMenu;
