import { Balance } from 'app/src/networking/apis/ApiBalance';
import { UPDATE_BALANCE } from './types';

export interface UpdateBalanceProps {
	type: UPDATE_BALANCE;
	balance: Balance;
}

export const UpdateBalance = (balance: Balance): UpdateBalanceProps => ({
	type: UPDATE_BALANCE,
	balance,
});
