import { ConfigService } from './config-service'
import { client } from './coinbase-client-service';
import fetch from 'node-fetch';
import { Injectable, NgModule } from "@angular/core";

@Injectable()
@NgModule()
export class RequestService {

  constructor(
    private readonly configService: ConfigService
  ) {}

  getSpotPrice(currencyPair) {
    client.getSpotPrice({'currencyPair': currencyPair}, function(err, res) {
        return res;
    });
  }

  getSpotPrices(pairs) {
    pairs.forEach(pair => {
        this.getSpotPrice(pair);
    });
  }

  getProductData(pair) {
    fetch(this.configService.getCBProUrl() + 'products/' + pair)
        .then(data => {
            return data.json()
        })
        .then(res => {
            return res;
        });
  }

  getProductsData(pairs) {
    pairs.forEach(pair => {
        this.getProductData(pair);
    })
  }
}
