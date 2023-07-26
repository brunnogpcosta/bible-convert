import React from 'react';

const SidebarMenu: React.FC = () => {
  return (
    <nav className="w-60 text-red-600 bg-red-200 rounded-lg pb-5 mr-4">
      <div className="mb-4">
        <div className="font-bold mb-2 p-2 bg-red-300 rounded-t-lg rounded-t-r">Massa</div>
        <ul className="ml-4">
          <li className="cursor-pointer">Beca</li>
          <li className="cursor-pointer">Siclo</li>
        </ul>
      </div>
      <div className="mb-4">
        <div className="font-bold mb-2 p-2 bg-red-300">Volume</div>
        <ul className="ml-4">
          <li className="cursor-pointer">Bato</li>
          <li className="cursor-pointer">Logue</li>
        </ul>
      </div>
      <div>
        <div className="font-bold mb-2  p-2 bg-red-300">Comprimento</div>
        <ul className="ml-4">
          <li className="cursor-pointer">Dedo</li>
          <li className="cursor-pointer">Palmo</li>
        </ul>
      </div>
    </nav>
  );
};

export default SidebarMenu;
