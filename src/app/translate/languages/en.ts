const messages = {
    en: {
        translations: {
            metadata: {
                title: 'BibleConvert.com - Conversion of Biblical Measurements',
                description: 'Biblical Measurement Converter - Convert weight, volume, and length mentioned in biblical passages to modern units. Simplify your biblical references with accurate conversion of arratel, siclo, cubit, and much more. Explore BibleConvert.com now!'
            },
            titles: {
                app: 'Biblical Measurements Converter',
                measurements: {
                    weight: 'weight',
                    volume: 'volume',
                    length: 'length'
                },
                converter: {
                    first: 'Measurements Converter',
                    select: 'Choose a measurement from the side menu',
                    last: 'Biblical Reference Passages'
                }
            },
            labels: {
                converter: {
                    value: 'Value to be converted',
                    unity: 'Unit of measurement',
                    result: 'Result'
                }
            },
            units: {
                weight: 'weight',
                pound: 'pound',
                bekah: 'bekah',
                shekel: 'shekel',
                talent: 'talent',
                volume: 'volume',
                bath: 'bath',
                kor: 'kor',
                ephah: 'omer',
                gomer: 'gomer',
                hin: 'hin',
                letech: 'letech',
                log: 'log',
                span: 'span',
                stonesThrow: 'stone’s throw',
                bowshot: 'bowshot',
                length: 'length',
                fathom: 'fathom',
                cubit: 'cubit',
                finger: 'finger',
                sabbath: 'sabbath day’s journey'

            },
            outputs: {
                fullName: {
                    empty: 'Select',
                    grams: 'gram(s)',
                    kilos: 'kilo(s)',
                    meters: 'meter(s)',
                    Kilometers: ' Kilometer(s)',
                    liters: 'liter(s)',
                    milliliters: 'milliliter(s)',
                    centimeters: 'centimeter(s)'
                },
                abb: {
                    grams: 'g',
                    kilos: 'kg',
                    meters: 'm',
                    Kilometers: 'km',
                    liters: 'l',
                    milliliters: 'ml',
                    centimeters: 'cm'
                }

            },
            bible: {
                genesis: "Genesis",
                exodus: "Exodus",
                leviticus: "Leviticus",
                numbers: "Numbers",
                deuteronomy: "Deuteronomy",
                joshua: "Joshua",
                judges: "Judges",
                ruth: "Ruth",
                "1Samuel": "1 Samuel",
                "2Samuel": "2 Samuel",
                "1Kings": "1 Kings",
                "2Kings": "2 Kings",
                "1Chronicles": "1 Chronicles",
                "2Chronicles": "2 Chronicles",
                ezra: "Ezra",
                nehemiah: "Nehemiah",
                esther: "Esther",
                job: "Job",
                psalms: "Psalms",
                proverbs: "Proverbs",
                ecclesiastes: "Ecclesiastes",
                songOfSolomon: "Song of Solomon",
                isaiah: "Isaiah",
                jeremiah: "Jeremiah",
                lamentations: "Lamentations",
                ezekiel: "Ezekiel",
                daniel: "Daniel",
                hosea: "Hosea",
                joel: "Joel",
                amos: "Amos",
                obadiah: "Obadiah",
                jonah: "Jonah",
                micah: "Micah",
                nahum: "Nahum",
                habakkuk: "Habakkuk",
                zephaniah: "Zephaniah",
                haggai: "Haggai",
                zechariah: "Zechariah",
                malachi: "Malachi",
                matthew: "Matthew",
                mark: "Mark",
                luke: "Luke",
                john: "John",
                acts: "Acts",
                romans: "Romans",
                "1Corinthians": "1 Corinthians",
                "2Corinthians": "2 Corinthians",
                galatians: "Galatians",
                ephesians: "Ephesians",
                philippians: "Philippians",
                colossians: "Colossians",
                "1Thessalonians": "1 Thessalonians",
                "2Thessalonians": "2 Thessalonians",
                "1Timothy": "1 Timothy",
                "2Timothy": "2 Timothy",
                titus: "Titus",
                philemon: "Philemon",
                hebrews: "Hebrews",
                james: "James",
                "1Peter": "1 Peter",
                "2Peter": "2 Peter",
                "1John": "1 John",
                "2John": "2 John",
                "3John": "3 John",
                jude: "Jude",
                revelation: "Revelation",
                verses: {
                    'john.12.3': 'Mary took a pound of costly perfume made of pure nard, anointed Jesus’s feet, and wiped them[a] with her hair. The house was filled with the fragrance of the perfume.',
                    'leviticus.19.36': 'Use honest scales and honest weights, an honest ephah[a] and an honest hin.[b] I am the Lord your God, who brought you out of Egypt.',
                    'proverbs.11.1': 'A false balance is abomination to the Lord: but a just weight is his delight.',
                    'proverbs.25.13': 'As the cold of snow in the time of harvest, so is a faithful messenger to them that send him: for he refresheth the soul of his masters.',
                    'proverbs.16.11': "A just weight and balance are the Lord's: all the weights of the bag are his work.",
                    'proverbs.20.23': 'Divers weights are an abomination unto the Lord; and a false balance is not good.',
                    'exodus.38.26': 'A bekah for every man, that is, half a shekel, after the shekel of the sanctuary, for every one that went to be numbered, from twenty years old and upward, for six hundred thousand and three thousand and five hundred and fifty men.',
                    'numbers.3.47': 'Thou shalt even take five shekels apiece by the poll, after the shekel of the sanctuary shalt thou take them: (the shekel is twenty gerahs:)',
                    'exodus.30.24': 'And of cassia five hundred shekels, after the shekel of the sanctuary, and of oil olive an hin:',
                    'leviticus.27.25': 'And all thy estimations shall be according to the shekel of the sanctuary: twenty gerahs shall be the shekel.',
                    'exodus.30.13': 'This they shall give, every one that passeth among them that are numbered, half a shekel after the shekel of the sanctuary: (a shekel is twenty gerahs:) an half shekel shall be the offering of the Lord.',
                    'matthew.25.28': 'Take therefore the talent from him, and give it unto him which hath ten talents.',
                    '1Chronicles.29.7': 'And gave for the service of the house of God of gold five thousand talents and ten thousand drams, and of silver ten thousand talents, and of brass eighteen thousand talents, and one hundred thousand talents of iron.',
                    'exodus.38.24': 'All the gold that was occupied for the work in all the work of the holy place, even the gold of the offering, was twenty and nine talents, and seven hundred and thirty shekels, after the shekel of the sanctuary.',
                    'exodus.25.39': 'Of a talent of pure gold shall he make it, with all these vessels.',
                    '1Kings.9.28': 'And they came to Ophir, and fetched from thence gold, four hundred and twenty talents, and brought it to king Solomon.',
                    'ezekiel.45.10': 'Ye shall have just balances, and a just ephah, and a just bath.',
                    'ezekiel.45.14': 'Concerning the ordinance of oil, the bath of oil, ye shall offer the tenth part of a bath out of the cor, which is an homer of ten baths; for ten baths are an homer:',
                    'isaiah.5.10': 'Yea, ten acres of vineyard shall yield one bath, and the seed of an homer shall yield an ephah.',
                    '1Kings.5.11': 'And Solomon gave Hiram twenty thousand measures of wheat for food to his household, and twenty measures of pure oil: thus gave Solomon to Hiram year by year.',
                    'exodus.16.16': 'This is the thing which the Lord hath commanded, Gather of it every man according to his eating, an omer for every man, according to the number of your persons; take ye every man for them which are in his tents.',
                    'hosea.3.2': 'So I bought her to me for fifteen pieces of silver, and for an homer of barley, and an half homer of barley:',
                    'leviticus.14.10': 'And on the eighth day he shall take two he lambs without blemish, and one ewe lamb of the first year without blemish, and three tenth deals of fine flour for a meat offering, mingled with oil, and one log of oil.',
                    'ezekiel.40.5': "And behold a wall on the outside of the house round about, and in the man's hand a measuring reed of six cubits long by the cubit and an hand breadth: so he measured the breadth of the building, one reed; and the height, one reed.",
                    'genesis.6.15': 'And this is the fashion which thou shalt make it of: The length of the ark shall be three hundred cubits, the breadth of it fifty cubits, and the height of it thirty cubits.',
                    'jeremiah.52.21': 'And concerning the pillars, the height of one pillar was eighteen cubits; and a fillet of twelve cubits did compass it; and the thickness thereof was four fingers: it was hollow.',
                    'jeremiah.28.16': 'Therefore thus saith the Lord; Behold, I will cast thee from off the face of the earth: this year thou shalt die, because thou hast taught rebellion against the Lord.'
                }
            }
        }
    }
}


export { messages }