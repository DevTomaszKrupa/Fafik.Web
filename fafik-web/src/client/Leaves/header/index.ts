import { connect } from 'react-redux';

import header from './layout';
import { AppState } from 'application/store/reducers';


const mapStateToProps = ({ leavesState }: AppState) => ({
  leavesState: leavesState
});


const enhancer = connect(mapStateToProps, {});

export default enhancer(header);
