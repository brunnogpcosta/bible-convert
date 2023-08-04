import { i18n } from '@/app/translate/i18n';
import React, { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation'
import './style.css'

interface ISidebarMenu {
  itemSelected?: string;
  handleItemSelected?: (item: string) => void;
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
    keys: ['fathom', 'cubit', 'finger', 'span']
  },
];

data.sort();

const SidebarMenu: React.FC<ISidebarMenu> = () => {
  const searchParams = useSearchParams()
  const router = useRouter();

  const selectedValue = searchParams?.get('base') || ''

  
  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // State to manage dropdown visibility
  const [showDropdown, setShowDropdown] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleRoute = (value: string) =>{
    router.push(`?base=${value}&inverted=${false}`);
  }

  return (
    <nav className="text-red-600 bg-red-200 rounded-lg pb-5 mr-4 sidebar-container">
      {/* Display dropdown on mobile */}
      <div className="block sm:hidden">
        <div
          className={`font-bold mb-2 p-2 bg-red-300 rounded-t-lg rounded-t-r`}
          onClick={toggleDropdown}
        >
          Menu
        </div>
        <div className="ml-4 mr-4 mt-4">
          <select
            className="p-2 border rounded-md cursor-pointer w-full focus:ring focus:ring-red-600 focus:outline-none"
            onChange={(event) => handleRoute(event.target.value)}
            value={selectedValue}
          >
            <option value={''}>{i18n.t('outputs.fullName.empty')}</option>
            {data.flatMap((category, categoryIndex) =>
              category.keys.map((key, keyIndex) => (
                <option
                  className="cursor-pointer"
                  key={`${categoryIndex}-${keyIndex}`}
                  value={key}
                  selected={key === selectedValue} 
                >
                  {capitalizeFirstLetter(i18n.t('units.' + key))}
                </option>
              ))
            )}
          </select>
        </div>

      </div>

      {/* Display sidebar menu on larger screens */}
      <div className="hidden sm:block">
        {data.map((category, index) => (
          <div key={index}>
            <div className={`font-bold mb-2 p-2 bg-red-300 ${index === 0 ? 'rounded-t-lg rounded-t-r' : ''}`}>
              {capitalizeFirstLetter(i18n.t('titles.measurements.' + category.type))}
            </div>
            <ul className="ml-4">
              {category.keys.map((key, keyIndex) => (
                  <li
                    className="cursor-pointer mb-2"
                    key={keyIndex}
                    onClick={()=>handleRoute(key)}
                  >
                    {capitalizeFirstLetter(i18n.t('units.' + key))}
                  </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default SidebarMenu;
