import { connect } from 'react-redux';

import { getLeavesTheme } from 'application/store/leaves/theme/actions';
import LeavesLayout from './layout';

const mapStateToProps = ({ leavesState }: any) => ({
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
