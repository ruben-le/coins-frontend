// import { client } from './coinbase-client-service';
import { Injectable, NgModule } from "@angular/core";
import * as crypto from 'crypto-js';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Position } from "../models/position";
import { Observable } from "rxjs";
import {
  COINBASE_PRO_API_URL,
  getAuth,
} from "./config-service";

declare const Buffer;

@Injectable()
@NgModule()
export class PortfolioStructureService {

  private readonly auth;

  constructor(
    private readonly http: HttpClient
  ) {
    this.auth = getAuth();
  }

  /*
  Functionality for regular Coinbase

  getCBAccounts() {
    client.getAccounts({}, function (err, res) {
      saveToJson('accounts/coinbase/', 'CB_Account_Data', res);
      console.log('Accounts data has been fetched and saved to file')
    });
  }
   */

  getCBProAccounts(): Observable<Position[]> {
    return this.http.get<Position[]>(
      COINBASE_PRO_API_URL + 'accounts',
      {
        headers:
          this.getRequestHeaders(
            'GET',
            '/accounts',
            {}
          )
      }
    );
  }

  getRequestHeaders(method, requestPath, body) {
    let timestamp = String(Date.now() / 1000);
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'CB-ACCESS-KEY': this.auth.COINBASE_PRO_API_KEY,
      'CB-ACCESS-SIGN': this.createSignature(method, requestPath, body, timestamp),
      'CB-ACCESS-TIMESTAMP': timestamp,
      'CB-ACCESS-PASSPHRASE': this.auth.COINBASE_PRO_API_PASSPHRASE
    });
  }

  createSignature(method, requestPath, body, timestamp) {
    if (!body) body = '';
    let hash = timestamp + method + requestPath + body;
    let key = Buffer.from(this.auth.COINBASE_PRO_API_SECRET, 'base64').toString();
    return crypto.HmacSHA256(hash, key).toString(crypto.enc.Base64);
  }
}
