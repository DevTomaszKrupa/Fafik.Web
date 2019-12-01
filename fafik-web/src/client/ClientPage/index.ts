import { connect } from 'react-redux';

import { ClientPageLayout } from './layout';
import { getClient } from 'application/store/client/actions';

const mapStateToProps = ({ clientState }: any) => ({
  clientState,
});

const mapDispatchToProps = {
  getClient,
};

const enhancer = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default enhancer(ClientPageLayout);
