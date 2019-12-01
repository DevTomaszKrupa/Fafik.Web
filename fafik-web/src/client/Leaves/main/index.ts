import { connect } from 'react-redux';

import { getLeavesMainSite } from 'application/store/leaves/main/actions';

import MainSite from './layout';

const mapStateToProps = ({ leavesMainSiteState }: any) => ({
  leavesMainSiteState: leavesMainSiteState,
});

const mapDispatchToProps = {
  getLeavesMainSite,
};

const enhancer = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default enhancer(MainSite);
