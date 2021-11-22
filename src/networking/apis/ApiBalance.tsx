export interface Card {
	bank: string;
	name: string;
	number: string;
	date: string;
	cvv: string;
	type: string;
}

export interface Balance {
	balance: number;
	spendingLimit: number;
	spending: number;
	card: Card;
}

export interface SpendingLimit {
	spendingLimit: number;
}

class ApiBalance {
	spendingLimit: number;

	private static instance: ApiBalance;

	constructor() {
		this.spendingLimit = 0;
	}

	public static getInstance(): ApiBalance {
		if (!ApiBalance.instance) {
			ApiBalance.instance = new ApiBalance();
		}
		return ApiBalance.instance;
	}

	public getBalance(): Balance {
		return {
			balance: 3000,
			spending: 500,
			spendingLimit: this.spendingLimit,
			card: {
				bank: 'abc',
				name: 'Mark Henry',
				number: '5647 3411 2413 2020',
				date: '11/22/2020',
				cvv: '456',
				type: 'visa',
			},
		};
	}

	public setSpendingLimit(spendingLimit: number): Balance {
		this.spendingLimit = spendingLimit;
		return {
			balance: 3000,
			spending: 500,
			spendingLimit: spendingLimit,
			card: {
				bank: 'abc',
				name: 'Mark Henry',
				number: '5647 3411 2413 2020',
				date: '11/22/2020',
				cvv: '456',
				type: 'visa',
			},
		};
	}
}

export default ApiBalance;
