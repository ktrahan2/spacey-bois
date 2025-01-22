import {useSelector} from 'react-redux';
import {RootState} from '@root/app/redux/store';

/** useSelector with App types applied */
export const useAppSelector = useSelector.withTypes<RootState>();
