import { COINBASE_PRO_API_URL, pairs } from './config-service'
import { client } from './coinbase-client-service';
import fetch from 'node-fetch';
import { saveToJson } from './file-writer-service';

function getSpotPrice(currencyPair) {
    client.getSpotPrice({'currencyPair': currencyPair}, function(err, res) {
        saveToJson('prices/', currencyPair, res);
        console.log('Spot price data for ' + currencyPair + ' has been fetched and saved to file');
    });
}

function getSpotPrices(pairs) {
    pairs.forEach(pair => {
        getSpotPrice(pair);
    });
}

function getProductData(pair) {
    fetch(COINBASE_PRO_API_URL + 'products/' + pair)
        .then(data => {
            return data.json()
        })
        .then(res => {
            saveToJson('products/', pair, res);
            console.log('Product data for ' + pair + ' has been fetched and saved to file')
        });
}

function getProductsData(pairs) {
    pairs.forEach(pair => {
        getProductData(pair);
    })
}

getSpotPrices(pairs);
getProductsData(pairs);
