import { Balance } from 'app/src/networking/apis/ApiBalance';
import { UPDATE_BALANCE } from 'app/src/store/actions/types';
import { UpdateBalanceProps } from 'app/src/store/actions';

const initialState: Balance = {
	balance: 0,
	card: {
		bank: '',
		cvv: '',
		date: '1/1/1900',
		name: '',
		number: '',
		type: '',
	},
	spending: 0,
	spendingLimit: 0,
};

export default function (state = initialState, action: UpdateBalanceProps) {
	switch (action.type) {
		case UPDATE_BALANCE:
			return action.balance;

		default:
			return state;
	}
}
