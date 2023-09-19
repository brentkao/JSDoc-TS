class Account {
    nickname?: string;

    constructor(
        private readonly id: number, 
        public owner: string, 
        private _balance: number) {

    }

    deposit(amount: number): void {
        if (amount <= 0) throw new Error("Invalid amount");

        this._balance += amount;
    }

    // private calculateTax():Account {
    //     this.id;
    //     return this
    // }

    get balance(): number {
        this.id;
        return this._balance;
    }

    set balance(value: number){
        if (value <0 ) 
            throw new Error('Invalid value');

        this._balance = value
    }
}

let account = new Account(1, "Ko", 0);
console.log(account.balance);
account.balance = 4
