import { connect } from 'react-redux';

import AdminMySitesComponent from './layout';


const mapStateToProps = () => ({

});

const mapDispatchToProps = {
};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(AdminMySitesComponent);
