import {useDispatch} from 'react-redux';
import {AppDispatch} from '@root/app/store/store';

/** useDispatch with App types applied */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
