import React, { useContext, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ClassesContext from './../../context/classesContext';
import SearchIcon from '@material-ui/icons/Search';

import history from './../../utils/history';
import { useTranslation } from 'react-i18next';
import countryConverter from "i18n-iso-countries";
const options = [
    {
        name: "ex: Wakanda",
        value: undefined
    },
    {
        name: "Afghanistan",
        iso2: "AF",
        value: "AFG",
    },
    {
        name: "Albania",
        iso2: "AL",
        value: "ALB",
    },
    {
        name: "Algeria",
        iso2: "DZ",
        value: "DZA",
    },
    {
        name: "American Samoa",
        iso2: "AS",
        value: "ASM",
    },
    {
        name: "Andorra",
        iso2: "AD",
        value: "AND",
    },
    {
        name: "Angola",
        iso2: "AO",
        value: "AGO",
    },
    {
        name: "Anguilla",
        iso2: "AI",
        value: "AIA",
    },
    {
        name: "Antarctica",
        iso2: "AQ",
        value: "ATA",
    },
    {
        name: "Antigua and Barbuda",
        iso2: "AG",
        value: "ATG",
    },
    {
        name: "Argentina",
        iso2: "AR",
        value: "ARG",
    },
    {
        name: "Armenia",
        iso2: "AM",
        value: "ARM",
    },
    {
        name: "Aruba",
        iso2: "AW",
        value: "ABW",
    },
    {
        name: "Australia",
        iso2: "AU",
        value: "AUS",
    },
    {
        name: "Austria",
        iso2: "AT",
        value: "AUT",
    },
    {
        name: "Azerbaijan",
        iso2: "AZ",
        value: "AZE",
    },
    {
        name: "Bahamas",
        iso2: "BS",
        value: "BHS",
    },
    {
        name: "Bahrain",
        iso2: "BH",
        value: "BHR",
    },
    {
        name: "Bangladesh",
        iso2: "BD",
        value: "BGD",
    },
    {
        name: "Barbados",
        iso2: "BB",
        value: "BRB",
    },
    {
        name: "Belarus",
        iso2: "BY",
        value: "BLR",
    },
    {
        name: "Belgium",
        iso2: "BE",
        value: "BEL",
    },
    {
        name: "Belize",
        iso2: "BZ",
        value: "BLZ",
    },
    {
        name: "Benin",
        iso2: "BJ",
        value: "BEN",
    },
    {
        name: "Bermuda",
        iso2: "BM",
        value: "BMU",
    },
    {
        name: "Bhutan",
        iso2: "BT",
        value: "BTN",
    },
    {
        name: "Bolivia, Plurinational State of",
        iso2: "BO",
        value: "BOL",
    },
    {
        name: "Bonaire, Sint Eustatius and Saba",
        iso2: "BQ",
        value: "BES",
    },
    {
        name: "Bosnia and Herzegovina",
        iso2: "BA",
        value: "BIH",
    },
    {
        name: "Botswana",
        iso2: "BW",
        value: "BWA",
    },
    {
        name: "Bouvet Island",
        iso2: "BV",
        value: "BVT",
    },
    {
        name: "Brazil",
        iso2: "BR",
        iso3: "BRA"
    },
    {
        name: "British Indian Ocean Territory",
        iso2: "IO",
        value: "IOT"
    },
    {
        name: "Bulgaria",
        iso2: "BG",
        value: "BGR",
    },
    {
        name: "Burkina Faso",
        iso2: "BF",
        value: "BFA",
    },
    {
        name: "Burundi",
        iso2: "BI",
        value: "BDI",
    },
    {
        name: "Cambodia",
        iso2: "KH",
        value: "KHM",
    },
    {
        name: "Cameroon",
        iso2: "CM",
        value: "CMR",
    },
    {
        name: "Canada",
        iso2: "CA",
        value: "CAN",
    },
    {
        name: "Cape Verde",
        iso2: "CV",
        value: "CPV",
    },
    {
        name: "Cayman Islands",
        iso2: "KY",
        value: "CYM",
    },
    {
        name: "Central African Republic",
        iso2: "CF",
        value: "CAF",
    },
    {
        name: "Chad",
        iso2: "TD",
        value: "TCD",
    },
    {
        name: "Chile",
        iso2: "CL",
        value: "CHL",
    },
    {
        name: "China",
        iso2: "CN",
        value: "CHN",
    },
    {
        name: "Christmas Island",
        iso2: "CX",
        value: "CXR",
    },
    {
        name: "Comoros",
        iso2: "KM",
        value: "COM",
    },
    {
        name: "Congo",
        iso2: "CG",
        value: "COG",
    },
    {
        name: "Congo, the Democratic Republic of the",
        iso2: "CD",
        value: "COD",
    },
    {
        name: "Cook Islands",
        iso2: "CK",
        value: "COK",
    },
    {
        name: "Costa Rica",
        iso2: "CR",
        value: "CRI",
    },
    {
        name: "Côte d'Ivoire",
        iso2: "CI",
        value: "CIV",
    },
    {
        name: "Croatia",
        iso2: "HR",
        value: "HRV",
    },
    {
        name: "Cuba",
        iso2: "CU",
        value: "CUB",
    },
    {
        name: "Curaçao",
        iso2: "CW",
        value: "CUW",
    },
    {
        name: "Cyprus",
        iso2: "CY",
        value: "CYP",
    },
    {
        name: "Czech Republic",
        iso2: "CZ",
        value: "CZE",
    },
    {
        name: "Denmark",
        iso2: "DK",
        value: "DNK",
    },
    {
        name: "Djibouti",
        iso2: "DJ",
        value: "DJI",
    },
    {
        name: "Dominica",
        iso2: "DM",
        value: "DMA",
    },
    {
        name: "Dominican Republic",
        iso2: "DO",
        value: "DOM",
    },
    {
        name: "Ecuador",
        iso2: "EC",
        value: "ECU",
    },
    {
        name: "Egypt",
        iso2: "EG",
        value: "EGY",
    },
    {
        name: "El Salvador",
        iso2: "SV",
        value: "SLV",
    },
    {
        name: "Equatorial Guinea",
        iso2: "GQ",
        value: "GNQ",
    },
    {
        name: "Eritrea",
        iso2: "ER",
        value: "ERI",
    },
    {
        name: "Estonia",
        iso2: "EE",
        value: "EST",
    },
    {
        name: "Ethiopia",
        iso2: "ET",
        value: "ETH",
    },
    {
        name: "Falkland Islands (Malvinas)",
        iso2: "FK",
        value: "FLK",
    },
    {
        name: "Faroe Islands",
        iso2: "FO",
        value: "FRO",
    },
    {
        name: "Fiji",
        iso2: "FJ",
        value: "FJI",
    },
    {
        name: "Finland",
        iso2: "FI",
        value: "FIN",
    },
    {
        name: "France",
        iso2: "FR",
        value: "FRA",
    },
    {
        name: "French Guiana",
        iso2: "GF",
        value: "GUF",
    },
    {
        name: "French Polynesia",
        iso2: "PF",
        value: "PYF",
    },
    {
        name: "French Southern Territories",
        iso2: "TF",
        value: "ATF",
    },
    {
        name: "Gambia",
        iso2: "GM",
        value: "GMB",
    },
    {
        name: "Georgia",
        iso2: "GE",
        value: "GEO",
    },
    {
        name: "Germany",
        iso2: "DE",
        value: "DEU",
    },
    {
        name: "Ghana",
        iso2: "GH",
        value: "GHA",
    },
    {
        name: "Gibraltar",
        iso2: "GI",
        value: "GIB",
    },
    {
        name: "Greece",
        iso2: "GR",
        value: "GRC",
    },
    {
        name: "Greenland",
        iso2: "GL",
        value: "GRL",
    },
    {
        name: "Grenada",
        iso2: "GD",
        value: "GRD",
    },
    {
        name: "Guadeloupe",
        iso2: "GP",
        value: "GLP",
    },
    {
        name: "Guam",
        iso2: "GU",
        value: "GUM",
    },
    {
        name: "Guatemala",
        iso2: "GT",
        value: "GTM",
    },
    {
        name: "Guernsey",
        iso2: "GG",
        value: "GGY",
    },
    {
        name: "Guinea",
        iso2: "GN",
        value: "GIN",
    },
    {
        name: "Guinea-Bissau",
        iso2: "GW",
        value: "GNB",
    },
    {
        name: "Guyana",
        iso2: "GY",
        value: "GUY",
    },
    {
        name: "Haiti",
        iso2: "HT",
        value: "HTI",
    },
    {
        name: "Heard Island and McDonald Islands",
        iso2: "HM",
        value: "HMD"
    },
    {
        name: "Holy See (Vatican City State)",
        iso2: "VA",
        value: "VAT",
    },
    {
        name: "Honduras",
        iso2: "HN",
        value: "HND",
    },
    {
        name: "Hong Kong",
        iso2: "HK",
        value: "HKG",
    },
    {
        name: "Hungary",
        iso2: "HU",
        value: "HUN",
    },
    {
        name: "Iceland",
        iso2: "IS",
        value: "ISL",
    },
    {
        name: "India",
        iso2: "IN",
        value: "IND",
    },
    {
        name: "Indonesia",
        iso2: "ID",
        value: "IDN",
    },
    {
        name: "Iran, Islamic Republic of",
        iso2: "IR",
        value: "IRN",
    },
    {
        name: "Iraq",
        iso2: "IQ",
        value: "IRQ",
    },
    {
        name: "Ireland",
        iso2: "IE",
        value: "IRL",
    },
    {
        name: "Isle of Man",
        iso2: "IM",
        value: "IMN",
    },
    {
        name: "Israel",
        iso2: "IL",
        value: "ISR",
    },
    {
        name: "Italy",
        iso2: "IT",
        value: "ITA",
    },
    {
        name: "Jamaica",
        iso2: "JM",
        value: "JAM",
    },
    {
        name: "Japan",
        iso2: "JP",
        value: "JPN",
    },
    {
        name: "Jersey",
        iso2: "JE",
        value: "JEY",
    },
    {
        name: "Jordan",
        iso2: "JO",
        value: "JOR",
    },
    {
        name: "Kazakhstan",
        iso2: "KZ",
        value: "KAZ",
    },
    {
        name: "Kenya",
        iso2: "KE",
        value: "KEN",
    },
    {
        name: "Kiribati",
        iso2: "KI",
        value: "KIR",
    },
    {
        name: "Korea, Democratic People's Republic of",
        iso2: "KP",
        value: "PRK",
    },
    {
        name: "Korea, Republic of",
        iso2: "KR",
        value: "KOR",
    },
    {
        name: "Kuwait",
        iso2: "KW",
        value: "KWT",
    },
    {
        name: "Kyrgyzstan",
        iso2: "KG",
        value: "KGZ",
    },
    {
        name: "Lao People's Democratic Republic",
        iso2: "LA",
        value: "LAO",
    },
    {
        name: "Latvia",
        iso2: "LV",
        value: "LVA",
    },
    {
        name: "Lebanon",
        iso2: "LB",
        value: "LBN",
    },
    {
        name: "Lesotho",
        iso2: "LS",
        value: "LSO",
    },
    {
        name: "Liberia",
        iso2: "LR",
        value: "LBR",
    },
    {
        name: "Libya",
        iso2: "LY",
        value: "LBY",
    },
    {
        name: "Liechtenstein",
        iso2: "LI",
        value: "LIE",
    },
    {
        name: "Lithuania",
        iso2: "LT",
        value: "LTU",
    },
    {
        name: "Luxembourg",
        iso2: "LU",
        value: "LUX",
    },
    {
        name: "Macao",
        iso2: "MO",
        value: "MAC",
    },
    {
        name: "Macedonia, the former Yugoslav Republic of",
        iso2: "MK",
        value: "MKD",
    },
    {
        name: "Madagascar",
        iso2: "MG",
        value: "MDG",
    },
    {
        name: "Malawi",
        iso2: "MW",
        value: "MWI",
    },
    {
        name: "Malaysia",
        iso2: "MY",
        value: "MYS",
    },
    {
        name: "Maldives",
        iso2: "MV",
        value: "MDV",
    },
    {
        name: "Mali",
        iso2: "ML",
        value: "MLI",
    },
    {
        name: "Malta",
        iso2: "MT",
        value: "MLT",
    },
    {
        name: "Marshall Islands",
        iso2: "MH",
        value: "MHL",
    },
    {
        name: "Martinique",
        iso2: "MQ",
        value: "MTQ",
    },
    {
        name: "Mauritania",
        iso2: "MR",
        value: "MRT",
    },
    {
        name: "Mauritius",
        iso2: "MU",
        value: "MUS",
    },
    {
        name: "Mayotte",
        iso2: "YT",
        value: "MYT",
    },
    {
        name: "Mexico",
        iso2: "MX",
        value: "MEX",
    },
    {
        name: "Micronesia, Federated States of",
        iso2: "FM",
        value: "FSM",
    },
    {
        name: "Moldova, Republic of",
        iso2: "MD",
        value: "MDA",
    },
    {
        name: "Monaco",
        iso2: "MC",
        value: "MCO",
    },
    {
        name: "Mongolia",
        iso2: "MN",
        value: "MNG",
    },
    {
        name: "Montenegro",
        iso2: "ME",
        value: "MNE",
    },
    {
        name: "Montserrat",
        iso2: "MS",
        value: "MSR",
    },
    {
        name: "Morocco",
        iso2: "MA",
        value: "MAR",
    },
    {
        name: "Mozambique",
        iso2: "MZ",
        value: "MOZ",
    },
    {
        name: "Myanmar",
        iso2: "MM",
        value: "MMR",
    },
    {
        name: "Namibia",
        iso2: "NA",
        value: "NAM",
    },
    {
        name: "Nauru",
        iso2: "NR",
        value: "NRU",
    },
    {
        name: "Nepal",
        iso2: "NP",
        value: "NPL",
    },
    {
        name: "Netherlands",
        iso2: "NL",
        value: "NLD",
    },
    {
        name: "New Caledonia",
        iso2: "NC",
        value: "NCL",
    },
    {
        name: "New Zealand",
        iso2: "NZ",
        value: "NZL",
    },
    {
        name: "Nicaragua",
        iso2: "NI",
        value: "NIC",
    },
    {
        name: "Niger",
        iso2: "NE",
        value: "NER",
    },
    {
        name: "Nigeria",
        iso2: "NG",
        value: "NGA",
    },
    {
        name: "Niue",
        iso2: "NU",
        value: "NIU",
    },
    {
        name: "Norfolk Island",
        iso2: "NF",
        value: "NFK",
    },
    {
        name: "Northern Mariana Islands",
        iso2: "MP",
        value: "MNP",
    },
    {
        name: "Norway",
        iso2: "NO",
        value: "NOR",
    },
    {
        name: "Oman",
        iso2: "OM",
        value: "OMN",
    },
    {
        name: "Pakistan",
        iso2: "PK",
        value: "PAK",
    },
    {
        name: "Palau",
        iso2: "PW",
        value: "PLW",
    },
    {
        name: "Palestine, State of",
        iso2: "PS",
        value: "PSE",
    },
    {
        name: "Panama",
        iso2: "PA",
        value: "PAN",
    },
    {
        name: "Papua New Guinea",
        iso2: "PG",
        value: "PNG",
    },
    {
        name: "Paraguay",
        iso2: "PY",
        value: "PRY",
    },
    {
        name: "Peru",
        iso2: "PE",
        value: "PER",
    },
    {
        name: "Philippines",
        iso2: "PH",
        value: "PHL",
    },
    {
        name: "Pitcairn",
        iso2: "PN",
        value: "PCN",
    },
    {
        name: "Poland",
        iso2: "PL",
        value: "POL",
    },
    {
        name: "Portugal",
        iso2: "PT",
        value: "PRT",
    },
    {
        name: "Puerto Rico",
        iso2: "PR",
        value: "PRI",
    },
    {
        name: "Qatar",
        iso2: "QA",
        value: "QAT",
    },
    {
        name: "Réunion",
        iso2: "RE",
        value: "REU",
    },
    {
        name: "Romania",
        iso2: "RO",
        value: "ROU",
    },
    {
        name: "Russian Federation",
        iso2: "RU",
        value: "RUS",
    },
    {
        name: "Rwanda",
        iso2: "RW",
        value: "RWA",
    },
    {
        name: "Saint Barthélemy",
        iso2: "BL",
        value: "BLM",
    },
    {
        name: "Saint Helena, Ascension and Tristan da Cunha",
        iso2: "SH",
        value: "SHN",
    },
    {
        name: "Saint Kitts and Nevis",
        iso2: "KN",
        value: "KNA",
    },
    {
        name: "Saint Lucia",
        iso2: "LC",
        value: "LCA",
    },
    {
        name: "Saint Martin (French part)",
        iso2: "MF",
        value: "MAF",
    },
    {
        name: "Saint Pierre and Miquelon",
        iso2: "PM",
        value: "SPM",
    },
    {
        name: "Saint Vincent and the Grenadines",
        iso2: "VC",
        value: "VCT",
    },
    {
        name: "Samoa",
        iso2: "WS",
        value: "WSM",
    },
    {
        name: "San Marino",
        iso2: "SM",
        value: "SMR",
    },
    {
        name: "Sao Tome and Principe",
        iso2: "ST",
        value: "STP",
    },
    {
        name: "Saudi Arabia",
        iso2: "SA",
        value: "SAU",
    },
    {
        name: "Senegal",
        iso2: "SN",
        value: "SEN",
    },
    {
        name: "Serbia",
        iso2: "RS",
        value: "SRB",
    },
    {
        name: "Seychelles",
        iso2: "SC",
        value: "SYC",
    },
    {
        name: "Sierra Leone",
        iso2: "SL",
        value: "SLE",
    },
    {
        name: "Singapore",
        iso2: "SG",
        value: "SGP",
    },
    {
        name: "Sint Maarten (Dutch part)",
        iso2: "SX",
        value: "SXM",
    },
    {
        name: "Slovakia",
        iso2: "SK",
        value: "SVK",
    },
    {
        name: "Slovenia",
        iso2: "SI",
        value: "SVN",
    },
    {
        name: "Solomon Islands",
        iso2: "SB",
        value: "SLB",
    },
    {
        name: "Somalia",
        iso2: "SO",
        value: "SOM",
    },
    {
        name: "South Africa",
        iso2: "ZA",
        value: "ZAF",
    },
    {
        name: "South Georgia and the South Sandwich Islands",
        iso2: "GS",
        value: "SGS",
    },
    {
        name: "South Sudan",
        iso2: "SS",
        value: "SSD",
    },
    {
        name: "Spain",
        iso2: "ES",
        value: "ESP",
    },
    {
        name: "Sri Lanka",
        iso2: "LK",
        value: "LKA",
    },
    {
        name: "Sudan",
        iso2: "SD",
        value: "SDN",
    },
    {
        name: "Suriname",
        iso2: "SR",
        value: "SUR",
    },
    {
        name: "Svalbard and Jan Mayen",
        iso2: "SJ",
        value: "SJM",
    },
    {
        name: "Swaziland",
        iso2: "SZ",
        value: "SWZ",
    },
    {
        name: "Sweden",
        iso2: "SE",
        value: "SWE",
    },
    {
        name: "Switzerland",
        iso2: "CH",
        value: "CHE",
    },
    {
        name: "Syrian Arab Republic",
        iso2: "SY",
        value: "SYR",
    },
    {
        name: "Taiwan",
        iso2: "TW",
        value: "TWN",
    },
    {
        name: "Tajikistan",
        iso2: "TJ",
        value: "TJK",
    },
    {
        name: "Tanzania, United Republic of",
        iso2: "TZ",
        value: "TZA",
    },
    {
        name: "Thailand",
        iso2: "TH",
        value: "THA",
    },
    {
        name: "Timor-Leste",
        iso2: "TL",
        value: "TLS",
    },
    {
        name: "Togo",
        iso2: "TG",
        value: "TGO",
    },
    {
        name: "Tokelau",
        iso2: "TK",
        value: "TKL",
    },
    {
        name: "Tonga",
        iso2: "TO",
        value: "TON",
    },
    {
        name: "Trinidad and Tobago",
        iso2: "TT",
        value: "TTO",
    },
    {
        name: "Tunisia",
        iso2: "TN",
        value: "TUN",
    },
    {
        name: "Turkey",
        iso2: "TR",
        value: "TUR",
    },
    {
        name: "Turkmenistan",
        iso2: "TM",
        value: "TKM",
    },
    {
        name: "Turks and Caicos Islands",
        iso2: "TC",
        value: "TCA",
    },
    {
        name: "Tuvalu",
        iso2: "TV",
        value: "TUV",
    },
    {
        name: "Uganda",
        iso2: "UG",
        value: "UGA",
    },
    {
        name: "Ukraine",
        iso2: "UA",
        value: "UKR",
    },
    {
        name: "United Arab Emirates",
        iso2: "AE",
        value: "ARE",
    },
    {
        name: "United Kingdom",
        iso2: "GB",
        value: "GBR",
    },
    {
        name: "United States",
        iso2: "US",
        value: "USA",
    },
    {
        name: "United States Minor Outlying Islands",
        iso2: "UM",
        value: "UMI"
    },
    {
        name: "Uruguay",
        iso2: "UY",
        value: "URY",
    },
    {
        name: "Uzbekistan",
        iso2: "UZ",
        value: "UZB",
    },
    {
        name: "Vanuatu",
        iso2: "VU",
        value: "VUT",
    },
    {
        name: "Venezuela, Bolivarian Republic of",
        iso2: "VE",
        value: "VEN",
    },
    {
        name: "Viet Nam",
        iso2: "VN",
        value: "VNM",
    },
    {
        name: "Virgin Islands, British",
        iso2: "VG",
        value: "VGB",
    },
    {
        name: "Virgin Islands, U.S.",
        iso2: "VI",
        value: "VIR",
    },
    {
        name: "Wallis and Futuna",
        iso2: "WF",
        value: "WLF",
    },
    {
        name: "Western Sahara",
        iso2: "EH",
        value: "ESH",
    },
    {
        name: "Yemen",
        iso2: "YE",
        value: "YEM",
    },
    {
        name: "Zambia",
        iso2: "ZM",
        value: "ZMB",
    },
    {
        name: "Zimbabwe",
        iso2: "ZW",
        value: "ZWE",
    }
]


const SearchSelect = ({ text = true }) => {
    const classes = useContext(ClassesContext);
    const { t, i18n } = useTranslation();
    const [selected, setSelected] = useState(options[0]);
    countryConverter.registerLocale(require(`i18n-iso-countries/langs/en.json`));
    countryConverter.registerLocale(require(`i18n-iso-countries/langs/vi.json`));
    countryConverter.registerLocale(require(`i18n-iso-countries/langs/ru.json`));

    const handleCountry = (country) => {
        // console.log("old selected", selected)
        //setSelected(country.value);
        // console.log("new selected", selected)
        if (country) handleSearch(country.value)
    }

    const handleSearch = (id) => {

        history.push(`/${id}`)
        window.scrollTo(0, 0);
    }
    console.log(t("CheckLanguage"))
    return (
        <div style={{ width: "100%", minWidth: 170, maxWidth: 600, margin: "0px auto" }}>
            {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}> */}
            <div className={classes.search} style={{ flexGrow: 5 }}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <Autocomplete
                    id="countries"
                    options={options}
                    getOptionLabel={(option) => (option.value) ? countryConverter.getName(option.value, t("CheckLanguage")) : option.name}
                    style={{ width: "90%" }}
                    value={selected}
                    onChange={(event, newValue) => {
                        handleCountry(newValue);
                    }}
                    renderInput={(params) => <TextField {...params}

                        variant="outlined"
                        //style={{ border: "0px solid white" }}
                        inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password',

                        }}
                        InputProps={{
                            ...params.InputProps,
                            classes: {

                                root: classes.cssOutlinedInput,
                                focused: classes.cssFocused,
                                notchedOutline: classes.notchedOutline,

                            }
                        }} />}
                />
                {/* </div> */}
                {/* <Button onClick={handleSearch} style={{ margin: "0px 20px" }}
                    className={`${classes.flatContainer} ${classes.blueShadow}`} > Go </ Button > */}

            </div>
            {text && <Typography color="textPrimary" variant="subtitle1">
                {t(" Type and select any country or state")}
            </Typography>}
        </ div>
    )
}

export default SearchSelect