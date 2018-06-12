import * as CryptoJS from 'crypto-js';

export class Block {
    index: number;
    data: string;
    previouseHash: string;
    timestamp: string;

    constructor(index: number, timestamp: string, data: string,  previouseHash = '0') {
        this.index = index;
        this.data = data;
        this.timestamp = timestamp;
        this.previouseHash = previouseHash;
    }


    calculateHash(nonce: number = 0): string {
        return CryptoJS.SHA256(this.index + this.timestamp + this.previouseHash + JSON.stringify(this.data) + nonce).toString();
    }
}
