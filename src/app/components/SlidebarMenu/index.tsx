"use client"
import React, { useState } from 'react';


interface ISidebarMenu{
  itemSelected: string;
  handleItemSelected: (item: string) => void; 
}

const data = [
  {
    type: 'Massa',
    keys: ['Beca', 'Siclo']
  },
  {
    type: 'Volume',
    keys: ['Bato', 'Logue']
  },
  {
    type: 'Comprimento',
    keys: ['Dedo', 'Palmo']
  },
];

const SidebarMenu: React.FC<ISidebarMenu> = ({ itemSelected, handleItemSelected }) => {
  return (
    <nav className="w-60 text-red-600 bg-red-200 rounded-lg pb-5 mr-4">
      {data.map((category, index) => (
        <div className="mb-4" key={index}>
          {index === 0 ? <div className="font-bold mb-2 p-2 bg-red-300 rounded-t-lg rounded-t-r">
            {category.type}
          </div> : <div className="font-bold mb-2 p-2 bg-red-300">
            {category.type}
          </div>}
          <ul className="ml-4">
            {category.keys.map((key, keyIndex) => (
              <li
                className="cursor-pointer"
                key={keyIndex}
                onClick={() => handleItemSelected(key)}
              >
                {key}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default SidebarMenu;
