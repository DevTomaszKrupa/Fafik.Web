import { connect } from 'react-redux';

import { ClientPageLayout } from './layout';
import { AppState } from '../../store/reducers';
import { getClient } from '../../store/client/actions';


const mapStateToProps = ({ clientState }: AppState) => ({
  clientState
});

const mapDispatchToProps = {
  getClient
};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(ClientPageLayout);
