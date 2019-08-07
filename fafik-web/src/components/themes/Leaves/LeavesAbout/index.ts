import { AppState } from './../../../../store/reducers';
import { connect } from 'react-redux';

import LeavesAboutLayout from './layout/LeavesAbout';


const mapStateToProps = ({ clientState }: AppState) => ({
  clientState
});

const mapDispatchToProps = {

};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(LeavesAboutLayout);
