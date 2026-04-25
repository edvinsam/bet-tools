export type RegionSlug =
  | "europe"
  | "north-america"
  | "south-america"
  | "asia"
  | "africa"
  | "oceania";

export type CountrySlug =
  | "sweden"
  | "united-kingdom"
  | "france"
  | "australia"
  | "united-states"
  | "netherlands"
  | "germany"
  | "italy"
  | "brazil"
  | "mexico"
  | "india"
  | "nigeria"
  | "kenya"
  | "south-africa"
  | "armenia"
  | "austria"
  | "belarus" 
  | "belgium" 
  | "bosnia-and-hercegovina" 
  | "bulgaria"
  | "costa-rica"
  | "croatia"
  | "cyprus"
  | "czech-republic"
  | "denmark"
  | "egypt"
  | "estonia"
  | "finland"
  | "georgia"
  | "gibraltar"
  | "greece"
  | "guatemala"
  | "hungary"
  | "iceland"
  | "ireland"
  | "italy"
  | "latvia"
  | "liechtenstein"
  | "lithuania"
  | "luxembourg"
  | "macau"
  | "malaysia"
  | "malta"
  | "new-zealand"
  | "panama"
  | "peru"
  | "philippines"
  | "poland"
  | "romania"
  | "russia"
  | "saudi-arabia"
  | "slovakia"
  | "slovenia"
  | "south-korea"
  | "spain"
  | "sweden"
  | "switzerland"
  | "taiwan"
  | "thailand"
  | "ukraine"
  | "united-arab-emirates"
  | "united-kingdom"
  | "anguilla" 
  | "antigua-and-barbuda"
  | "belize"
  | "bermuda"
  | "british-virgin-islands"
  | "canada"
  | "cayman-islands"
  | "cuba"
  | "dominica"
  | "grenada"
  | "montserrat"
  | "saint-barthelemy"
  | "saint-kitts-and-nevis"
  | "saint-lucia"
  | "saint-pierre-and-miquelon"
  | "saint-vincent-and-the-grenadines"
  | "saint-martin"
  | "turks-and-caicos-islands" 
  | "argentina" 
  | "aruba"
  | "chile"
  | "curacao"
  | "falkland-islands"
  | "suriname"
  | "uruguay"
  | "andorra"
  | "guernsey"
  | "isle-of-man"
  | "jersey"
  | "monaco"
  | "montenegro"
  | "norway"
  | "san-marino"
  | "svalbard-and-jan-mayen"
  | "vatican" 
  | "american-samoa"
  | "cook-islands"
  | "fiji"
  | "french-polynesia"
  | "kiribati"
  | "marshall-islands"
  | "micronesia"
  | "nauru"
  | "new-caledonia"
  | "niue"
  | "northern-mariana-islands"
  | "palau"
  | "samoa"
  | "solomon-islands"
  | "tokelau"
  | "tonga"
  | "tuvalu"
  | "vanuatu"
  | "wallis-and-futuna"
  | "bahrain"
  | "bhutan"
  | "british-indian-ocean-territory"
  | "brunei"
  | "china"
  | "christmas-island"
  | "cocos-islands"
  | "east-timor"
  | "israel"
  | "japan"
  | "mongolia"
  | "north-korea"
  | "oman"
  | "palestine"
  | "pitcairn-islands"
  | "qatar"
  | "north-macedonia"
  | "benin"
  | "cape-verde"
  | "djibouti"
  | "mauritius"
  | "mayotte"
  | "morocco"
  | "namibia"
  | "democratic-republic-of-the-congo"
  | "rwanda"
  | "saint-helena"
  | "sao-tome-and-principe"
  | "senegal"
  | "seychelles"
  | "sudan"
  | "swaziland"
  | "western-sahara"
  | "barbados"
  | "ghana"
  | "lebanon"
  | "tanzania" 
  | "afghanistan"
  | "albania"
  | "algeria"
  | "angola" 
  | "azerbaijan"
  | "bahamas"
  | "bangladesh" 
  | "bolivia"
  | "botswana"
  | "burkina-faso"
  | "cambodia"
  | "cameroon"
  | "colombia" 
  | "ecuador"
  | "ethiopia"
  | "faroe-islands"
  | "french-guiana"
  | "gabon"
  | "gambia"
  | "greenland"
  | "guinea"
  | "guyana"
  | "haiti"
  | "honduras"
  | "hong-kong" 
  | "indonesia"
  | "iran"
  | "ivory-coast"
  | "jamaica"
  | "jordan"
  | "kazakhstan"
  | "kosovo"
  | "kuwait"
  | "kyrgyzstan"
  | "laos"
  | "lesotho"
  | "liberia"
  | "libya" 
  | "madagascar"
  | "malawi"
  | "maldives"
  | "mali"
  | "moldova" 
  | "mozambique"
  | "nepal"
  | "niger"
  | "pakistan"
  | "paraguay"
  | "portugal"
  | "puerto-rico"
  | "saint-martin"
  | "serbia"
  | "sierra-leone"
  | "singapore"
  | "somalia"
  | "sri-lanka"
  | "syria"
  | "tajikistan"
  | "tunisia"
  | "turkey"
  | "turkmenistan"
  | "uganda"
  | "uzbekistan"
  | "venezuela"
  | "vietnam"
  | "yemen"
  | "zambia"
  | "zimbabwe"
  | "iraq"
  | "nicaragua"
  | "burundi" 
  | "central-african-republic"
  | "chad"
  | "comoros"
  | "congo-brazzaville" 
  | "el-salvador"
  | "equatorial-guinea"
  | "eritrea"
  | "eswatini" 
  | "guadeloupe"
  | "guam"
  | "guinea-bissau" 
  | "martinique"
  | "myanmar"
  | "norfolk-island"
  | "papua-new-guinea"
  | "reunion"
  | "south-sudan"
  | "togo"
  | "trinidad-and-tobago"
  | "us-virgin-islands"
  | "aland-islands"
  | "dominican-republic"
  | "sint-maarten"
  | "mauritania"
  ;

export type BookmakerLocationMeta = {
  regions: RegionSlug[];
  availableCountries: CountrySlug[];
};

export const REGION_LABELS: Record<RegionSlug, string> = {
  europe: "Europe",
  "north-america": "North America",
  "south-america": "South America",
  asia: "Asia",
  africa: "Africa",
  oceania: "Oceania",
};

export const COUNTRY_LABELS: Record<CountrySlug, string> = {
  sweden: "Sweden",
  "united-kingdom": "United Kingdom",
  france: "France",
  australia: "Australia",
  "united-states": "United States",
  netherlands: "Netherlands",
  germany: "Germany",
  italy: "Italy",
  brazil: "Brazil",
  mexico: "Mexico",
  india: "India",
  nigeria: "Nigeria",
  kenya: "Kenya",
  "south-africa": "South Africa",
  armenia: "Armenia", 
  austria: "Austria", 
  belarus: "Belarus", 
  belgium: "Belgium", 
  "bosnia-and-hercegovina": "Bosnia and Hercegovina",
  bulgaria: "Bulgaria", 
  "costa-rica": "Costa Rica", 
  croatia: "Croatia", 
  cyprus: "Cyprus", 
  "czech-republic": "Czech Republic", 
  denmark: "Denmark", 
  egypt: "Egypt", 
  estonia: "Estonia", 
  finland: "Finland", 
  georgia: "Georgia", 
  gibraltar: "Gibraltar", 
  greece: "Greece", 
  guatemala: "Guatemala", 
  hungary: "Hungary", 
  iceland: "Iceland", 
  ireland: "Ireland", 
  latvia: "Latvia", 
  liechtenstein: "Liechtenstein", 
  lithuania: "Lithuania", 
  luxembourg: "Luxembourg", 
  macau: "Macau", 
  malaysia: "Malaysia", 
  malta: "Malta", 
  "new-zealand": "New Zealand", 
  panama: "Panama", 
  peru: "Peru", 
  philippines: "Philippines", 
  poland: "Poland", 
  romania: "Romania", 
  russia: "Russia", 
  "saudi-arabia": "Saudi Arabia", 
  slovakia: "Slovakia", 
  slovenia: "Slovenia", 
  "south-korea": "South Korea", 
  spain:"Spain", 
  switzerland: "Switzerland", 
  taiwan: "Taiwan", 
  thailand: "Thailand", 
  ukraine: "Ukraine", 
  "united-arab-emirates": "United Arab Emirates",
  anguilla: "Anguilla", 
  "antigua-and-barbuda": "Antigua and Barbuda", 
  belize: "Belize", 
  bermuda: "Bermuda", 
  "british-virgin-islands": "British Virgin Islands",
  canada: "Canada", 
  "cayman-islands": "Cayman Islands", 
  cuba: "Cuba", 
  dominica: "Dominica",
  grenada: "Grenada",
  montserrat: "Montserrat",
  "saint-barthelemy": "Saint Barthelemy", 
  "saint-kitts-and-nevis": "Saint Kitts and Nevis", 
  "saint-lucia": "Saint Lucia", 
  "saint-pierre-and-miquelon": "Saint Pierre and Miquelon", 
  "saint-vincent-and-the-grenadines": "Saint Vincent and the Grenadines", 
  "saint-martin": "Saint Martin", 
  "turks-and-caicos-islands": "Turks and Caicos Islands",
  argentina: "Argentina", 
  aruba: "Aruba", 
  chile: "Chile", 
  curacao: "Curacao", 
  "falkland-islands": "Falkland Islands", 
  suriname: "Suriname", 
  uruguay: "Uruguay",
  andorra: "Andorra",
  guernsey: "Guernsey",
  "isle-of-man": "Isle of Man",
  jersey: "Jersey",
  monaco: "Monaco", 
  montenegro: "Montenegro",
  norway: "Norway",
  "san-marino": "San Marino",
  "svalbard-and-jan-mayen": "Svalbard and Jan Mayen", 
  vatican: "Vatican",
  "american-samoa": "American Samoa", 
  "cook-islands": "Cook Islands", 
  fiji: "Fiji", 
  "french-polynesia": "French Polynesia", 
  kiribati: "Kiribati", 
  "marshall-islands": "Marshall Islands", 
  micronesia: "Micronesia", 
  nauru: "Nauru", 
  "new-caledonia": "New Caledonia", 
  niue: "Niue", 
  "northern-mariana-islands": "Northern Mariana Islands", 
  palau: "Palau", 
  samoa: "Samoa", 
  "solomon-islands": "Solomon Islands", 
  tokelau: "Tokelau", 
  tonga: "Tonga", 
  tuvalu: "Tuvalu", 
  vanuatu: "Vanuatu", 
  "wallis-and-futuna": "Wallis and Futuna",
  bahrain: "Bahrain", 
  bhutan: "Bhutan", 
  "british-indian-ocean-territory": "British Indian Ocean territory", 
  brunei: "Brunei", 
  china: "China", 
  "christmas-island": "Christmas Island", 
  "cocos-islands": "Cocos Islands", 
  "east-timor": "East Timor", 
  israel: "Israel", 
  japan: "Japan", 
  mongolia: "Mongolia", 
  "north-korea": "North Korea", 
  oman: "Oman", 
  palestine: "Palestine", 
  "pitcairn-islands": "Pitcairn Islands", 
  qatar: "Qatar",
  "north-macedonia": "North Macedonia",
  benin: "Benin", 
  "cape-verde": "Cape Verde", 
  djibouti: "Djibouti", 
  mauritius: "Mauritius", 
  mayotte: "Mayotte", 
  morocco: "Morocco", 
  namibia: "Namibia", 
  "democratic-republic-of-the-congo": "Democratic Republic of the Congo", 
  rwanda: "Rwanda", 
  "saint-helena": "Saint Helena", 
  "sao-tome-and-principe": "Sao Tome and Principe", 
  senegal: "Senegal", 
  seychelles: "Seychelles", 
  sudan: "Sudan", 
  swaziland: "Swaziland", 
  "western-sahara": "Western Sahara",
  barbados: "Barbados",
  ghana: "Ghana",
  lebanon: "Lebanon",
  tanzania: "Tanzania", 
  afghanistan: "Afghanistan",
  albania: "Albania", 
  algeria: "Algeria", 
  angola: "Angola", 
  azerbaijan: "Azerbaijan", 
  bahamas: "Bahamas", 
  bangladesh: "Bangladesh", 
  bolivia: "Bolivia", 
  botswana: "Botswana", 
  "burkina-faso": "Burkina Faso", 
  cambodia: "Cambodia", 
  cameroon: "Cameroon",
  colombia: "Colombia", 
  ecuador: "Ecuador", 
  ethiopia: "Ethiopia", 
  "faroe-islands": "Faroe Islands", 
  "french-guiana": "French Guiana", 
  gabon: "Gabon", 
  gambia: "Gambia", 
  greenland: "Greenland", 
  guinea: "Guinea", 
  guyana: "Guyana", 
  haiti: "Haiti", 
  honduras: "Honduras", 
  "hong-kong": "Hong Kong",
  indonesia: "Indonesia", 
  iran: "Iran", 
  "ivory-coast": "Ivory Coast", 
  jamaica: "Jamaica", 
  jordan: "Jordan", 
  kazakhstan: "Kazakhstan", 
  kosovo: "Kosovo", 
  kuwait: "Kuwait", 
  kyrgyzstan: "Kyrgyzstan", 
  laos: "Laos", 
  lesotho: "Lesotho",
  liberia: "Liberia", 
  libya: "Libya", 
  madagascar: "Madagascar", 
  malawi: "Malawi", 
  maldives: "Maldives", 
  mali: "Mali", 
  moldova: "Moldova", 
  mozambique: "Mozambique", 
  nepal: "Nepal", 
  niger: "Niger", 
  pakistan: "Pakistan", 
  paraguay: "Paraguay", 
  portugal: "Portugal", 
  "puerto-rico": "Puerto Rico", 
  serbia: "Serbia", 
  "sierra-leone": "Sierra Leone", 
  singapore: "Singapore", 
  somalia: "Somalia", 
  "sri-lanka": "Sri Lanka", 
  syria: "Syria", 
  tajikistan: "Tajikistan", 
  tunisia: "Tunisia", 
  turkey: "Turkey", 
  turkmenistan: "Turkmenistan", 
  uganda: "Uganda", 
  uzbekistan: "Uzbekistan", 
  venezuela: "Venezuela", 
  vietnam: "Vietnam", 
  yemen: "Yemen", 
  zambia: "Zambia", 
  zimbabwe: "Zimbabwe",
  iraq: "Iraq",
  nicaragua: "Nicaragua", 
  burundi: "Burundi", 
  "central-african-republic": "Central African Republic", 
  chad: "Chad", 
  comoros: "Comoros", 
  "congo-brazzaville": "Republic of the Congo", 
  "el-salvador": "El Salvador", 
  "equatorial-guinea": "Equatorial Guinea", 
  eritrea: "Eritrea",
  eswatini: "Eswatini",
  guadeloupe: "Guadeloupe", 
  guam: "Guam", 
  "guinea-bissau": "Guinea Bissau", 
  martinique: "Martinique", 
  myanmar: "myanmar", 
  "norfolk-island": "Norfolk Island", 
  "papua-new-guinea": "Papua New Guinea", 
  reunion: "Reunion", 
  "south-sudan": "South Sudan", 
  togo: "Togo", 
  "trinidad-and-tobago": "Trinidad and Tobago",
  "us-virgin-islands": "US Virgin Islands",
  "aland-islands": "Åland Islands",
  "dominican-republic": "Dominican Republic",
  "sint-maarten": "Sint Maarten",
  "mauritania": "Mauritania"
};

export const COUNTRY_FLAG_CODES: Partial<Record<CountrySlug, string>> = {
  sweden: "se",
  "united-kingdom": "gb",
  france: "fr",
  australia: "au",
  "united-states": "us",
  netherlands: "nl",
  germany: "de",
  italy: "it",
  brazil: "br",
  mexico: "mx",
  india: "in",
  nigeria: "ng",
  kenya: "ke",
  "south-africa": "za",

  armenia: "am",
  austria: "at",
  belarus: "by",
  belgium: "be",
  "bosnia-and-hercegovina": "ba",
  bulgaria: "bg",
  "costa-rica": "cr",
  croatia: "hr",
  cyprus: "cy",
  "czech-republic": "cz",
  denmark: "dk",
  egypt: "eg",
  estonia: "ee",
  finland: "fi",
  georgia: "ge",
  gibraltar: "gi",
  greece: "gr",
  guatemala: "gt",
  hungary: "hu",
  iceland: "is",
  ireland: "ie",
  latvia: "lv",
  liechtenstein: "li",
  lithuania: "lt",
  luxembourg: "lu",
  macau: "mo",
  malaysia: "my",
  malta: "mt",
  "new-zealand": "nz",
  panama: "pa",
  peru: "pe",
  philippines: "ph",
  poland: "pl",
  romania: "ro",
  russia: "ru",
  "saudi-arabia": "sa",
  slovakia: "sk",
  slovenia: "si",
  "south-korea": "kr",
  spain: "es",
  switzerland: "ch",
  taiwan: "tw",
  thailand: "th",
  ukraine: "ua",
  "united-arab-emirates": "ae",

  anguilla: "ai",
  "antigua-and-barbuda": "ag",
  belize: "bz",
  bermuda: "bm",
  "british-virgin-islands": "vg",
  canada: "ca",
  "cayman-islands": "ky",
  cuba: "cu",
  dominica: "dm",
  grenada: "gd",
  montserrat: "ms",
  "saint-barthelemy": "bl",
  "saint-kitts-and-nevis": "kn",
  "saint-lucia": "lc",
  "saint-pierre-and-miquelon": "pm",
  "saint-vincent-and-the-grenadines": "vc",
  "saint-martin": "mf",
  "turks-and-caicos-islands": "tc",

  argentina: "ar",
  aruba: "aw",
  chile: "cl",
  curacao: "cw",
  "falkland-islands": "fk",
  suriname: "sr",
  uruguay: "uy",

  andorra: "ad",
  guernsey: "gg",
  "isle-of-man": "im",
  jersey: "je",
  monaco: "mc",
  montenegro: "me",
  norway: "no",
  "san-marino": "sm",
  "svalbard-and-jan-mayen": "sj",
  vatican: "va",

  "american-samoa": "as",
  "cook-islands": "ck",
  fiji: "fj",
  "french-polynesia": "pf",
  kiribati: "ki",
  "marshall-islands": "mh",
  micronesia: "fm",
  nauru: "nr",
  "new-caledonia": "nc",
  niue: "nu",
  "northern-mariana-islands": "mp",
  palau: "pw",
  samoa: "ws",
  "solomon-islands": "sb",
  tokelau: "tk",
  tonga: "to",
  tuvalu: "tv",
  vanuatu: "vu",
  "wallis-and-futuna": "wf",

  bahrain: "bh",
  bhutan: "bt",
  "british-indian-ocean-territory": "io",
  brunei: "bn",
  china: "cn",
  "christmas-island": "cx",
  "cocos-islands": "cc",
  "east-timor": "tl",
  israel: "il",
  japan: "jp",
  mongolia: "mn",
  "north-korea": "kp",
  oman: "om",
  palestine: "ps",
  "pitcairn-islands": "pn",
  qatar: "qa",
  "north-macedonia": "mk",

  benin: "bj",
  "cape-verde": "cv",
  djibouti: "dj",
  mauritius: "mu",
  mayotte: "yt",
  morocco: "ma",
  namibia: "na",
  "democratic-republic-of-the-congo": "cd",
  rwanda: "rw",
  "saint-helena": "sh",
  "sao-tome-and-principe": "st",
  senegal: "sn",
  seychelles: "sc",
  sudan: "sd",
  swaziland: "sz",
  "western-sahara": "eh",

  barbados: "bb",
  ghana: "gh",
  lebanon: "lb",
  tanzania: "tz",

  afghanistan: "af",
  albania: "al",
  algeria: "dz",
  angola: "ao",
  azerbaijan: "az",
  bahamas: "bs",
  bangladesh: "bd",
  bolivia: "bo",
  botswana: "bw",
  "burkina-faso": "bf",
  cambodia: "kh",
  cameroon: "cm",
  colombia: "co",
  ecuador: "ec",
  ethiopia: "et",
  "faroe-islands": "fo",
  "french-guiana": "gf",
  gabon: "ga",
  gambia: "gm",
  greenland: "gl",
  guinea: "gn",
  guyana: "gy",
  haiti: "ht",
  honduras: "hn",
  "hong-kong": "hk",
  indonesia: "id",
  iran: "ir",
  "ivory-coast": "ci",
  jamaica: "jm",
  jordan: "jo",
  kazakhstan: "kz",
  kosovo: "xk",
  kuwait: "kw",
  kyrgyzstan: "kg",
  laos: "la",
  lesotho: "ls",
  liberia: "lr",
  libya: "ly",
  madagascar: "mg",
  malawi: "mw",
  maldives: "mv",
  mali: "ml",
  moldova: "md",
  mozambique: "mz",
  nepal: "np",
  niger: "ne",
  pakistan: "pk",
  paraguay: "py",
  portugal: "pt",
  "puerto-rico": "pr",
  serbia: "rs",
  "sierra-leone": "sl",
  singapore: "sg",
  somalia: "so",
  "sri-lanka": "lk",
  syria: "sy",
  tajikistan: "tj",
  tunisia: "tn",
  turkey: "tr",
  turkmenistan: "tm",
  uganda: "ug",
  uzbekistan: "uz",
  venezuela: "ve",
  vietnam: "vn",
  yemen: "ye",
  zambia: "zm",
  zimbabwe: "zw",
  iraq: "iq",
  nicaragua: "ni",
  burundi: "bi",
  "central-african-republic": "cf",
  chad: "td",
  comoros: "km",
  "congo-brazzaville": "cg",
  "el-salvador": "sv",
  "equatorial-guinea": "gq",
  eritrea: "er",
  eswatini: "sz",
  guadeloupe: "gp",
  guam: "gu",
  "guinea-bissau": "gw",
  martinique: "mq",
  myanmar: "mm",
  "norfolk-island": "nf",
  "papua-new-guinea": "pg",
  reunion: "re",
  "south-sudan": "ss",
  togo: "tg",
  "trinidad-and-tobago": "tt",
  "us-virgin-islands": "vi",
  "aland-islands": "ax",
  "dominican-republic": "do",
  "sint-maarten": "sx",
  mauritania: "mr",
};

export const COUNTRIES_BY_REGION: Record<RegionSlug, CountrySlug[]> = {
  europe: [
    "aland-islands","turkey","serbia","portugal","moldova","kosovo",
    "faroe-islands","azerbaijan","albania","north-macedonia",
    "svalbard-and-jan-mayen","vatican","san-marino","norway",
    "monaco","montenegro","jersey","isle-of-man","guernsey","andorra",
    "france","italy","netherlands","sweden","armenia","austria",
    "belarus","belgium","bosnia-and-hercegovina","bulgaria","croatia",
    "cyprus","czech-republic","denmark","estonia","finland","georgia",
    "germany","gibraltar","greece","hungary","iceland","ireland",
    "latvia","liechtenstein","lithuania","luxembourg","malta","poland",
    "romania","russia","slovakia","slovenia","spain","switzerland",
    "ukraine","united-kingdom"
  ],

  "north-america": [
    "sint-maarten","us-virgin-islands","trinidad-and-tobago",
    "martinique","guadeloupe","el-salvador","nicaragua","puerto-rico",
    "jamaica","honduras","haiti","greenland","bahamas","barbados",
    "mexico","united-states","costa-rica","guatemala","panama",
    "anguilla","antigua-and-barbuda","belize","bermuda",
    "british-virgin-islands","canada","cayman-islands","cuba",
    "dominica","grenada","montserrat","saint-barthelemy",
    "saint-kitts-and-nevis","saint-lucia",
    "saint-pierre-and-miquelon",
    "saint-vincent-and-the-grenadines",
    "saint-martin","turks-and-caicos-islands",

    // moved here
    "aruba",
    "curacao"
  ],

  "south-america": [
    "venezuela","paraguay","guyana","french-guiana","ecuador",
    "colombia","bolivia","brazil","peru","argentina","chile",
    "falkland-islands","suriname","uruguay"
  ],

  asia: [
    "myanmar","iraq","yemen","vietnam","uzbekistan","turkmenistan",
    "tajikistan","syria","sri-lanka","singapore","pakistan","nepal",
    "maldives","laos","kyrgyzstan","kuwait","kazakhstan","jordan",
    "iran","indonesia","hong-kong","cambodia","bangladesh",
    "afghanistan","lebanon","india","macau","malaysia","philippines",
    "saudi-arabia","south-korea","taiwan","thailand",
    "united-arab-emirates","bahrain","bhutan","brunei","china",
    "east-timor","israel","japan","mongolia","north-korea","oman",
    "palestine","qatar"
  ],

  africa: [
    "mauritania","togo","south-sudan","reunion","guinea-bissau",
    "eswatini","eritrea","equatorial-guinea","congo-brazzaville",
    "comoros","chad","central-african-republic","burundi","zimbabwe",
    "zambia","uganda","tunisia","somalia","sierra-leone","niger",
    "mozambique","mali","malawi","madagascar","libya","liberia",
    "lesotho","ivory-coast","guinea","gabon","gambia","ethiopia",
    "cameroon","burkina-faso","botswana","algeria","angola",
    "tanzania","ghana","kenya","nigeria","south-africa","egypt",
    "benin","cape-verde","djibouti","mauritius","mayotte","morocco",
    "namibia","democratic-republic-of-the-congo","rwanda","saint-helena",
    "sao-tome-and-principe","senegal","seychelles","sudan",
    "swaziland","western-sahara",

    // moved here
    "british-indian-ocean-territory"
  ],

  oceania: [
    "papua-new-guinea","norfolk-island","guam","australia",
    "new-zealand","american-samoa","cook-islands","fiji",
    "french-polynesia","kiribati","marshall-islands","micronesia",
    "nauru","new-caledonia","niue","northern-mariana-islands",
    "palau","samoa","solomon-islands","tokelau","tonga","tuvalu",
    "vanuatu","wallis-and-futuna",

    // moved here
    "pitcairn-islands",
    "christmas-island",
    "cocos-islands"
  ],
};

export const REGION_OPTIONS: {
  slug: RegionSlug;
  label: string;
  flagSrc?: string;
}[] = [
  { slug: "africa", label: "Africa", flagSrc: "/flags/africa.svg" },
  { slug: "asia", label: "Asia", flagSrc: "/flags/asia.svg" },
  { slug: "europe", label: "Europe", flagSrc: "/flags/europe.svg" },
  { slug: "north-america", label: "North America", flagSrc: "/flags/northamerica.svg" },
  { slug: "oceania", label: "Oceania", flagSrc: "/flags/oceania.svg" },
  { slug: "south-america", label: "South America", flagSrc: "/flags/southamerica.svg" },
];

export const COUNTRY_OPTIONS: {
  slug: CountrySlug;
  label: string;
  region: RegionSlug;
  flagCode?: string;
}[] = Object.entries(COUNTRIES_BY_REGION)
  .flatMap(([region, countries]) =>
    countries.map((country) => ({
      slug: country,
      label: COUNTRY_LABELS[country],
      region: region as RegionSlug,
      flagCode: COUNTRY_FLAG_CODES[country],
    }))
  )
  .sort((a, b) => a.label.localeCompare(b.label));

export const bookmakerLocations: Record<string, BookmakerLocationMeta> = {
  betfair: {
    regions: ["europe", "oceania", "asia", "north-america", "south-america", "africa"],
    availableCountries: ["armenia", "austria", "australia", "belarus", "belgium", "bosnia-and-hercegovina", "brazil", "bulgaria", "costa-rica", "croatia", "cyprus", "czech-republic", "denmark", "egypt", "estonia", "finland", "georgia", "germany", "gibraltar", "greece", "guatemala", "hungary", "iceland", "ireland", "italy", "latvia", "liechtenstein", "lithuania", "luxembourg", "macau", "malaysia", "malta", "mexico", "netherlands", "new-zealand", "panama", "peru", "philippines", "poland", "romania", "russia", "saudi-arabia", "slovakia", "slovenia", "south-korea", "spain", "sweden", "switzerland", "taiwan", "thailand", "ukraine", "united-arab-emirates", "united-kingdom"],
  },
  unibet: {
    regions: ["europe", "oceania", "asia", "north-america", "south-america", "africa"],
    availableCountries: ["anguilla", "antigua-and-barbuda", "belize", "bermuda", "british-virgin-islands", "canada", "cayman-islands", "cuba", "dominica", "grenada", "montserrat", "saint-barthelemy", "saint-kitts-and-nevis", "saint-lucia", "saint-pierre-and-miquelon", "saint-vincent-and-the-grenadines", "saint-martin", "turks-and-caicos-islands", "mexico", "argentina", "aruba", "chile", "curacao", "falkland-islands", "suriname", "uruguay", "andorra", "austria", "belarus", "belgium", "croatia", "cyprus", "denmark", "estonia", "finland", "georgia", "gibraltar", "greece", "guernsey", "hungary", "iceland", "ireland", "isle-of-man", "italy", "jersey", "latvia", "liechtenstein", "lithuania", "luxembourg", "malta", "monaco", "montenegro", "netherlands", "norway", "poland", "romania", "san-marino", "slovakia", "svalbard-and-jan-mayen", "united-kingdom", "vatican", "american-samoa", "cook-islands", "fiji", "french-polynesia", "kiribati", "marshall-islands", "micronesia", "nauru", "new-caledonia", "new-zealand", "niue", "northern-mariana-islands", "palau", "samoa", "solomon-islands", "tokelau", "tonga", "tuvalu", "vanuatu", "wallis-and-futuna", "armenia", "bahrain", "bhutan", "british-indian-ocean-territory", "brunei", "china", "christmas-island", "cocos-islands", "east-timor", "india", "israel", "japan", "macau", "malaysia", "mongolia", "north-korea", "oman", "palestine", "pitcairn-islands", "qatar", "south-korea", "taiwan", "united-arab-emirates", "north-macedonia", "benin", "cape-verde", "djibouti", "mauritius", "mayotte", "morocco", "namibia", "democratic-republic-of-the-congo", "rwanda", "saint-helena", "sao-tome-and-principe", "senegal", "seychelles", "south-africa", "sudan", "swaziland", "western-sahara"],
  },
  tabtouch: {
    regions: ["oceania", "north-america", "europe"],
    availableCountries: ["australia", "new-zealand", "canada", "isle-of-man"],
  },
  pointsbet: {
    regions: ["oceania", "north-america"],
    availableCountries: ["australia", "united-states", "canada"],
  },
  betright: {
    regions: ["oceania"],
    availableCountries: ["australia"],
  },
  sportsbet: {
    regions: ["oceania"],
    availableCountries: ["australia"],
  },
  neds: {
    regions: ["oceania"],
    availableCountries: ["australia"],
  },
  ladbrokes: {
    regions: ["europe", "oceania", "south-america", "north-america", "africa", "asia"],
    availableCountries: ["australia", "united-kingdom", "isle-of-man", "jersey", "ireland", "argentina", "barbados", "belarus", "croatia", "germany", "ghana", "gibraltar", "lebanon", "liechtenstein", "luxembourg", "malta", "mauritius", "netherlands", "saint-martin", "curacao", "new-zealand", "nigeria", "seychelles", "tanzania"],
  },
  betr: {
    regions: ["oceania"],
    availableCountries: ["australia", "new-zealand"],
  },
  tab: {
    regions: ["oceania"],
    availableCountries: ["australia"],
  },
  playup: {
    regions: ["oceania", "asia", "north-america"],
    availableCountries: ["australia", "new-zealand", "india", "united-states"],
  },

  matchbook: {
    regions: ["europe", "asia", "africa", "south-america", "north-america", "oceania"],
    availableCountries: ["australia", "new-zealand", "american-samoa", "cook-islands", "fiji", "french-polynesia", "kiribati", "marshall-islands", "micronesia", "nauru", "new-caledonia", "niue", "northern-mariana-islands", "palau", "samoa", "solomon-islands", "tokelau", "tonga", "tuvalu", "vanuatu", "wallis-and-futuna", "tanzania", "ghana", "kenya", "nigeria", "south-africa", "egypt", "benin", "cape-verde", "djibouti", "mauritius", "mayotte", "morocco", "namibia", "democratic-republic-of-the-congo", "rwanda", "saint-helena", "sao-tome-and-principe", "senegal", "seychelles", "sudan", "swaziland", "western-sahara", "lebanon", "india", "macau", "malaysia", "philippines", "saudi-arabia", "south-korea", "taiwan", "thailand", "united-arab-emirates", "bahrain", "bhutan", "british-indian-ocean-territory", "brunei", "china", "christmas-island", "cocos-islands", "east-timor", "israel", "japan", "mongolia", "north-korea", "oman", "palestine", "pitcairn-islands", "qatar", "north-macedonia", "svalbard-and-jan-mayen", "vatican", "san-marino", "norway", "monaco", "montenegro", "jersey", "isle-of-man", "guernsey", "andorra", "netherlands", "armenia", "austria", "belarus", "belgium", "bosnia-and-hercegovina", "bulgaria", "croatia", "cyprus", "czech-republic", "denmark", "estonia", "finland", "georgia", "gibraltar", "greece", "iceland", "ireland", "latvia", "liechtenstein", "lithuania", "luxembourg", "malta", "poland", "romania", "slovenia", "switzerland", "ukraine", "united-kingdom", "barbados", "mexico", "costa-rica", "guatemala", "panama", "anguilla", "antigua-and-barbuda", "belize", "bermuda", "british-virgin-islands", "cayman-islands", "cuba", "dominica", "grenada", "montserrat", "saint-barthelemy", "saint-kitts-and-nevis", "saint-lucia", "saint-pierre-and-miquelon", "saint-vincent-and-the-grenadines", "saint-martin", "turks-and-caicos-islands", "brazil", "peru", "argentina", "aruba", "chile", "curacao", "falkland-islands", "suriname", "uruguay"],
  },
  "1xbet": {
    regions: ["europe", "south-america", "asia", "africa", "oceania", "north-america"],
    availableCountries: ["afghanistan", "albania", "algeria", "andorra", "angola", "argentina", "armenia", "aruba", "azerbaijan", "bahamas", "bahrain", "bangladesh", "barbados", "belarus", "belize", "benin", "bermuda", "bhutan", "bolivia", "bosnia-and-hercegovina", "botswana", "brazil", "brunei", "burkina-faso", "cambodia", "cameroon", "canada", "cape-verde", "cayman-islands", "chile", "china", "colombia", "democratic-republic-of-the-congo", "costa-rica", "croatia", "cuba", "denmark", "ecuador", "ethiopia", "egypt", "estonia", "faroe-islands", "fiji", "finland", "french-guiana", "french-polynesia", "gabon", "gambia", "georgia", "germany", "ghana", "gibraltar", "greece", "greenland", "grenada", "guatemala", "guernsey", "guinea", "guyana", "haiti", "honduras", "hong-kong", "hungary", "iceland", "indonesia", "iran", "ivory-coast", "jamaica", "japan", "jordan", "kazakhstan", "kenya", "kosovo", "kuwait", "kyrgyzstan", "laos", "latvia", "lebanon", "lesotho", "liberia", "libya", "liechtenstein", "lithuania", "luxembourg", "macau", "north-macedonia", "madagascar", "malawi", "malaysia", "maldives", "mali", "mexico", "micronesia", "moldova", "monaco", "mongolia", "montenegro", "morocco", "mozambique", "nepal", "new-zealand", "niger", "nigeria", "niue", "north-korea", "norway", "oman", "pakistan", "palestine", "panama", "paraguay", "peru", "philippines", "portugal", "puerto-rico", "qatar", "romania", "russia", "saint-martin", "san-marino", "saudi-arabia", "senegal", "serbia", "sierra-leone", "singapore", "slovenia", "solomon-islands", "somalia", "south-africa", "south-korea", "spain", "sri-lanka", "sudan", "suriname", "swaziland", "sweden", "switzerland", "syria", "taiwan", "tajikistan", "tanzania", "thailand", "tunisia", "turkey", "turkmenistan", "uganda", "ukraine", "united-arab-emirates", "uruguay", "uzbekistan", "vanuatu", "venezuela", "vietnam", "yemen", "zambia", "zimbabwe", "rwanda", "zimbabwe", "zambia", "uganda", "tunisia", "somalia", "sierra-leone", "niger", "mozambique", "mali", "malawi", "madagascar", "liberia", "lesotho", "guinea", "gabon", "gambia", "ethiopia", "cameroon", "burkina-faso", "botswana", "algeria", "angola", "tanzania", "ghana", "kenya", "nigeria", "south-africa", "egypt", "benin", "cape-verde", "djibouti", "mauritius", "morocco", "namibia", "democratic-republic-of-the-congo", "rwanda", "saint-helena", "sao-tome-and-principe", "senegal", "seychelles", "sudan", "swaziland", "western-sahara", "new-zealand", "american-samoa", "cook-islands", "fiji", "french-polynesia", "kiribati", "marshall-islands", "micronesia", "nauru", "new-caledonia", "niue", "northern-mariana-islands", "palau", "samoa", "solomon-islands", "tokelau", "tonga", "tuvalu", "vanuatu", "wallis-and-futuna"],
  },
  marathonbet: {
    regions: ["europe"],
    availableCountries: ["moldova", "kosovo", "faroe-islands", "azerbaijan", "albania", "svalbard-and-jan-mayen", "vatican", "san-marino", "norway", "monaco", "montenegro", "jersey", "isle-of-man", "guernsey", "andorra", "armenia", "bosnia-and-hercegovina", "croatia", "estonia", "finland", "georgia", "gibraltar", "iceland", "liechtenstein", "luxembourg", "malta", "russia", "slovenia", "switzerland", "ukraine", "jamaica", "honduras", "haiti", "bahamas", "barbados", "mexico", "costa-rica", "guatemala", "panama", "anguilla", "antigua-and-barbuda", "belize", "bermuda", "british-virgin-islands", "cayman-islands", "cuba", "dominica", "grenada", "montserrat", "saint-barthelemy", "saint-kitts-and-nevis", "saint-lucia", "saint-pierre-and-miquelon", "saint-vincent-and-the-grenadines", "saint-martin", "turks-and-caicos-islands", "venezuela", "paraguay", "guyana", "french-guiana", "ecuador", "colombia", "bolivia", "brazil", "peru", "argentina", "aruba", "chile", "curacao", "falkland-islands", "suriname", "uruguay", "yemen", "vietnam", "uzbekistan", "turkmenistan", "tajikistan", "syria", "sri-lanka", "pakistan", "nepal", "maldives", "laos", "kyrgyzstan", "kuwait", "kazakhstan", "jordan", "iran", "indonesia", "hong-kong", "cambodia", "bangladesh", "lebanon", "india", "macau", "malaysia", "philippines", "saudi-arabia", "south-korea", "thailand", "bahrain", "bhutan", "british-indian-ocean-territory", "brunei", "china", "christmas-island", "cocos-islands", "east-timor", "israel", "japan", "mongolia", "north-korea", "oman", "palestine", "pitcairn-islands", "qatar"],
  },
  pinnacle: {
    regions: ["europe", "north-america", "south-america", "asia", "africa"],
    availableCountries: ["afghanistan", "albania", "algeria", "andorra", "angola", "argentina", "armenia", "aruba", "australia", "azerbaijan", "bahamas", "bahrain", "bangladesh", "barbados", "belarus", "belgium", "belize", "benin", "bermuda", "bhutan", "bolivia", "bosnia-and-hercegovina", "botswana", "brazil", "brunei", "bulgaria", "burkina-faso", "cambodia", "cameroon", "canada", "cape-verde", "cayman-islands", "chile", "china", "colombia", "democratic-republic-of-the-congo", "costa-rica", "croatia", "cuba", "curacao", "cyprus", "czech-republic", "ecuador", "ethiopia", "egypt", "estonia", "falkland-islands", "faroe-islands", "fiji", "finland", "french-guiana", "french-polynesia", "gabon", "gambia", "georgia", "ghana", "gibraltar", "greece", "greenland", "grenada", "guatemala", "guernsey", "guinea", "guyana", "haiti", "honduras", "hong-kong", "india", "indonesia", "iran", "iraq", "ireland", "israel", "italy", "ivory-coast", "jamaica", "japan", "jordan", "kazakhstan", "kenya", "kosovo", "kuwait", "kyrgyzstan", "laos", "latvia", "lebanon", "lesotho", "liberia", "libya", "liechtenstein", "lithuania", "luxembourg", "macau", "north-macedonia", "madagascar", "malawi", "malaysia", "maldives", "mali", "malta", "mexico", "micronesia", "moldova", "monaco", "mongolia", "montenegro", "morocco", "mozambique", "nepal", "new-zealand", "nicaragua", "niger", "nigeria", "niue", "norway", "oman", "pakistan", "palestine", "panama", "paraguay", "peru", "philippines", "poland", "portugal", "puerto-rico", "qatar", "romania", "russia", "saint-martin", "san-marino", "saudi-arabia", "senegal", "serbia", "sierra-leone", "saint-martin", "slovakia", "slovenia", "solomon-islands", "somalia", "south-africa", "south-korea", "sri-lanka", "sudan", "suriname", "swaziland", "sweden", "switzerland", "taiwan", "tajikistan", "tanzania", "thailand", "tunisia", "turkmenistan", "uganda", "ukraine", "united-arab-emirates", "uruguay", "uzbekistan", "vanuatu", "venezuela", "vietnam", "zambia", "zimbabwe", "rwanda"],
  },
  betonline: {
    regions: ["north-america", "europe", "south-america", "asia", "africa", "oceania"],
    availableCountries: ["united-states", "canada", "australia", "afghanistan", "albania", "algeria", "american-samoa", "angola", "anguilla", "antigua-and-barbuda", "armenia", "aruba", "austria", "bahamas", "bahrain", "bangladesh", "barbados", "belarus", "belgium", "belize", "benin", "bermuda", "bhutan", "bolivia", "bosnia-and-hercegovina", "botswana", "brazil", "british-indian-ocean-territory", "british-virgin-islands", "brunei", "burkina-faso", "burundi", "cambodia", "cameroon", "cape-verde", "saint-martin", "cayman-islands", "central-african-republic", "chad", "chile", "china", "christmas-island", "colombia", "comoros", "democratic-republic-of-the-congo", "congo-brazzaville", "cook-islands", "costa-rica", "ivory-coast", "croatia", "cuba", "curacao", "czech-republic", "djibouti", "dominica", "ecuador", "egypt", "el-salvador", "equatorial-guinea", "eritrea", "estonia", "eswatini", "ethiopia", "falkland-islands", "faroe-islands", "fiji", "finland", "france", "french-guiana", "french-polynesia", "gabon", "gambia", "georgia", "germany", "ghana", "gibraltar", "greece", "greenland", "grenada", "guadeloupe", "guam", "guatemala", "guernsey", "guinea", "guinea-bissau", "guyana", "haiti", "honduras", "hong-kong", "hungary", "iceland", "india", "indonesia", "iran", "ireland", "isle-of-man", "italy", "israel", "jamaica", "japan", "jersey", "jordan", "kazakhstan", "kenya", "kiribati", "kosovo", "kuwait", "kyrgyzstan", "laos", "latvia", "lebanon", "lesotho", "liberia", "libya", "liechtenstein", "lithuania", "luxembourg", "macau", "north-macedonia", "madagascar", "malawi", "malaysia", "maldives", "mali", "malta", "marshall-islands", "martinique", "mauritius", "mayotte", "mexico", "micronesia", "moldova", "monaco", "mongolia", "montenegro", "montserrat", "morocco", "mozambique", "myanmar", "namibia", "nauru", "nepal", "netherlands", "new-caledonia", "new-zealand", "nicaragua", "niger", "nigeria", "norfolk-island", "north-korea", "northern-mariana-islands", "norway", "oman", "pakistan", "palau", "palestine", "panama", "papua-new-guinea", "paraguay", "peru", "philippines", "poland", "portugal", "puerto-rico", "qatar", "reunion", "romania", "russia", "rwanda", "saint-barthelemy", "saint-helena", "saint-kitts-and-nevis", "saint-lucia", "saint-martin", "saint-pierre-and-miquelon", "saint-vincent-and-the-grenadines", "samoa", "san-marino", "sao-tome-and-principe", "saudi-arabia", "senegal", "serbia", "seychelles", "sierra-leone", "singapore", "slovakia", "slovenia", "solomon-islands", "somalia", "south-africa", "south-korea", "south-sudan", "spain", "sri-lanka", "sudan", "suriname", "svalbard-and-jan-mayen", "sweden", "switzerland", "syria", "taiwan", "tajikistan", "thailand", "east-timor", "togo", "tokelau", "tonga", "trinidad-and-tobago", "tunisia", "turkey", "turkmenistan", "turks-and-caicos-islands", "tuvalu", "us-virgin-islands", "uganda", "ukraine", "united-arab-emirates", "united-kingdom", "united-states", "uruguay", "uzbekistan", "vanuatu", "vatican", "venezuela", "vietnam", "wallis-and-futuna", "western-sahara", "yemen", "zambia", "zimbabwe", "aland-islands"],
  },
  coolbet: {
    regions: ["europe", "north-america", "south-america"],
    availableCountries: ["canada", "chile", "ecuador", "estonia", "finland", "iceland", "mexico", "norway", "sweden"],
  },
  betsson: {
    regions: ["europe", "south-america"],
    availableCountries: ["spain", "france", "italy", "sweden", "brazil", "greece", "lithuania"],
  },
  nordicbet: {
    regions: ["europe"],
    availableCountries: ["sweden", "norway", "finland", "denmark", "czech-republic", "switzerland"],
  },
  leovegas: {
    regions: ["europe", "north-america", "south-america", "africa", "oceania", "asia"],
    availableCountries: ["united-kingdom", "malta", "sweden", "germany", "russia", "finland", "czech-republic", "netherlands", "italy", "spain", "norway", "denmark", "france", "brazil", "argentina", "mexico", "south-africa", "australia", "japan", "china", "india", "thailand", "new-zealand", "poland", "ireland", "switzerland", "belgium", "austria", "luxembourg"],
  },
  codere: {
    regions: ["europe", "south-america", "north-america"],
    availableCountries: ["spain", "italy", "argentina", "mexico", "panama", "colombia", "uruguay"],
  },
  tipico: {
    regions: ["europe"],
    availableCountries: ["germany", "austria", "belgium", "denmark", "italy", "malta", "netherlands", "sweden"],
  },
  winamax: {
    regions: ["europe", "north-america", "south-america", "africa", "asia"],
    availableCountries: ["albania", "andorra", "belarus", "bosnia-and-hercegovina", "spain", "iceland", "north-macedonia", "moldova", "liechtenstein", "luxembourg", "malta", "norway", "serbia", "slovenia", "turkey", "france", "finland", "croatia", "montenegro", "sweden", "argentina", "bahamas", "brazil", "dominican-republic", "canada", "costa-rica", "cuba", "mexico", "panama", "paraguay", "peru", "el-salvador", "uruguay", "chile", "ecuador", "armenia", "azerbaijan", "indonesia", "vietnam", "georgia", "israel", "cambodia", "kazakhstan", "kyrgyzstan", "mongolia", "malaysia", "maldives", "nepal", "united-arab-emirates", "singapore", "thailand", "tajikistan", "turkmenistan", "philippines", "sri-lanka", "uzbekistan", "south-korea", "egypt", "madagascar", "morocco", "south-africa"],
  },
  betclic: {
    regions: ["europe"],
    availableCountries: ["andorra", "angola", "armenia", "benin", "bolivia", "brazil", "burkina-faso", "cameroon", "canada", "chile", "congo-brazzaville", "democratic-republic-of-the-congo", "costa-rica", "croatia", "dominican-republic", "ecuador", "el-salvador", "finland", "france", "gabon", "gibraltar", "guatemala", "honduras", "hong-kong", "hungary", "iceland", "ireland", "italy", "ivory-coast", "japan", "kenya", "kiribati", "lebanon", "liechtenstein", "luxembourg", "north-macedonia", "madagascar", "malta", "mauritius", "mexico", "moldova", "monaco", "montenegro", "morocco", "mozambique", "netherlands", "new-zealand", "nicaragua", "norway", "panama", "peru", "poland", "san-marino", "senegal", "south-africa", "south-korea", "suriname", "switzerland", "togo", "trinidad-and-tobago", "tunisia", "ukraine", "venezuela"],
  },
  mybookie: {
    regions: ["north-america", "europe", "asia", "south-america", "africa", "oceania"],
    availableCountries: ["aland-islands","andorra","argentina","barbados","belize","bermuda","bolivia","botswana","brazil","canada","chile","colombia","croatia","czech-republic","dominica","ecuador","egypt","equatorial-guinea","falkland-islands","faroe-islands","georgia","germany","ghana","greenland","grenada","guatemala","guyana","haiti","honduras","iceland","italy","jamaica","japan","kenya","kosovo","laos","lesotho","liechtenstein","lithuania","luxembourg","macau","malaysia","mexico","micronesia","moldova","monaco","mongolia","mozambique","myanmar","namibia","new-zealand","nicaragua","nigeria","norway","panama","paraguay","peru","philippines","portugal","puerto-rico","qatar","democratic-republic-of-the-congo","saint-barthelemy","saint-kitts-and-nevis","saint-lucia","saint-vincent-and-the-grenadines","samoa","san-marino","senegal","singapore","slovakia","slovenia","solomon-islands","south-africa","sri-lanka","suriname","sweden","switzerland","taiwan","tanzania","thailand","tonga","trinidad-and-tobago","tunisia","united-states","uruguay","us-virgin-islands","venezuela","zambia","zimbabwe"],
  },
  pmu: {
    regions: ["europe"],
    availableCountries: ["france"],
  },
  "888sport": {
    regions: ["europe", "africa", "south-america", "asia", "north-america", "oceania"],
    availableCountries: ["aland-islands","andorra","angola","anguilla","antigua-and-barbuda","argentina","armenia","aruba","austria","azerbaijan","bahamas","bangladesh","barbados","belarus","belize","benin","bermuda","bhutan","bolivia","bosnia-and-hercegovina","botswana","brazil","british-indian-ocean-territory","british-virgin-islands","brunei","burkina-faso","burundi","cambodia","cameroon","canada","cape-verde","cayman-islands","central-african-republic","chad","chile","china","christmas-island","cocos-islands","colombia","comoros","congo-brazzaville","cook-islands","costa-rica","croatia","curacao","cyprus","czech-republic","djibouti","dominica","dominican-republic","east-timor","ecuador","egypt","el-salvador","equatorial-guinea","eritrea","estonia","ethiopia","falkland-islands","faroe-islands","fiji","finland","french-guiana","french-polynesia","gabon","gambia","georgia","ghana","gibraltar","greece","greenland","grenada","guadeloupe","guam","guatemala","guernsey","guinea","guinea-bissau","guyana","haiti","honduras","iceland","india","ireland","isle-of-man","jamaica","japan","jersey","jordan","kazakhstan","kenya","kiribati","kosovo","kyrgyzstan","laos","latvia","lebanon","lesotho","liberia","libya","liechtenstein","lithuania","luxembourg","madagascar","malawi","malaysia","maldives","mali","malta","marshall-islands","martinique","mauritius","mayotte","mexico","micronesia","moldova","monaco","mongolia","montenegro","montserrat","morocco","mozambique","myanmar","namibia","nauru","nepal","netherlands","new-caledonia","new-zealand","nicaragua","niger","nigeria","norfolk-island","north-korea","north-macedonia","norway","oman","pakistan","palau","palestine","panama","papua-new-guinea","paraguay","peru","pitcairn-islands","poland","portugal","qatar","democratic-republic-of-the-congo","reunion","rwanda","saint-barthelemy","saint-helena","saint-kitts-and-nevis","saint-lucia","saint-pierre-and-miquelon","saint-vincent-and-the-grenadines","samoa","san-marino","sao-tome-and-principe","saudi-arabia","senegal","seychelles","sierra-leone","slovakia","slovenia","solomon-islands","somalia","south-africa","sri-lanka","suriname","svalbard-and-jan-mayen","swaziland","sweden","switzerland","syria","taiwan","tajikistan","tanzania","togo","tokelau","tonga","trinidad-and-tobago","tunisia","turkmenistan","tuvalu","uganda","ukraine","united-arab-emirates","united-kingdom","uruguay","us-virgin-islands","uzbekistan","vanuatu","vatican","venezuela","vietnam","wallis-and-futuna","western-sahara","yemen","zambia","zimbabwe"],
  },
  williamhill: {
    regions: ["europe", "africa", "south-america", "asia", "north-america", "oceania"],
    availableCountries: ["aland-islands","andorra","anguilla","antigua-and-barbuda","argentina","aruba","austria","azerbaijan","bahamas","bangladesh","barbados","belize","bermuda","bhutan","bosnia-and-hercegovina","british-indian-ocean-territory","british-virgin-islands","brunei","burkina-faso","burundi","cambodia","canada","cape-verde","cayman-islands","chad","chile","cocos-islands","colombia","comoros","cook-islands","costa-rica","croatia","curacao","dominica","dominican-republic","east-timor","ecuador","egypt","el-salvador","equatorial-guinea","eritrea","ethiopia","falkland-islands","faroe-islands","fiji","finland","gabon","gambia","georgia","germany","ghana","gibraltar","greenland","grenada","guatemala","guernsey","guinea-bissau","guyana","honduras","iceland","india","ireland","isle-of-man","japan","jersey","jordan","kazakhstan","kiribati","kosovo","kuwait","kyrgyzstan","laos","lebanon","lesotho","liberia","liechtenstein","lithuania","luxembourg","macau","madagascar","malawi","malaysia","maldives","marshall-islands","mauritius","mexico","micronesia","moldova","monaco","mongolia","montenegro","montserrat","morocco","mozambique","myanmar","namibia","nauru","nepal","new-zealand","niger","norfolk-island","north-macedonia","oman","pakistan","palau","panama","papua-new-guinea","paraguay","peru","philippines","pitcairn-islands","poland","portugal","qatar","rwanda","saint-helena","saint-kitts-and-nevis","saint-lucia","saint-vincent-and-the-grenadines","samoa","san-marino","sao-tome-and-principe","senegal","seychelles","sierra-leone","slovakia","slovenia","solomon-islands","somalia","south-africa","sri-lanka","suriname","sweden","tajikistan","tanzania","togo","tokelau","tonga","trinidad-and-tobago","tunisia","turkmenistan","tuvalu","uganda","ukraine","united-arab-emirates","united-kingdom","uruguay","uzbekistan","vanuatu","vatican","wallis-and-futuna","western-sahara","zambia","zimbabwe"],
  },
  everygame: {
    regions: ["europe", "africa", "south-america", "asia", "north-america", "oceania"],
    availableCountries: ["aland-islands","turkey","serbia","portugal","moldova","kosovo","faroe-islands","azerbaijan","albania","north-macedonia","svalbard-and-jan-mayen","vatican","san-marino","norway","monaco","montenegro","jersey","isle-of-man","guernsey","andorra","italy","netherlands","sweden","armenia","belarus","belgium","bosnia-and-hercegovina","bulgaria","croatia","cyprus","czech-republic","denmark","estonia","finland","georgia","gibraltar","greece","hungary","iceland","ireland","latvia","liechtenstein","lithuania","luxembourg","malta","poland","romania","russia","slovenia","spain","switzerland","ukraine","us-virgin-islands","trinidad-and-tobago","martinique","guadeloupe","el-salvador","nicaragua","puerto-rico","jamaica","honduras","haiti","greenland","bahamas","barbados","mexico","united-states","costa-rica","guatemala","panama","anguilla","antigua-and-barbuda","belize","bermuda","british-virgin-islands","canada","cayman-islands","cuba","dominica","grenada","montserrat","saint-barthelemy","saint-kitts-and-nevis","saint-lucia","saint-pierre-and-miquelon","saint-vincent-and-the-grenadines","saint-martin","turks-and-caicos-islands","venezuela","paraguay","guyana","french-guiana","ecuador","colombia","bolivia","brazil","peru","argentina","aruba","chile","curacao","falkland-islands","suriname","uruguay","myanmar","iraq","yemen","vietnam","uzbekistan","turkmenistan","tajikistan","syria","sri-lanka","singapore","pakistan","nepal","maldives","laos","kyrgyzstan","kuwait","kazakhstan","jordan","iran","indonesia","hong-kong","cambodia","bangladesh","afghanistan","lebanon","india","macau","malaysia","philippines","saudi-arabia","south-korea","taiwan","thailand","united-arab-emirates","bahrain","bhutan","british-indian-ocean-territory","brunei","china","christmas-island","cocos-islands","east-timor","israel","japan","mongolia","north-korea","oman","palestine","pitcairn-islands","qatar","togo","south-sudan","reunion","guinea-bissau","eswatini","eritrea","equatorial-guinea","congo-brazzaville","comoros","chad","central-african-republic","burundi","zimbabwe","zambia","uganda","tunisia","somalia","sierra-leone","niger","mozambique","mali","malawi","madagascar","libya","liberia","lesotho","ivory-coast","guinea","gabon","gambia","ethiopia","cameroon","burkina-faso","botswana","algeria","angola","tanzania","ghana","kenya","nigeria","south-africa","egypt","benin","cape-verde","djibouti","mauritius","mayotte","morocco","namibia","democratic-republic-of-the-congo","rwanda","saint-helena","sao-tome-and-principe","senegal","seychelles","sudan","swaziland","western-sahara","papua-new-guinea","norfolk-island","guam","new-zealand","american-samoa","cook-islands","fiji","french-polynesia","kiribati","marshall-islands","micronesia","nauru","new-caledonia","niue","northern-mariana-islands","palau","samoa","solomon-islands","tokelau","tonga","tuvalu","vanuatu","wallis-and-futuna"],
  },
  netbet: {
    regions: ["europe", "africa", "south-america", "asia", "north-america", "oceania"],
    availableCountries: ["aland-islands","andorra","antigua-and-barbuda","armenia","azerbaijan","bahrain","bangladesh","belarus","belize","bermuda","bhutan","bosnia-and-hercegovina","brunei","canada","cape-verde","chile","colombia","comoros","cook-islands","costa-rica","croatia","curacao","czech-republic","dominica","dominican-republic","ecuador","egypt","el-salvador","equatorial-guinea","eritrea","ethiopia","falkland-islands","faroe-islands","fiji","finland","gabon","gambia","georgia","gibraltar","guatemala","guernsey","honduras","iceland","india","ireland","japan","jordan","kiribati","kosovo","kuwait","kyrgyzstan","laos","lebanon","lesotho","liberia","liechtenstein","luxembourg","madagascar","malawi","malaysia","maldives","marshall-islands","micronesia","moldova","monaco","montenegro","montserrat","namibia","nauru","new-zealand","niger","north-macedonia","oman","palau","panama","papua-new-guinea","paraguay","peru","pitcairn-islands","qatar","rwanda","saint-helena","saint-kitts-and-nevis","saint-lucia","saint-vincent-and-the-grenadines","samoa","san-marino","sao-tome-and-principe","seychelles","slovenia","solomon-islands","south-africa","sri-lanka","suriname","sweden","tajikistan","tanzania","togo","tokelau","tonga","tunisia","turkmenistan","tuvalu","ukraine","united-arab-emirates","uruguay","uzbekistan","vatican","zambia"],
  },

  atg: {
    regions: ["europe"],
    availableCountries: ["sweden"],
  },
  svenskaspel: {
    regions: ["europe"],
    availableCountries: ["sweden"],
  },
  campobet: {
    regions: ["europe"],
    availableCountries: ["sweden"],
  },
  hajper: {
    regions: ["europe"],
    availableCountries: ["sweden"],
  },
  mrgreen: {
    regions: ["europe", "africa", "south-america", "north-america", "asia"],
    availableCountries: ["andorra","antigua-and-barbuda","armenia","aruba","azerbaijan","bahamas","bahrain","barbados","belarus","bermuda","bolivia","bosnia-and-hercegovina","brunei","canada","cayman-islands","chile","costa-rica","croatia","curacao","dominica","dominican-republic","ecuador","egypt","el-salvador","faroe-islands","finland","georgia","gibraltar","grenada","guatemala","guernsey","guyana","honduras","iceland","ireland","isle-of-man","italy","jamaica","japan","jersey","jordan","kazakhstan","kenya","kosovo","kuwait","kyrgyzstan","latvia","lebanon","liechtenstein","lithuania","luxembourg","macau","malaysia","malta","mexico","moldova","monaco","montenegro","namibia","new-zealand","nicaragua","nigeria","north-macedonia","oman","pakistan","panama","papua-new-guinea","paraguay","peru","qatar","democratic-republic-of-the-congo","russia","saint-barthelemy","saint-helena","saint-kitts-and-nevis","saint-lucia","san-marino","senegal","seychelles","sierra-leone","slovakia","slovenia","south-korea","spain","sri-lanka","sweden","switzerland","taiwan","tajikistan","tanzania","trinidad-and-tobago","tunisia","turkmenistan","ukraine","united-arab-emirates","uzbekistan","venezuela","vietnam","western-sahara","zambia","zimbabwe"],
  },

  smarkets: {
    regions: ["europe"],
    availableCountries: ["united-kingdom", "gibraltar", "isle-of-man", "jersey", "guernsey", "ireland", "malta", "sweden"],
  },
  casumo: {
    regions: ["europe", "africa", "south-america", "north-america", "asia", "oceania"],
    availableCountries: ["aland-islands","argentina","armenia","aruba","azerbaijan","bahamas","bahrain","bangladesh","barbados","belarus","belize","benin","bermuda","bhutan","bolivia","bosnia-and-hercegovina","botswana","brazil","british-indian-ocean-territory","british-virgin-islands","brunei","burkina-faso","burundi","cambodia","cameroon","canada","cape-verde","cayman-islands","central-african-republic","chad","chile","colombia","comoros","congo-brazzaville","cook-islands","costa-rica","curacao","djibouti","dominica","dominican-republic","east-timor","ecuador","egypt","el-salvador","equatorial-guinea","ethiopia","falkland-islands","fiji","finland","france","gabon","gambia","georgia","germany","gibraltar","greece","greenland","guadeloupe","guam","guatemala","guernsey","guinea","guinea-bissau","haiti","honduras","iceland","india","ireland","isle-of-man","jamaica","jersey","jordan","kazakhstan","kenya","kiribati","kosovo","kuwait","kyrgyzstan","lebanon","lesotho","liechtenstein","luxembourg","madagascar","malawi","malaysia","maldives","mali","malta","marshall-islands","mauritius","mexico","micronesia","monaco","mongolia","morocco","mozambique","nauru","nepal","netherlands","new-zealand","niue","norway","oman","panama","papua-new-guinea","paraguay","peru","pitcairn-islands","poland","democratic-republic-of-the-congo","russia","rwanda","saint-helena","saint-kitts-and-nevis","saint-lucia","saint-vincent-and-the-grenadines","samoa","san-marino","sao-tome-and-principe","saudi-arabia","seychelles","solomon-islands","south-africa","suriname","svalbard-and-jan-mayen","swaziland","sweden","switzerland","tanzania","thailand","togo","tokelau","tonga","trinidad-and-tobago","tuvalu","ukraine","united-kingdom","uruguay","venezuela","vietnam","zambia"],
  },
  grosvenor: {
    regions: ["europe"],
    availableCountries: ["united-kingdom", "ireland", "guernsey", "jersey", "gibraltar", "isle-of-man"],
  },
  betfred: {
    regions: ["europe"],
    availableCountries: ["united-kingdom", "ireland", "gibraltar"],
  },
  coral: {
    regions: ["europe", "south-america", "north-america", "oceania"],
    availableCountries: ["slovenia", "albania", "argentina", "sweden", "belarus", "croatia", "czech-republic", "georgia", "saint-kitts-and-nevis", "gibraltar", "guernsey", "iceland", "luxembourg", "north-macedonia", "malta", "netherlands", "new-zealand", "ireland", "slovakia", "united-kingdom", "san-marino"],
  },
  betway: {
    regions: ["europe", "south-america", "north-america", "oceania", "asia", "africa"],
    availableCountries: ["albania","algeria","andorra","argentina","armenia","aruba","austria","azerbaijan","bahamas","bahrain","bangladesh","barbados","belarus","belgium","belize","benin","bermuda","bhutan","bolivia","botswana","brazil","brunei","burkina-faso","cambodia","cameroon","canada","cape-verde","cayman-islands","chile","china","congo-brazzaville","costa-rica","croatia","cuba","curacao","cyprus","czech-republic","denmark","ecuador","ethiopia","egypt","estonia","falkland-islands","faroe-islands","fiji","finland","french-guiana","french-polynesia","gabon","gambia","georgia","ghana","gibraltar","grenada","guatemala","guernsey","guinea","guyana","haiti","honduras","hong-kong","iceland","india","indonesia","ireland","italy","ivory-coast","jamaica","japan","jordan","kazakhstan","kosovo","kuwait","kyrgyzstan","latvia","lebanon","lesotho","liberia","libya","liechtenstein","luxembourg","macau","north-macedonia","madagascar","malawi","malaysia","maldives","mali","malta","micronesia","moldova","monaco","mongolia","montenegro","morocco","mozambique","nepal","netherlands","new-zealand","nicaragua","niger","niue","norway","oman","pakistan","palestine","panama","paraguay","peru","poland","portugal","puerto-rico","qatar","saint-martin","san-marino","saudi-arabia","senegal","serbia","sierra-leone","sint-maarten","slovakia","solomon-islands","somalia","south-africa","south-korea","spain","sudan","suriname","swaziland","sweden","taiwan","tajikistan","tanzania","turkmenistan","ukraine","united-arab-emirates","united-kingdom","uruguay","uzbekistan","venezuela","vietnam","zambia","zimbabwe","rwanda"],
  },
  paddypower: {
    regions: ["europe", "south-america", "north-america", "oceania", "asia", "africa"],
    availableCountries: ["ireland","united-kingdom","afghanistan","aland-islands","algeria","andorra","angola","anguilla","antigua-and-barbuda","argentina","armenia","austria","azerbaijan","bangladesh","belgium","belize","benin","bermuda","bhutan","bolivia","bosnia-and-hercegovina","botswana","brunei","bulgaria","burkina-faso","burundi","cambodia","cameroon","canada","cape-verde","cayman-islands","central-african-republic","chad","chile","china","hong-kong","christmas-island","cocos-islands","colombia","comoros","congo-brazzaville", "democratic-republic-of-the-congo","cook-islands","costa-rica","ivory-coast","croatia","cuba","cyprus","czech-republic","denmark","djibouti","dominica","dominican-republic","ecuador","egypt","el-salvador","equatorial-guinea","eritrea","estonia","ethiopia","falkland-islands","faroe-islands","fiji","finland","french-guiana","french-polynesia","gabon","gambia","georgia","germany","ghana","gibraltar","greece","greenland","grenada","guadeloupe","guam","guatemala","guernsey","guinea","guinea-bissau","guyana","haiti","honduras","hungary","iceland","india","indonesia","iran","iraq","isle-of-man","israel","italy","jamaica","japan","jersey","jordan","kazakhstan","kenya","kiribati","south-korea","north-korea","kuwait","kyrgyzstan","laos","latvia","lebanon","lesotho","liberia","libya","liechtenstein","lithuania","luxembourg","macau","north-macedonia","madagascar","malawi","malaysia","maldives","mali","malta","marshall-islands","martinique","mauritania","mauritius","mayotte","mexico","micronesia","moldova","monaco","mongolia","montenegro","montserrat","morocco","mozambique","myanmar","namibia","nauru","nepal","new-caledonia","new-zealand","nicaragua","niger","niue","norfolk-island","northern-mariana-islands","norway","oman","palau","panama","papua-new-guinea","paraguay","peru","philippines","pitcairn-islands","poland","portugal","puerto-rico","qatar","reunion","romania","russia","rwanda","saint-barthelemy","saint-helena","saint-kitts-and-nevis","saint-lucia","saint-martin","saint-pierre-and-miquelon","saint-vincent-and-the-grenadines","samoa","san-marino","sao-tome-and-principe","saudi-arabia","senegal","serbia","seychelles","sierra-leone","singapore","slovakia","slovenia","solomon-islands","somalia","south-africa","spain","sri-lanka","sudan","suriname","svalbard-and-jan-mayen","swaziland","sweden","switzerland","syria","taiwan","tajikistan","tanzania","thailand","east-timor","togo","tokelau","tonga","trinidad-and-tobago","turks-and-caicos-islands","tuvalu","uganda","ukraine","united-arab-emirates","uruguay","uzbekistan","vanuatu","vatican","venezuela", "british-virgin-islands","wallis-and-futuna","western-sahara","yemen","zambia","zimbabwe"],
  },
  betvictor: {
    regions: ["europe", "south-america", "north-america", "oceania", "asia", "africa"],
    availableCountries: ["aland-islands","kosovo","faroe-islands","azerbaijan","north-macedonia","svalbard-and-jan-mayen","san-marino","norway","montenegro","jersey","isle-of-man","guernsey","andorra","netherlands","sweden","austria","finland","georgia","germany","gibraltar","greece","ireland","liechtenstein","luxembourg","malta","russia","slovakia","slovenia","switzerland","united-kingdom","trinidad-and-tobago","martinique","guadeloupe","el-salvador","nicaragua","jamaica","honduras","haiti","greenland","bahamas","costa-rica","guatemala","anguilla","belize","bermuda","canada","cayman-islands","dominica","montserrat","saint-barthelemy","saint-kitts-and-nevis","saint-lucia","saint-pierre-and-miquelon","saint-vincent-and-the-grenadines","saint-martin","turks-and-caicos-islands","venezuela","paraguay","guyana","french-guiana","bolivia","argentina","aruba","curacao","falkland-islands","suriname","yemen","vietnam","tajikistan","sri-lanka","pakistan","nepal","maldives","laos","kyrgyzstan","kuwait","kazakhstan","jordan","indonesia","cambodia","lebanon","india","saudi-arabia","thailand","united-arab-emirates","bahrain","bhutan","british-indian-ocean-territory","brunei","china","christmas-island","cocos-islands","east-timor","japan","mongolia","oman","pitcairn-islands","qatar","togo","south-sudan","reunion","guinea-bissau","eswatini","eritrea","equatorial-guinea","congo-brazzaville","comoros","chad","central-african-republic","burundi","zimbabwe","tunisia","somalia","sierra-leone","niger","mozambique","mali","malawi","madagascar","libya","liberia","lesotho","guinea","gabon","gambia","ethiopia","burkina-faso","botswana","angola","tanzania","kenya","nigeria","south-africa","egypt","benin","cape-verde","djibouti","mauritius","mayotte","morocco","namibia","democratic-republic-of-the-congo","rwanda","saint-helena","sao-tome-and-principe","senegal","seychelles","swaziland","western-sahara","papua-new-guinea","norfolk-island","guam","new-zealand","american-samoa","cook-islands","french-polynesia","kiribati","marshall-islands","micronesia","nauru","new-caledonia","niue","northern-mariana-islands","palau","samoa","solomon-islands","tokelau","tuvalu","vanuatu","wallis-and-futuna"],
  },
  skybet: {
    regions: ["europe"],
    availableCountries: ["united-kingdom", "ireland"],
  },
  boylesports: {
    regions: ["europe", "asia", "oceania", "north-america", "south-america", "africa"],
    availableCountries: ["united-kingdom", "india", "georgia", "gambia", "bahamas", "austria", "argentina", "australia", "norway", "sweden", "finland", "ireland"],
  },
  virginbet: {
    regions: ["europe"],
    availableCountries: ["united-kingdom"],
  },
  livescorebet: {
    regions: ["europe"],
    availableCountries: ["united-kingdom", "gibraltar", "nigeria", "bulgaria"],
  },
  betfair_sportsbook: {
    regions: ["europe"],
    availableCountries: ["armenia", "austria", "australia", "belarus", "belgium", "bosnia-and-hercegovina", "brazil", "bulgaria", "costa-rica", "croatia", "cyprus", "czech-republic", "denmark", "egypt", "estonia", "finland", "georgia", "germany", "gibraltar", "greece", "guatemala", "hungary", "iceland", "ireland", "italy", "latvia", "liechtenstein", "lithuania", "luxembourg", "macau", "malaysia", "malta", "mexico", "netherlands", "new-zealand", "panama", "peru", "philippines", "poland", "romania", "russia", "saudi-arabia", "slovakia", "slovenia", "south-korea", "spain", "sweden", "switzerland", "taiwan", "thailand", "ukraine", "united-arab-emirates", "united-kingdom"],
  },

  lowvig: {
    regions: ["europe", "asia", "oceania", "north-america", "south-america", "africa"],
    availableCountries: ["united-states", "aland-islands","kosovo","faroe-islands","azerbaijan","north-macedonia","svalbard-and-jan-mayen","san-marino","norway","montenegro","jersey","isle-of-man","guernsey","andorra","netherlands","sweden","austria","finland","georgia","germany","gibraltar","greece","ireland","liechtenstein","luxembourg","russia","slovakia","slovenia","switzerland","united-kingdom","trinidad-and-tobago","martinique","guadeloupe","el-salvador","nicaragua","jamaica","honduras","haiti","greenland","bahamas","costa-rica","guatemala","anguilla","belize","bermuda","canada","cayman-islands","dominica","montserrat","saint-barthelemy","saint-kitts-and-nevis","saint-lucia","saint-pierre-and-miquelon","saint-vincent-and-the-grenadines","saint-martin","turks-and-caicos-islands","venezuela","paraguay","guyana","french-guiana","bolivia","argentina","aruba","curacao","falkland-islands","suriname","vietnam","tajikistan","sri-lanka","pakistan","nepal","maldives","laos","kyrgyzstan","kuwait","kazakhstan","jordan","indonesia","cambodia","lebanon","india","saudi-arabia","thailand","united-arab-emirates","bahrain","bhutan","british-indian-ocean-territory","brunei","china","christmas-island","cocos-islands","east-timor","japan","mongolia","oman","pitcairn-islands","qatar","togo","reunion","eswatini","equatorial-guinea","congo-brazzaville","comoros","chad","central-african-republic","burundi","zimbabwe","tunisia","sierra-leone","niger","mozambique","malawi","madagascar","liberia","lesotho","guinea","gabon","gambia","ethiopia","burkina-faso","botswana","angola","tanzania","kenya","nigeria","south-africa","egypt","benin","cape-verde","djibouti","mauritius","mayotte","morocco","namibia","democratic-republic-of-the-congo","rwanda","saint-helena","sao-tome-and-principe","senegal","seychelles","western-sahara","papua-new-guinea","norfolk-island","guam","new-zealand","american-samoa","cook-islands","french-polynesia","kiribati","marshall-islands","micronesia","nauru","new-caledonia","niue","northern-mariana-islands","palau","samoa","solomon-islands","tokelau","tuvalu","vanuatu","wallis-and-futuna","zambia"],
  },
  draftkings: {
    regions: ["north-america", "oceania", "europe"],
    availableCountries: ["united-states", "canada", "united-kingdom", "ireland", "germany", "france", "spain", "italy", "sweden", "norway", "australia", "new-zealand"],
  },
  bovada: {
    regions: ["north-america"],
    availableCountries: ["united-states"],
  },
  betus: {
    regions: ["north-america"],
    availableCountries: ["united-states"],
  },
  betrivers: {
    regions: ["north-america"],
    availableCountries: ["united-states", "canada"],
  },
  betmgm: {
    regions: ["north-america", "europe"],
    availableCountries: ["united-states", "united-kingdom", "canada"],
  },
  fanduel: {
    regions: ["north-america"],
    availableCountries: ["united-states"],
  },
  hardrockbet: {
    regions: ["north-america"],
    availableCountries: ["united-states"],
  },
  ballybet: {
    regions: ["north-america"],
    availableCountries: ["united-states"],
  },
  betparx: {
    regions: ["north-america"],
    availableCountries: ["united-states"],
  },
  thescorebet: {
    regions: ["north-america"],
    availableCountries: ["united-states", "canada"],
  },
};

export function isRegionSlug(value: string): value is RegionSlug {
  return value in REGION_LABELS;
}

export function isCountrySlug(value: string): value is CountrySlug {
  return value in COUNTRY_LABELS;
}

export function getCountryRegion(country: CountrySlug): RegionSlug | null {
  for (const [region, countries] of Object.entries(COUNTRIES_BY_REGION)) {
    if (countries.includes(country)) {
      return region as RegionSlug;
    }
  }
  return null;
}

export function getLocationHref(region?: RegionSlug, country?: CountrySlug) {
  if (region && country) return `/compare-bookmakers/${region}/${country}`;
  if (region) return `/compare-bookmakers/${region}`;
  return `/compare-bookmakers`;
}

export const REGION_SEARCH_ALIASES: Record<RegionSlug, string[]> = {
  europe: ["eu", "european"],
  "north-america": ["north america", "na", "usa", "us", "canada", "mexico"],
  "south-america": ["south america", "sa", "latam", "latin america", "latin-america"],
  asia: ["asian"],
  africa: ["african"],
  oceania: ["oceania", "australia", "anz"],
};

export const COUNTRY_SEARCH_ALIASES: Record<CountrySlug, string[]> = {
  sweden: ["se", "sverige"],

  "united-kingdom": [
    "uk",
    "u.k.",
    "britain",
    "great britain",
    "gb",
    "england",
  ],

  france: ["fr"],
  australia: ["au", "aus"],

  "united-states": [
    "usa",
    "us",
    "u.s.",
    "america",
  ],

  netherlands: ["nl", "holland"],
  germany: ["de", "deutschland"],
  italy: ["it"],
  brazil: ["br"],
  mexico: ["mx"],
  india: ["in"],
  nigeria: ["ng"],
  kenya: ["ke"],

  "south-africa": [
    "za",
    "rsa",
    "sa",
  ],

  armenia: ["am", "arm"],
  austria: ["at"],
  belarus: ["by"],
  belgium: ["be"],

  "bosnia-and-hercegovina": [
    "ba",
    "bosnia",
  ],

  bulgaria: ["bg"],

  "costa-rica": [
    "cr",
  ],

  croatia: ["hr"],
  cyprus: ["cy"],

  "czech-republic": [
    "cz",
    "czechia",
  ],

  denmark: ["dk"],
  egypt: ["eg"],
  estonia: ["ee"],
  finland: ["fi"],
  georgia: ["ge"],
  gibraltar: ["gi"],
  greece: ["gr"],
  guatemala: ["gt"],
  hungary: ["hu"],
  iceland: ["is"],
  ireland: ["ie"],
  latvia: ["lv"],
  liechtenstein: ["li"],
  lithuania: ["lt"],
  luxembourg: ["lu"],
  macau: ["mo"],
  malaysia: ["my"],
  malta: ["mt"],

  "new-zealand": [
    "nz",
  ],

  panama: ["pa"],
  peru: ["pe"],
  philippines: ["ph"],
  poland: ["pl"],
  romania: ["ro"],
  russia: ["ru"],

  "saudi-arabia": [
    "sa",
    "ksa",
  ],

  slovakia: ["sk"],
  slovenia: ["si"],

  "south-korea": [
    "kr",
    "korea",
    "south korea",
  ],

  spain: ["es"],
  switzerland: ["ch"],
  taiwan: ["tw"],
  thailand: ["th"],
  ukraine: ["ua"],

  "united-arab-emirates": [
    "ae",
    "uae",
  ],

    anguilla: ["ai"],
  "antigua-and-barbuda": ["ag"],
  belize: ["bz"],
  bermuda: ["bm"],
  "british-virgin-islands": ["vg"],
  canada: ["ca"],
  "cayman-islands": ["ky"],
  cuba: ["cu"],
  dominica: ["dm"],
  grenada: ["gd"],
  montserrat: ["ms"],

  "saint-barthelemy": [
    "bl",
    "st barthelemy",
    "saint barthelemy",
  ],

  "saint-kitts-and-nevis": [
    "kn",
    "st kitts",
  ],

  "saint-lucia": [
    "lc",
    "st lucia",
  ],

  "saint-pierre-and-miquelon": ["pm"],

  "saint-vincent-and-the-grenadines": [
    "vc",
    "st vincent",
  ],

  "saint-martin": [
    "sx",
    "sint-maarten"
  ],

  "turks-and-caicos-islands": [
    "tc",
    "turks and caicos",
  ],

  argentina: ["ar"],
  aruba: ["aw"],
  chile: ["cl"],
  curacao: ["cw"],

  "falkland-islands": [
    "fk",
    "malvinas",
  ],

  suriname: ["sr"],
  uruguay: ["uy"],

  andorra: ["ad"],
  guernsey: ["gg"],

  "isle-of-man": [
    "im",
    "iom",
  ],

  jersey: ["je"],
  monaco: ["mc"],
  montenegro: ["me"],
  norway: ["no"],

  "san-marino": ["sm"],

  "svalbard-and-jan-mayen": ["sj"],

  vatican: [
    "va",
    "vatican city",
  ],

  "american-samoa": ["as"],
  "cook-islands": ["ck"],
  fiji: ["fj"],

  "french-polynesia": ["pf"],
  kiribati: ["ki"],
  "marshall-islands": ["mh"],

  micronesia: [
    "fm",
    "fsm",
  ],

  nauru: ["nr"],
  "new-caledonia": ["nc"],
  niue: ["nu"],
  "northern-mariana-islands": ["mp"],
  palau: ["pw"],
  samoa: ["ws"],
  "solomon-islands": ["sb"],
  tokelau: ["tk"],
  tonga: ["to"],
  tuvalu: ["tv"],
  vanuatu: ["vu"],
  "wallis-and-futuna": ["wf"],

  bahrain: ["bh"],
  bhutan: ["bt"],

  "british-indian-ocean-territory": ["io"],

  brunei: ["bn"],
  china: ["cn"],

  "christmas-island": ["cx"],
  "cocos-islands": [
    "cc",
    "cocos keeling islands",
  ],

  "east-timor": [
    "tl",
    "timor-leste",
  ],

  israel: ["il"],
  japan: ["jp"],
  mongolia: ["mn"],

  "north-korea": [
    "kp",
    "dprk",
  ],

  oman: ["om"],
  palestine: ["ps"],

  "pitcairn-islands": ["pn"],

  qatar: ["qa"],

  "north-macedonia": [
    "mk",
    "macedonia",
  ],

  benin: ["bj"],

  "cape-verde": [
    "cv",
    "cabo verde",
  ],

  djibouti: ["dj"],
  mauritius: ["mu"],
  mayotte: ["yt"],
  morocco: ["ma"],
  namibia: ["na"],

  "democratic-republic-of-the-congo": [
    "cd",
    "congo",
  ],

  rwanda: ["rw"],
  "saint-helena": ["sh"],

  "sao-tome-and-principe": [
    "st",
    "sao tome",
  ],

  senegal: ["sn"],
  seychelles: ["sc"],
  sudan: ["sd"],

  swaziland: [
    "sz",
    "eswatini",
  ],

  "western-sahara": ["eh"],

  barbados: ["bb"],
  ghana: ["gh"],
  lebanon: ["lb"],
  tanzania: ["tz"],

  afghanistan: ["af"],
  albania: ["al"],
  algeria: ["dz"],
  angola: ["ao"],
  azerbaijan: ["az"],
  bahamas: ["bs"],
  bangladesh: ["bd"],
  bolivia: ["bo"],
  botswana: ["bw"],

  "burkina-faso": ["bf"],

  cambodia: ["kh"],
  cameroon: ["cm"],
  colombia: ["co"],
  ecuador: ["ec"],
  ethiopia: ["et"],

  "faroe-islands": ["fo"],
  "french-guiana": ["gf"],

  gabon: ["ga"],
  gambia: ["gm"],
  greenland: ["gl"],
  guinea: ["gn"],
  guyana: ["gy"],
  haiti: ["ht"],
  honduras: ["hn"],

  "hong-kong": [
    "hk",
    "hong kong",
  ],

  indonesia: ["id"],
  iran: ["ir"],

  "ivory-coast": [
    "ci",
    "cote d'ivoire",
    "cote divoire",
  ],

  jamaica: ["jm"],
  jordan: ["jo"],
  kazakhstan: ["kz"],
  kosovo: ["xk"],

  kuwait: ["kw"],
  kyrgyzstan: ["kg"],
  laos: ["la"],
  lesotho: ["ls"],
  liberia: ["lr"],
  libya: ["ly"],
  madagascar: ["mg"],
  malawi: ["mw"],
  maldives: ["mv"],
  mali: ["ml"],
  moldova: ["md"],
  mozambique: ["mz"],
  nepal: ["np"],
  niger: ["ne"],
  pakistan: ["pk"],
  paraguay: ["py"],
  portugal: ["pt"],

  "puerto-rico": [
    "pr",
    "puerto rico",
  ],

  serbia: ["rs"],

  "sierra-leone": ["sl"],

  singapore: ["sg"],
  somalia: ["so"],

  "sri-lanka": [
    "lk",
    "sri lanka",
  ],

  syria: ["sy"],
  tajikistan: ["tj"],
  tunisia: ["tn"],
  turkey: ["tr"],
  turkmenistan: ["tm"],
  uganda: ["ug"],
  uzbekistan: ["uz"],
  venezuela: ["ve"],
  vietnam: ["vn"],
  yemen: ["ye"],
  zambia: ["zm"],
  zimbabwe: ["zw"],
  iraq: ["iq"],
  nicaragua: ["ni"],

  burundi: ["bi"],

  "central-african-republic": [
    "cf",
    "car",
  ],

  chad: ["td"],
  comoros: ["km"],

  "congo-brazzaville": [
    "cg",
    "republic of the congo",
    "brazzaville",
    "congo",
  ],

  "el-salvador": [
    "sv",
    "el salvador",
  ],

  "equatorial-guinea": ["gq"],
  eritrea: ["er"],

  eswatini: [
    "sz",
    "swaziland",
  ],

  guadeloupe: ["gp"],
  guam: ["gu"],

  "guinea-bissau": [
    "gw",
    "guinea bissau",
  ],

  martinique: ["mq"],
  myanmar: [
    "mm",
    "burma",
  ],

  "norfolk-island": ["nf"],

  "papua-new-guinea": [
    "pg",
    "png",
  ],

  reunion: [
    "re",
    "réunion",
  ],

  "south-sudan": ["ss"],
  togo: ["tg"],

  "trinidad-and-tobago": [
    "tt",
    "trinidad",
  ],

  "us-virgin-islands": [
    "vi",
    "usvi",
  ],

  "aland-islands": [
    "ax",
    "åland",
    "aland",
  ],

  "dominican-republic": ["do"],
  "sint-maarten": ["sx"],
  "mauritania": ["mr"]
};
