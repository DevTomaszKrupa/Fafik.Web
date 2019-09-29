import { connect } from 'react-redux';

import { getLeavesTheme } from 'application/store/leaves/theme/actions';
import { AppState } from 'application/store/reducers';
import LeavesLayout from './layout';

const mapStateToProps = ({ leavesState }: AppState) => ({
  leavesState: leavesState,
});

const mapDispatchToProps = {
  getLeavesTheme,
};

const enhancer = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default enhancer(LeavesLayout);
