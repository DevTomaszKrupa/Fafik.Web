import { connect } from 'react-redux';

import { getLeavesMainSite } from '../../../../store/leaves/main/actions';
import { AppState } from '../../../../store/reducers';

import MainSite from './layout';


const mapStateToProps = ({ leavesMainSiteState }: AppState) => ({
  leavesMainSiteState: leavesMainSiteState
});

const mapDispatchToProps = {
  getLeavesMainSite
};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(MainSite);
