/* ./components/Converter.tsx */

import { i18n } from '@/app/translate/i18n';
import React from 'react';

interface IConverter {
    itemSelected: string
}

// base always gramos
const config = [
    {
        key: 'Arratel',
        value: 571.2,
    }
]


const Converter: React.FC<IConverter> = ({ itemSelected }) => {
    const capitalizeFirstLetter = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    return (
        <>
            {itemSelected ?
                <div className="w-2/5 bg-red-200 rounded-lg text-red-600 ">
                    <h2 className="font-bold mb-2 p-2 bg-red-300 rounded-t-lg rounded-t-r">{capitalizeFirstLetter(i18n.t('units.' + itemSelected))}</h2>

                    <div className="p-4">
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">{i18n.t('labels.converter.value')}</label>
                            <input
                                type="number"
                                className="block w-full p-2 border rounded focus:ring focus:ring-red-600 focus:outline-none"
                                defaultValue={1}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">{i18n.t('labels.converter.unity')}</label>
                            <select
                                className="block w-full p-2 border rounded focus:ring focus:ring-red-600 focus:outline-none"
                            >
                                <option value="opcao1">Opção 1</option>
                                <option value="opcao2">Opção 2</option>
                                <option value="opcao3">Opção 3</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">{i18n.t('labels.converter.result')}</label>
                            <input
                                type="text"
                                readOnly
                                defaultValue={25 + ' kg'}
                                className="block w-full p-8 border rounded bg-gray-100 focus:outline-none text-center text-xl"
                            />
                        </div>
                    </div>
                    <h2 className="font-bold mb-2 p-2 bg-red-300">{i18n.t('titles.converter.last')}</h2>
                    <ul className="p-4">
                        <li>Passagem 1</li>
                        <li>Passagem 2</li>
                        <li>Passagem 3</li>
                    </ul>
                </div> :
                <div className="w-2/5 bg-red-200 rounded-lg text-red-600 ">
                    <h2 className="font-bold mb-2 p-2 bg-red-300 rounded-t-lg rounded-t-r">{i18n.t('titles.converter.first')}</h2>

                    <div className="p-4 flex h-5/6 justify-center items-center text-center">
                        <h2 className="">{'<--'} {i18n.t('titles.converter.select')}</h2>
                    </div>
                </div>
            }
        </>
    );
};

export default Converter;
