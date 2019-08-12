import { getLeavesTheme } from './../../../store/leaves/actions';
import { AppState } from './../../../store/reducers';
import { connect } from 'react-redux';

import LeavesLayout from './layout/Leaves';


const mapStateToProps = ({ leavesState }: AppState) => ({
  leavesState: leavesState
});

const mapDispatchToProps = {
  getLeavesTheme
};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(LeavesLayout);
