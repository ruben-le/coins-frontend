import {Injectable, NgModule} from "@angular/core";

@Injectable()
@NgModule()
export class ConfigService {

  private isSandbox = true;

  /**
   * Gets authentication data from config.json
   * @returns Object with parameters: COINBASE_API_KEY, COINBASE_API_SECRET, COINBASE_PRO_API_KEY, COINBASE_PRO_API_SECRET, COINBASE_PRO_API_PASSPHRASE,
   */
  getAuth() {
    if (this.isSandbox) {
      return {
        COINBASE_API_KEY: "",
        COINBASE_API_SECRET: "",
        COINBASE_PRO_API_KEY: "3d5719a2e0561bd0fb51804f3b06ae91",
        COINBASE_PRO_API_SECRET: "eF22DM1EPbPpuiYcJDGK0r2UImY1AjpwfcmTR2X35pnEbh8NwVQtlaLc+OsDDH2X9/4Khxk0+kqIJdsVom/lKQ==",
        COINBASE_PRO_API_PASSPHRASE: "80j9lnillln"
      };
    } else {
      return this.getAuthFromConfig();
    }
  }

  getAuthFromConfig() {
    return {};
  }

  getCBProUrl() {
    if (this.isSandbox) {
      return 'https://api-public.sandbox.pro.coinbase.com/';
    } else {
      return 'https://api.pro.coinbase.com/v2/';
    }
  }

  getPairs() {
    return [
      'BTC-USD',
      'BTC-EUR',
      'ETH-USD',
      'ETH-EUR',
      'LTC-USD',
      'LTC-EUR'
    ]
  }
}
