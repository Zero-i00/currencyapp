import { bindActionCreators } from '@reduxjs/toolkit'
import { rootActions } from '../store/root-action'
import { useDispatch } from 'react-redux'


export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(rootActions, dispatch)
}
