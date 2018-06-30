export class BlockTransaction {
    id: number;
    amount: number;
    from: string;
    to: string;

    constructor(id: number, amount: number, from: string, to: string) {
        this.id = id;
        this.amount = amount;
        this.from = from;
        this.to = to;
    }
}
