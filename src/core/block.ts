import * as CryptoJS from 'crypto-js';

export class Block {
    public Data: string;
    public Hash: string;
    public PreviouseHash: string;
    public Nonce: number;

    difficulty = 4;
    index: number;
    timestamp: string;

    constructor(index: number, timestamp: string, data: string, nonce: number, previouseHash = '0') {
        this.index = index;
        this.Data = data;
        this.timestamp = timestamp;
        this.PreviouseHash = previouseHash;
        this.Nonce = nonce;
    }

    ProofOfWork() {
        this.CalculateHash();
        this.Nonce = 0;
        while (!this.IsMeetDifficulty()) {
            this.Nonce++;
            this.CalculateHash();
        }
    }

    CalculateHash() {
        this.Hash = CryptoJS.SHA256(this.index + this.timestamp + this.PreviouseHash + JSON.stringify(this.Data) + this.Nonce).toString();
    }

    IsMeetDifficulty(): boolean {
        return this.Hash.substring(0, this.difficulty) === Array(this.difficulty + 1).join('0');
    }
}
