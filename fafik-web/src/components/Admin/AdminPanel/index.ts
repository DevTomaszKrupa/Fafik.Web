import { connect } from 'react-redux';

import AdminPanelComponent from './layout';


const mapStateToProps = () => ({

});

const mapDispatchToProps = {
};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(AdminPanelComponent);
