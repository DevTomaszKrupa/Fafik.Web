import { connect } from 'react-redux';

import { ClientPageLayout } from './layout';
import { AppState } from 'application/store/reducers';
import { getClient } from 'application/store/client/actions';

const mapStateToProps = ({ clientState }: AppState) => ({
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
