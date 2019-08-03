import { connect } from 'react-redux';

import { ClientPageLayout } from './layout';
import { AppState } from '../../store/reducers';


const mapStateToProps = ({ }: AppState) => ({

});

const mapDispatchToProps = {

};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(ClientPageLayout);
