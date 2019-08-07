import { AppState } from './../../../store/reducers';
import { connect } from 'react-redux';

import LeavesLayout from './layout/Leaves';


const mapStateToProps = ({ clientState }: AppState) => ({
  clientState
});

const mapDispatchToProps = {

};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(LeavesLayout);
