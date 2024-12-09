import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../app/redux/store';

/** useDispatch with App types applied */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
