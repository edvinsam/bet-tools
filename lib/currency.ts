export type CurrencyCode =
  | "USD"
  | "EUR"
  | "GBP"
  | "SEK"
  | "CAD"
  | "AUD"
  | "NZD"
  | "JPY"
  | "CNY"
  | "HKD"
  | "SGD"
  | "INR"
  | "CHF"
  | "NOK"
  | "DKK"
  | "PLN"
  | "CZK"
  | "HUF"
  | "TRY"
  | "BRL"
  | "MXN"
  | "ZAR"
  | "KRW"
  | "THB"
  | "MYR"
  | "IDR"
  | "PHP"
  | "VND";

export type CurrencyOption = {
  value: CurrencyCode;
  label: string;
};

export const currencyOptions: CurrencyOption[] = [
  { value: "USD", label: "USD — US Dollar ($)" },
  { value: "EUR", label: "EUR — Euro (€)" },
  { value: "GBP", label: "GBP — British Pound (£)" },
  { value: "SEK", label: "SEK — Swedish Krona (kr)" },

  { value: "CAD", label: "CAD — Canadian Dollar ($)" },
  { value: "AUD", label: "AUD — Australian Dollar ($)" },
  { value: "NZD", label: "NZD — New Zealand Dollar ($)" },

  { value: "JPY", label: "JPY — Japanese Yen (¥)" },
  { value: "CNY", label: "CNY — Chinese Yuan (¥)" },
  { value: "HKD", label: "HKD — Hong Kong Dollar ($)" },
  { value: "SGD", label: "SGD — Singapore Dollar ($)" },

  { value: "INR", label: "INR — Indian Rupee (₹)" },

  { value: "CHF", label: "CHF — Swiss Franc" },
  { value: "NOK", label: "NOK — Norwegian Krone (kr)" },
  { value: "DKK", label: "DKK — Danish Krone (kr)" },

  { value: "PLN", label: "PLN — Polish Zloty" },
  { value: "CZK", label: "CZK — Czech Koruna" },
  { value: "HUF", label: "HUF — Hungarian Forint" },

  { value: "TRY", label: "TRY — Turkish Lira" },

  { value: "BRL", label: "BRL — Brazilian Real" },
  { value: "MXN", label: "MXN — Mexican Peso" },
  { value: "ZAR", label: "ZAR — South African Rand" },

  { value: "KRW", label: "KRW — South Korean Won" },
  { value: "THB", label: "THB — Thai Baht" },
  { value: "MYR", label: "MYR — Malaysian Ringgit" },
  { value: "IDR", label: "IDR — Indonesian Rupiah" },
  { value: "PHP", label: "PHP — Philippine Peso" },
  { value: "VND", label: "VND — Vietnamese Dong" },
];

export function formatMoney(value: number, currency: CurrencyCode): string {
  const localeMap: Record<CurrencyCode, string> = {
    USD: "en-US",
    EUR: "de-DE",
    GBP: "en-GB",
    SEK: "sv-SE",

    CAD: "en-CA",
    AUD: "en-AU",
    NZD: "en-NZ",

    JPY: "ja-JP",
    CNY: "zh-CN",
    HKD: "zh-HK",
    SGD: "en-SG",

    INR: "en-IN",

    CHF: "de-CH",
    NOK: "nb-NO",
    DKK: "da-DK",

    PLN: "pl-PL",
    CZK: "cs-CZ",
    HUF: "hu-HU",

    TRY: "tr-TR",

    BRL: "pt-BR",
    MXN: "es-MX",
    ZAR: "en-ZA",

    KRW: "ko-KR",
    THB: "th-TH",
    MYR: "ms-MY",
    IDR: "id-ID",
    PHP: "en-PH",
    VND: "vi-VN",
    };

  return new Intl.NumberFormat(localeMap[currency], {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}