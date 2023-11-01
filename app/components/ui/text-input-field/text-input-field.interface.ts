import { TextInputProps } from "react-native";


export interface ITextInputFieldProps {
	hint?: string
}

export type TypeTextInputFieldProps = ITextInputFieldProps & TextInputProps

export interface ITextInputField extends TypeTextInputFieldProps {}
