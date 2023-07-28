"use client"
import { i18n } from '@/app/translate/i18n';
import React, { useEffect, useState } from 'react';
import './style.css'

interface IConverter {
    itemSelected: string
}



const Converter: React.FC<IConverter> = ({ itemSelected }) => {
    const [currencyValue, setCurrencyValue] = useState(0)
    const [resultValue, setResultValue] = useState(0)


// base always grams / liters /meters
const config = [
    {
        key: 'pound',
        value: 571.2,
        outputs: ['grams', 'kilos'],
        quotes: [
            `${i18n.t('bible.john')} 12:3`,
            `${i18n.t('bible.leviticus')} 19:36`,
            `${i18n.t('bible.proverbs')} 11:1`,
            `${i18n.t('bible.proverbs')} 25:13`,
            `${i18n.t('bible.proverbs')} 16:11`,
            `${i18n.t('bible.proverbs')} 20:23`
        ]
    },
    {
        key: 'bekah',
        value: 6,
        outputs: ['grams', 'kilos'],
        quotes: [
            `${i18n.t('bible.exodus')} 38:26`
        ]
    },
    {
        key: 'shekel',
        value: 11.4,
        outputs: ['grams', 'kilos'],
        quotes: [
            `${i18n.t('bible.exodus')} 38:26`,
            `${i18n.t('bible.numbers')} 3:47`,
            `${i18n.t('bible.exodus')} 30:24`,
            `${i18n.t('bible.leviticus')} 27:25`,
            `${i18n.t('bible.exodus')} 30:13`
        ]
    },
    {
        key: 'talent',
        value: 34.272,
        outputs: ['grams', 'kilos'],
        quotes: [
            `${i18n.t('bible.matthew')} 25:28`,
            `${i18n.t('bible.1Chronicles')} 29:7`,
            `${i18n.t('bible.exodus')} 38:24`,
            `${i18n.t('bible.exodus')} 25:39`,
            `${i18n.t('bible.1Kings')} 9:28`
        ]
    },
    {
        key: 'bath',
        value: 20.82,
        outputs: ['liters', 'milliliters'],
        quotes: [
            `${i18n.t('bible.ezekiel')} 45:10`,
            `${i18n.t('bible.ezekiel')} 45:14`,
            `${i18n.t('bible.isaiah')} 5:10`
        ]
    },
    {
        key: 'kor',
        value: 208.2,
        outputs: ['liters', 'milliliters'],
        quotes: [
            `${i18n.t('bible.1Kings')} 5:11`
        ]
    },
    {
        key: 'ephah',
        value: 17.62,
        outputs: ['liters', 'milliliters'],
        quotes: [
            `${i18n.t('bible.leviticus')} 19:36`
        ]
    },
    {
        key: 'gomer',
        value: 1.76,
        outputs: ['liters', 'milliliters'],
        quotes: [
            `${i18n.t('bible.exodus')} 16:16`
        ]
    },
    {
        key: 'hin',
        value: 3.47,
        outputs: ['liters', 'milliliters'],
        quotes: [
            `${i18n.t('bible.leviticus')} 19:36`
        ]
    },
    {
        key: 'letech',
        value: 88.1,
        outputs: ['liters', 'milliliters'],
        quotes: [
            `${i18n.t('bible.hosea')} 3:2`
        ]
    },
    {
        key: 'log',
        value: 0.29,
        outputs: ['liters', 'milliliters'],
        quotes: [
            `${i18n.t('bible.leviticus')} 14:10`
        ]
    },
    {
        key: 'fathom',
        value: 1.80,
        outputs: ['centimeters', 'meters'],
        quotes: [
            `${i18n.t('bible.ezekiel')} 40:5`
        ]
    },
    {
        key: 'cubit',
        value: 0.0444,
        outputs: ['centimeters', 'meters'],
        quotes: [
            `${i18n.t('bible.genesis')} 6:15`
        ]
    },
    {
        key: 'finger',
        value: 0.018,
        outputs: ['centimeters', 'meters'],
        quotes: [
            `${i18n.t('bible.genesis')} 52:21`
        ]
    },
    {
        key: 'span',
        value: 0.222,
        outputs: ['centimeters', 'meters'],
        quotes: [
            `${i18n.t('bible.jeremiah')} 28:16`
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
                    <h2 className="font-bold mb-2 p-2 bg-red-300 rounded-t-lg rounded-t-r">{capitalizeFirstLetter(i18n.t('units.' + itemSelected))}</h2>

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
                                <option value=''>{i18n.t('outputs.fullName.empty')}</option>
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
                            <li key={index}>- {quote}</li>
                        ))}
                    </ul>
                </div> :
                <div className="w-2/5 bg-red-200 rounded-lg text-red-600 converter-container">
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
