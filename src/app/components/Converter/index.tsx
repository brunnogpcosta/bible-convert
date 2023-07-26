/* ./components/Converter.tsx */

import React from 'react';

interface IConverter {
    itemSelected: string
}


const Converter: React.FC<IConverter> = ({ itemSelected }) => {
    return (
        <>
            {itemSelected ?
                <div className="w-2/5 bg-red-200 rounded-lg text-red-600 ">
                    <h2 className="font-bold mb-2 p-2 bg-red-300 rounded-t-lg rounded-t-r">{itemSelected}</h2>

                    <div className="p-4">
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Valor a ser convertido</label>
                            <input
                                type="number"
                                className="block w-full p-2 border rounded focus:ring focus:ring-red-600 focus:outline-none"
                                defaultValue={1}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Unidade de medida</label>
                            <select
                                className="block w-full p-2 border rounded focus:ring focus:ring-red-600 focus:outline-none"
                            >
                                <option value="opcao1">Opção 1</option>
                                <option value="opcao2">Opção 2</option>
                                <option value="opcao3">Opção 3</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Resposta</label>
                            <input
                                type="text"
                                readOnly
                                defaultValue={25 + ' kg'}
                                className="block w-full p-8 border rounded bg-gray-100 focus:outline-none text-center text-xl"
                            />
                        </div>
                    </div>
                    <h2 className="font-bold mb-2 p-2 bg-red-300">Passagens bíblicas referências</h2>
                    <ul className="p-4">
                        <li>Passagem 1</li>
                        <li>Passagem 2</li>
                        <li>Passagem 3</li>
                    </ul>
                </div> :
                <div className="w-2/5 bg-red-200 rounded-lg text-red-600 ">
                    <h2 className="font-bold mb-2 p-2 bg-red-300 rounded-t-lg rounded-t-r">Conversor de medidas</h2>

                    <div className="p-4 flex h-5/6 justify-center items-center">
                        <h2 className="">{'<--'} Escolha uma medida no menu ao lado</h2>
                    </div>
                </div>
            }
        </>
    );
};

export default Converter;
