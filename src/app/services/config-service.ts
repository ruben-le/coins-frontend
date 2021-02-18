// Prod URL: 'https://api.pro.coinbase.com/v2/'
const COINBASE_PRO_API_URL = 'https://api-public.sandbox.pro.coinbase.com/';

const BTCUSD = 'BTC-USD';
const BTCEUR = 'BTC-EUR';
const ETHUSD = 'ETH-USD';
const ETHEUR = 'ETH-EUR';
const LTCUSD = 'LTC-USD';
const LTCEUR = 'LTC-EUR';

const pairs = [
  BTCUSD,
  BTCEUR,
  ETHUSD,
  ETHEUR,
  LTCUSD,
  LTCEUR
]

const sandboxAuth = {
  COINBASE_API_KEY: "",
  COINBASE_API_SECRET: "",
  COINBASE_PRO_API_KEY: "3d5719a2e0561bd0fb51804f3b06ae91",
  COINBASE_PRO_API_SECRET: "eF22DM1EPbPpuiYcJDGK0r2UImY1AjpwfcmTR2X35pnEbh8NwVQtlaLc+OsDDH2X9/4Khxk0+kqIJdsVom/lKQ==",
  COINBASE_PRO_API_PASSPHRASE: "80j9lnillln"
}

/**
 * Gets authentication data from config.json
 * @returns Object with parameters: COINBASE_API_KEY, COINBASE_API_SECRET, COINBASE_PRO_API_KEY, COINBASE_PRO_API_SECRET, COINBASE_PRO_API_PASSPHRASE,
 */
function getAuth() {
  // Returns Sandbox auth data
  return sandboxAuth;
}

export {
  COINBASE_PRO_API_URL,
  pairs,
  getAuth
}
