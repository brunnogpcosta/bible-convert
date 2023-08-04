"use client"
import { i18n } from '@/app/translate/i18n';
import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css'

interface IConverter {
    itemSelected?: string
    handleQuoteSelected: (title: string, description: string) => void;
}



const Converter: React.FC<IConverter> = ({ handleQuoteSelected }) => {
    const searchParams = useSearchParams()
    const router = useRouter();
    const selectedValue = searchParams?.get('base') || ''
    const selectedInverted = searchParams?.get('inverted') === '' ? false : searchParams?.get('inverted') === 'true' ? true : false;
    const selectedOutput = searchParams?.get('to') || ''
    const selectedInput = searchParams?.get('from') || ''
    const [querySearch, setQuerySearch] = useState(selectedValue)
    const [currencyUnityOutput, setCurrencyUnityOutput] = useState(selectedOutput)
    const [currencyUnityInput, setCurrencyUnityInput] = useState(selectedInput)
    const [currencyValue, setCurrencyValue] = useState('0');
    const [resultValue, setResultValue] = useState(0)
    const [inverted, setInverted] = useState(selectedInverted);



    const handleInvert = () => {
        router.push(`?base=${selectedValue}&inverted=${!inverted}`);
    };


    const handleRoute = (value: string) => {
        if (!inverted) router.push(`?base=${selectedValue}&inverted=${inverted}&to=${value}`);
        else router.push(`?base=${selectedValue}&inverted=${inverted}&from=${value}`);
    }

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

    const selectedConfig = config.find((item) => item.key === querySearch);
    const [currencyUnityAbb, setCurrencyUnityAbb] = useState('')


    const capitalizeFirstLetter = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const handleUnityOutput = (value: string) => {
        handleRoute(value)
        setCurrencyUnityOutput(value)
        if (value !== 'empty') setCurrencyUnityAbb(i18n.t('outputs.abb.' + value))
    }

    const handleUnityInput = (value: string) => {
        handleRoute(value)
        setCurrencyUnityInput(value)
        if (value !== 'empty') setCurrencyUnityAbb(i18n.t('outputs.abb.' + value))
    }

    const toRounded = (number: number) => {
        return Math.floor(number * 100) / 100;
    }

    const calcResult = () => {
        const base = (selectedConfig?.value ?? 0)
        const currencyValueFloat = parseFloat(currencyValue)

        if (!inverted) {
            if (currencyUnityOutput === 'grams') {
                const result = currencyValueFloat * base
                setResultValue(toRounded(result))
            }

            if (currencyUnityOutput === 'kilos') {
                const result = currencyValueFloat * base / 1000
                setResultValue(toRounded(result))
            }

            if (currencyUnityOutput === 'liters') {
                const result = currencyValueFloat * base
                setResultValue(toRounded(result))
            }

            if (currencyUnityOutput === 'milliliters') {
                const result = currencyValueFloat * base * 1000
                setResultValue(toRounded(result))
            }

            if (currencyUnityOutput === 'centimeters') {
                const result = currencyValueFloat * base * 100
                setResultValue(toRounded(result))
            }

            if (currencyUnityOutput === 'meters') {
                const result = currencyValueFloat * base
                setResultValue(toRounded(result))
            }
        } else {
            if (currencyUnityInput === 'grams') {
                const result = currencyValueFloat / base;
                setResultValue(toRounded(result));
            }

            if (currencyUnityInput === 'kilos') {
                const result = (currencyValueFloat * 1000) / base;
                setResultValue(toRounded(result));
            }

            if (currencyUnityInput === 'liters') {
                const result = currencyValueFloat / base;
                setResultValue(toRounded(result));
            }

            if (currencyUnityInput === 'milliliters') {
                const result = currencyValueFloat / (base * 1000);
                setResultValue(toRounded(result));
            }

            if (currencyUnityInput === 'centimeters') {
                const result = currencyValueFloat / (base * 100);
                setResultValue(toRounded(result));
            }

            if (currencyUnityInput === 'meters') {
                const result = currencyValueFloat / base;
                setResultValue(toRounded(result));
            }
        }


    }

    useEffect(() => {
        calcResult()
    }, [currencyUnityOutput, currencyUnityInput, currencyValue, currencyUnityAbb, calcResult]);

    useEffect(() => {
        setResultValue(0)
        setCurrencyValue('0')
        setCurrencyUnityOutput('')
        setCurrencyUnityInput('')
        setCurrencyUnityAbb('')
    }, [inverted]);

    useEffect(() => {
        setQuerySearch(selectedValue)
        // setCurrencyUnityOutput(selectedOutput)
        // setCurrencyUnityInput(selectedInput)
        setInverted(selectedInverted);
    }, [selectedValue, selectedInverted]);


    return (
        <>
            {querySearch ?
                <div className="w-2/5 bg-red-200 rounded-lg text-red-600 converter-container">
                    <div className='flex-col mb-2 p-2 bg-red-300 rounded-t-lg rounded-t-r'>
                        <div className="mobile-title">
                            <div className='flex justify-between'>
                                {!inverted ? (
                                    <>
                                        <div className='flex justify-between'>
                                            <h2 className='mr-2 font-bold'>{capitalizeFirstLetter(i18n.t('units.' + querySearch))}</h2>
                                            <h2>{'-->'}</h2>
                                            <h2 className='ml-2 font-bold mr-2'>{selectedConfig?.outputs.map(item => i18n.t('outputs.titles.' + item)).join(', ')}</h2>
                                        </div>
                                        <button className='bg-red-400 rounded-lg ' onClick={handleInvert}><i className="fas fa-exchange-alt p-1"></i></button>
                                    </>
                                ) : (
                                    <>
                                        <div className='flex justify-between'>
                                            <h2 className='mr-2 font-bold'>{selectedConfig?.outputs.map(item => i18n.t('outputs.titles.' + item)).join(', ')}</h2>
                                            <h2>{'-->'}</h2>
                                            <h2 className='ml-2 font-bold mr-2'>{capitalizeFirstLetter(i18n.t('units.' + querySearch))}</h2>
                                        </div>
                                        <button className='bg-red-400 rounded-lg' onClick={handleInvert}><i className="fas fa-exchange-alt p-1"></i></button>
                                    </>
                                )}
                            </div>


                            <p>1 {capitalizeFirstLetter(i18n.t('units.' + querySearch))} = {selectedConfig?.value} {i18n.t('outputs.fullName.' + selectedConfig?.outputs[0])}</p>
                        </div>
                    </div>

                    <div className="p-4">

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">{i18n.t('labels.converter.unityInput')}</label>
                            {!inverted ?
                                <select
                                    className="block w-full p-2 border rounded focus:ring focus:ring-red-600 focus:outline-none"
                                    value={i18n.t('units.' + querySearch)}
                                    disabled={!inverted}
                                    onChange={val => handleUnityInput(val.target.value)}
                                >
                                    <option value={i18n.t('units.' + querySearch)}>{capitalizeFirstLetter(i18n.t('units.' + querySearch))} </option>
                                </select>
                                :

                                <select
                                    className="block w-full p-2 border rounded focus:ring focus:ring-red-600 focus:outline-none"
                                    value={currencyUnityInput}
                                    disabled={!inverted}
                                    onChange={val => handleUnityInput(val.target.value)}
                                >
                                    <option value={'empty'}>{i18n.t('outputs.fullName.empty')}</option>

                                    {selectedConfig?.outputs.map((input, index) => (
                                        <option key={index} value={input}>
                                            {capitalizeFirstLetter(i18n.t('outputs.fullName.' + input))}
                                        </option>
                                    ))}

                                </select>


                            }

                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">{i18n.t('labels.converter.value')}</label>
                            <input
                                type="text"
                                className="block w-full p-2 border rounded focus:ring focus:ring-red-600 focus:outline-none"
                                value={currencyValue}
                                onChange={event => {
                                    const inputVal = event.currentTarget.value;
                                    const filteredVal = inputVal.replace(/[^0-9.,]/g, '').replace(/,+/g, ',').replace(',', '.')
                                    setCurrencyValue(filteredVal);
                                }}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">{i18n.t('labels.converter.unity')}</label>

                            {inverted ?
                                <select
                                    className="block w-full p-2 border rounded focus:ring focus:ring-red-600 focus:outline-none"
                                    onChange={val => handleUnityOutput(val.target.value)}
                                    value={i18n.t('units.' + querySearch)}
                                    disabled={inverted}
                                >
                                    <option value={i18n.t('units.' + querySearch)}>{capitalizeFirstLetter(i18n.t('units.' + querySearch))}</option>
                                </select> :
                                <select
                                    className="block w-full p-2 border rounded focus:ring focus:ring-red-600 focus:outline-none"
                                    onChange={val => handleUnityOutput(val.target.value)}
                                    value={currencyUnityOutput}
                                    disabled={inverted}
                                >
                                    <option value={'empty'}>{i18n.t('outputs.fullName.empty')}</option>

                                    {selectedConfig?.outputs.map((output, index) => (
                                        <option key={index} value={output}>
                                            {capitalizeFirstLetter(i18n.t('outputs.fullName.' + output))}
                                        </option>
                                    ))}
                                </select>


                            }


                        </div>


                        <div className="mb-4">
                            {inverted ?
                                (
                                    <label className="block text-sm font-medium mb-1">{i18n.t('labels.converter.result')}
                                        {currencyUnityOutput !== '' && currencyUnityOutput !== 'empty' ? ' ' + i18n.t('outputs.fullName.' + currencyUnityOutput) : ' ' + i18n.t('units.' + querySearch)}</label>
                                ) : (
                                    <label className="block text-sm font-medium mb-1">{i18n.t('labels.converter.result')}
                                        {currencyUnityOutput !== '' && currencyUnityOutput !== 'empty' ? ' ' + i18n.t('outputs.fullName.' + currencyUnityOutput) : ''}</label>
                                )
                            }

                            <input
                                type="text"
                                readOnly
                                value={inverted ? resultValue : resultValue + ' ' + currencyUnityAbb}
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

                    <div className="p-4 mb-2 flex h-5/6 justify-center items-center text-center">
                        <div className='flex-row'>
                            <i className="fas fa-ruler-combined text-2xl"></i>
                            <h2> {i18n.t('titles.converter.select')}</h2>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Converter;
