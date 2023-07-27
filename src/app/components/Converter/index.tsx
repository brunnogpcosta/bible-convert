"use client"
import { i18n } from '@/app/translate/i18n';
import React, { useEffect, useState } from 'react';

interface IConverter {
    itemSelected: string
}

// base always grams / liters /meters
const config = [
    {
        key: 'pound',
        value: 571.2,
        outputs: ['grams', 'kilos'],
        quotes: [
            'João 12:3'
        ]
    },
    {
        key: 'scholarship',
        value: 6,
        outputs: ['grams', 'kilos'],
        quotes: [
            'Êxodo 38:26'
        ]
    },
    {
        key: 'shekel',
        value: 11.4,
        outputs: ['grams', 'kilos'],
        quotes: [
         'Êxodo 38:26',
         'Números 3:47',
         'Êxodo 30:24',
         'Levítico 27:25',
         'Êxodo 30:13'
        ]
    },
    {
        key: 'talent',
        value: 34.272,
        outputs: ['grams', 'kilos'],
        quotes: [
            // Passagens bíblicas relacionadas a "talent" aqui
        ]
    },
    {
        key: 'kor',
        value: 208.2,
        outputs: ['liters', 'milliliters'],
        quotes: [
            // Passagens bíblicas relacionadas a "kor" aqui
        ]
    },
    {
        key: 'ephah',
        value: 17.62,
        outputs: ['liters', 'milliliters'],
        quotes: [
            // Passagens bíblicas relacionadas a "ephah" aqui
        ]
    },
    {
        key: 'gomer',
        value: 1.76,
        outputs: ['liters', 'milliliters'],
        quotes: [
            // Passagens bíblicas relacionadas a "gomer" aqui
        ]
    },
    {
        key: 'him',
        value: 3.47,
        outputs: ['liters', 'milliliters'],
        quotes: [
            // Passagens bíblicas relacionadas a "him" aqui
        ]
    },
    {
        key: 'letech',
        value: 88.1,
        outputs: ['liters', 'milliliters'],
        quotes: [
            // Passagens bíblicas relacionadas a "letech" aqui
        ]
    },
    {
        key: 'log',
        value: 0.29,
        outputs: ['liters', 'milliliters'],
        quotes: [
            // Passagens bíblicas relacionadas a "log" aqui
        ]
    },
    {
        key: 'fathom',
        value: 1.80,
        outputs: ['centimeters', 'meters'],
        quotes: [
            "Ezekiel 40:5"
        ]
    },
    {
        key: 'cubit',
        value: 0.0444,
        outputs: ['centimeters', 'meters'],
        quotes: [
            "Genesis 6:15"
        ]
    },
    {
        key: 'finger',
        value: 0.018,
        outputs: ['centimeters', 'meters'],
        quotes: [
            // Passagens bíblicas relacionadas a "finger" aqui
        ]
    },
    {
        key: 'handbreadth',
        value: 0.222,
        outputs: ['centimeters', 'meters'],
        quotes: [
            // Passagens bíblicas relacionadas a "handbreadth" aqui
        ]
    }
];


const Converter: React.FC<IConverter> = ({ itemSelected }) => {
    const [currencyValue, setCurrencyValue] = useState(0)
    const [resultValue, setResultValue] = useState(0)


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
    }, [currencyUnity, currencyValue, currencyUnityAbb]);

    useEffect(() => {
        console.log('Mudou')
        setResultValue(0)
        setCurrencyValue(0)
        setCurrencyUnity('')
        setCurrencyUnityAbb('')
    }, [itemSelected]);

    return (
        <>
            {itemSelected ?
                <div className="w-2/5 bg-red-200 rounded-lg text-red-600 ">
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
                            <li>- {quote}</li>
                        ))}
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
