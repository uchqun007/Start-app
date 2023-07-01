import {
	Box,
	Button,
	Checkbox,
	Flex,
	FormControl,
	FormLabel,
	HStack,
	Heading,
	Icon,
	Input,
	InputGroup,
	InputRightElement,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { RegisterProps } from './register.props';
import useShowPassword from '@/hooks/useShowPassword';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { allActions } from '@/store/root-action';
import { useActions } from '@/hooks/useActions';
import { Formik, Form } from 'formik';
import TextField from '../text-field/text-field';

export default function Register({ onNavigationStateComponent }: RegisterProps) {
	const { show, toggleShow, toggleShowConfirm, showConfirm } = useShowPassword();
	const { t } = useTranslation();
	const { register } = useActions();

	const onSubmit = () => {
		register({ email: 'test12345@gmail.com', password: '1234567' });
	};
	return (
		<Stack spacing={4}>
			<Heading
				color={useColorModeValue('gray.900', 'gray.200')}
				lineHeight={1.1}
				fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
			>
				{t('register_title', { ns: 'global' })}
				<Text as={'span'} bgGradient='linear(ro-r, gray.400, facebook.400)' bgClip={'text'}>
					!
				</Text>
			</Heading>
			<Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
				{t('register_description', { ns: 'global' })}
			</Text>
			<Formik onSubmit={onSubmit} initialValues={{ email: '', password: '', confirmPassword: '' }}>
				<Form>
					<TextField
						name='email'
						type='text'
						label={t('login_input_password_label', { ns: 'global' })}
						placeholder={'info@gmail.com'}
					/>

					<Flex gap={4}>
						<TextField
							name='password'
							label={t('login_input_password_label', { ns: 'global' })}
							type={!show ? 'password' : 'text'}
							placeholder={'****'}
						>
							<InputRightElement pt={4}>
								<Icon fontSize={'xl'} as={!show ? AiOutlineEye : AiOutlineEyeInvisible} cursor={'pointer'} onClick={toggleShow} />
							</InputRightElement>
						</TextField>

						<TextField
							name='confirmPassword'
							label={t('register_input_confirm_password_label', { ns: 'global' })}
							type={!showConfirm ? 'password' : 'text'}
							placeholder='****'
						>
							<InputRightElement pt={4}>
								<Icon
									fontSize={'xl'}
									as={!showConfirm ? AiOutlineEye : AiOutlineEyeInvisible}
									cursor={'pointer'}
									onClick={toggleShowConfirm}
								/>
							</InputRightElement>
						</TextField>
					</Flex>
				</Form>
			</Formik>

			<HStack justify={'space-between'}>
				<Checkbox colorScheme={'facebook'}>{t('register_btn', { ns: 'global' })}</Checkbox>
				<Box
					as={'a'}
					onClick={() => onNavigationStateComponent('account-recovery')}
					cursor={'pointer'}
					color={'teal.500'}
					_hover={{ textDecoration: 'underline' }}
				>
					{t('auth_forgot_password', { ns: 'global' })}
				</Box>
			</HStack>
			<Button
				mt={4}
				w={'full'}
				bgGradient='linear(to-r, facebook.400, gray.400)'
				color={'white'}
				_hover={{ bgGradient: 'linear(to-r, facebook.500, gray.500)', boxShadow: 'xl' }}
				h={14}
				onClick={onSubmit}
			>
				{t('register_btn', { ns: 'global' })}
			</Button>
			<Text>
				Allready have an account{' '}
				<Box
					onClick={() => onNavigationStateComponent('login')}
					as={'span'}
					color={'teal.500'}
					cursor={'pointer'}
					_hover={{ textDecor: 'underline' }}
				>
					Login
				</Box>
			</Text>
		</Stack>
	);
}
