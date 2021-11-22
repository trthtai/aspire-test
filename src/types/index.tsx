import { Balance } from 'app/src/networking/apis/ApiBalance';

export type RootStackParamList = {
	Debit: undefined;
	SpendingLimit: undefined;
};

export interface ApplicationState {
	balance: Balance;
}
