import { UserType } from '@/interfaces/user.interfaces';

export interface UserInitialStateType {
	user: UserType | null;
	isLoading: boolean;
}

export interface AuthTokens {
	refreshToken: string;
	accessToken: string;
}

export interface AuthUserResponse extends AuthTokens {
	user: UserType;
}

export interface InterfacesEmailAndPassword {
	password: string;
	email: string;
}
