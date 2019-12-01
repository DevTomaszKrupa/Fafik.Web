import { connect } from 'react-redux';

import header from './layout';

const mapStateToProps = ({ leavesState }: any) => ({
  leavesState: leavesState,
});

const enhancer = connect(
  mapStateToProps,
  {}
);

export default enhancer(header);
