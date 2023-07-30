"use client"
import { i18n } from '@/app/translate/i18n';
import React, { useEffect, useState } from 'react';
import './style.css'

interface IConverter {
    itemSelected: string
    handleQuoteSelected: (title: string, description: string) => void;
}



const Converter: React.FC<IConverter> = ({ itemSelected, handleQuoteSelected }) => {
    const [currencyValue, setCurrencyValue] = useState(0)
    const [resultValue, setResultValue] = useState(0)


    // base always grams / liters /meters
    const config = [
        {
            key: 'pound',
            value: 571.2,
            outputs: ['grams', 'kilos'],
            quotes: [
                { vers: `${i18n.t('bible.john')} 12:3`, desc: `${i18n.t('bible.verses.john_12_3')}` },
            ]
        },
        {
            key: 'bekah',
            value: 5.712,
            outputs: ['grams', 'kilos'],
            quotes: [
                { vers: `${i18n.t('bible.exodus')} 38.26`, desc: `${i18n.t('bible.verses.exodus.38.26')}` }
            ]
        },
        {
            key: 'shekel',
            value: 11.424,
            outputs: ['grams', 'kilos'],
            quotes: [
                { vers: `${i18n.t('bible.exodus')} 38.26`, desc: `${i18n.t('bible.verses.exodus.38.26')}` },
                { vers: `${i18n.t('bible.numbers')} 3.47`, desc: `${i18n.t('bible.verses.numbers.3.47')}` },
                { vers: `${i18n.t('bible.exodus')} 30.24`, desc: `${i18n.t('bible.verses.exodus.30.24')}` },
                { vers: `${i18n.t('bible.leviticus')} 27.25`, desc: `${i18n.t('bible.verses.leviticus.27.25')}` },
                { vers: `${i18n.t('bible.exodus')} 30.13`, desc: `${i18n.t('bible.verses.exodus.30.13')}` }

            ]
        },
        {
            key: 'talent',
            value: 34272.00,
            outputs: ['grams', 'kilos'],
            quotes: [
                { vers: `${i18n.t('bible.matthew')} 25.28`, desc: `${i18n.t('bible.verses.matthew.25.28')}` },
                { vers: `${i18n.t('bible.1Chronicles')} 29.7`, desc: `${i18n.t('bible.verses.1Chronicles.29.7')}` },
                { vers: `${i18n.t('bible.exodus')} 38.24`, desc: `${i18n.t('bible.verses.exodus.38.24')}` },
                { vers: `${i18n.t('bible.exodus')} 25.39`, desc: `${i18n.t('bible.verses.exodus.25.39')}` },
                { vers: `${i18n.t('bible.1Kings')} 9.28`, desc: `${i18n.t('bible.verses.1Kings.9.28')}` }

            ]
        },
        {
            key: 'bath',
            value: 22.7,
            outputs: ['liters', 'milliliters'],
            quotes: [
                { vers: `${i18n.t('bible.ezekiel')} 45.10`, desc: `${i18n.t('bible.verses.ezekiel.45.10')}` },
                { vers: `${i18n.t('bible.ezekiel')} 45.14`, desc: `${i18n.t('bible.verses.ezekiel.45.14')}` },
                { vers: `${i18n.t('bible.isaiah')} 5.10`, desc: `${i18n.t('bible.verses.isaiah.5.10')}` },

            ]
        },
        {
            key: 'kor',
            value: 208.2,
            outputs: ['liters', 'milliliters'],
            quotes: [
                { vers: `${i18n.t('bible.1Kings')} 5:11`, desc: `${i18n.t('bible.verses.1Kings.5.11')}` }
            ]
        },
        {
            key: 'ephah',
            value: 17.62,
            outputs: ['liters', 'milliliters'],
            quotes: [
                { vers: `${i18n.t('bible.leviticus')} 19:36`, desc: `${i18n.t('bible.verses.leviticus.19.36')}` }
            ]
        },
        {
            key: 'gomer',
            value: 1.76,
            outputs: ['liters', 'milliliters'],
            quotes: [
                { vers: `${i18n.t('bible.exodus')} 16:16`, desc: `${i18n.t('bible.verses.exodus.16.16')}` }
            ]
        },
        {
            key: 'hin',
            value: 3.47,
            outputs: ['liters', 'milliliters'],
            quotes: [
                { vers: `${i18n.t('bible.leviticus')} 19:36`, desc: `${i18n.t('bible.verses.leviticus.19.36')}` }
            ]
        },
        {
            key: 'letech',
            value: 88.1,
            outputs: ['liters', 'milliliters'],
            quotes: [
                { vers: `${i18n.t('bible.hosea')} 3:2`, desc: `${i18n.t('bible.verses.hosea.3.2')}` }
            ]
        },
        {
            key: 'log',
            value: 0.29,
            outputs: ['liters', 'milliliters'],
            quotes: [
                { vers: `${i18n.t('bible.leviticus')} 14:10`, desc: `${i18n.t('bible.verses.leviticus.14.10')}` }
            ]
        },
        {
            key: 'fathom',
            value: 1.80,
            outputs: ['meters', 'centimeters'],
            quotes: [
                { vers: `${i18n.t('bible.acts')} 27:28`, desc: `${i18n.t('bible.verses.acts.27.28')}` }
            ]
        },
        {
            key: 'cubit',
            value: 0.45,
            outputs: ['meters', 'centimeters'],
            quotes: [
                { vers: `${i18n.t('bible.genesis')} 6:15`, desc: `${i18n.t('bible.verses.genesis.6.15')}` }
            ]
        },
        {
            key: 'finger',
            value: 0.018,
            outputs: ['meters', 'centimeters'],
            quotes: [
                { vers: `${i18n.t('bible.jeremiah')} 52:21`, desc: `${i18n.t('bible.verses.jeremiah.52.21')}` }
            ]
        },
        {
            key: 'span',
            value: 0.222,
            outputs: ['meters', 'centimeters'],
            quotes: [
                { vers: `${i18n.t('bible.exodus')} 28:16`, desc: `${i18n.t('bible.verses.exodus.28.16')}` }
            ]
        }
    ];

    const selectedConfig = config.find((item) => item.key === itemSelected);
    const [currencyUnity, setCurrencyUnity] = useState('')
    const [currencyUnityAbb, setCurrencyUnityAbb] = useState('')




    const capitalizeFirstLetter = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const handleUnity = (value: string) => {
        setCurrencyUnity(value)
        if (value !== 'empty') setCurrencyUnityAbb(i18n.t('outputs.abb.' + value))
    }

    const toRounded = (number: number) => {

        return Math.floor(number * 100) / 100;
    }

    const calcResult = () => {
        const base = (selectedConfig?.value ?? 0)
        if (currencyUnity === 'grams') {
            const result = currencyValue * base
            setResultValue(toRounded(result))
        }

        if (currencyUnity === 'kilos') {
            const result = currencyValue * base / 1000
            setResultValue(toRounded(result))
        }

        if (currencyUnity === 'liters') {
            const result = currencyValue * base
            setResultValue(toRounded(result))
        }

        if (currencyUnity === 'milliliters') {
            const result = currencyValue * base * 1000
            setResultValue(toRounded(result))
        }

        if (currencyUnity === 'centimeters') {
            const result = currencyValue * base * 100
            setResultValue(toRounded(result))
        }

        if (currencyUnity === 'meters') {
            const result = currencyValue * base
            setResultValue(toRounded(result))
        }

    }

    useEffect(() => {
        calcResult()
    }, [currencyUnity, currencyValue, currencyUnityAbb, calcResult]);

    useEffect(() => {
        setResultValue(0)
        setCurrencyValue(0)
        setCurrencyUnity('')
        setCurrencyUnityAbb('')
    }, [itemSelected]);

    return (
        <>
            {itemSelected ?
                <div className="w-2/5 bg-red-200 rounded-lg text-red-600 converter-container">
                    <div className='flex-col mb-2 p-2 bg-red-300 rounded-t-lg rounded-t-r'>
                        <div className="mobile-title">
                            <h2 className='font-bold'>{capitalizeFirstLetter(i18n.t('units.' + itemSelected))} </h2>
                            <p>1 {capitalizeFirstLetter(i18n.t('units.' + itemSelected))} = {selectedConfig?.value} {i18n.t('outputs.fullName.' + selectedConfig?.outputs[0])}</p>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">{i18n.t('labels.converter.value')}</label>
                            <input
                                type="text"
                                className="block w-full p-2 border rounded focus:ring focus:ring-red-600 focus:outline-none"
                                value={currencyValue}
                                onChange={val => {
                                    const inputVal = Number(val.currentTarget.value);
                                    setCurrencyValue(isNaN(inputVal) ? 0 : inputVal);
                                }}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">{i18n.t('labels.converter.unity')}</label>
                            <select
                                className="block w-full p-2 border rounded focus:ring focus:ring-red-600 focus:outline-none"
                                onChange={val => handleUnity(val.target.value)}
                                value={currencyUnity}
                            >
                                <option value='empty'>{i18n.t('outputs.fullName.empty')}</option>
                                {selectedConfig?.outputs.map((output, index) => (
                                    <option key={index} value={output}>
                                        {capitalizeFirstLetter(i18n.t('outputs.fullName.' + output))}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">{i18n.t('labels.converter.result')}</label>
                            <input
                                type="text"
                                readOnly
                                value={resultValue + ' ' + currencyUnityAbb}
                                className="block w-full p-8 border rounded bg-gray-100 focus:outline-none text-center text-xl"
                            />
                        </div>
                    </div>
                    <h2 className="font-bold mb-2 p-2 bg-red-300">{i18n.t('titles.converter.last')}</h2>
                    <ul className="p-4">
                        {selectedConfig?.quotes.map((quote, index) => (
                            <li className='click-li' onClick={() => handleQuoteSelected(quote.vers, quote.desc)} key={index}>&#10013; {quote.vers}</li>
                        ))}
                    </ul>
                </div> :
                <div className="w-2/5 bg-red-200 rounded-lg text-red-600 converter-container">
                    <h2 className="font-bold mb-2 p-2 bg-red-300 rounded-t-lg rounded-t-r">{i18n.t('titles.converter.first')}</h2>

                    <div className="p-4 flex h-5/6 justify-center items-center text-center">
                        <h2> {i18n.t('titles.converter.select')}</h2>
                    </div>
                </div>
            }
        </>
    );
};

export default Converter;
