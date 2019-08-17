import { getLeavesTheme } from '../../../store/leaves/theme/actions';
import { AppState } from './../../../store/reducers';
import { connect } from 'react-redux';

import LeavesLayout from './layout';


const mapStateToProps = ({ leavesState }: AppState) => ({
  leavesState: leavesState
});

const mapDispatchToProps = {
  getLeavesTheme
};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(LeavesLayout);
