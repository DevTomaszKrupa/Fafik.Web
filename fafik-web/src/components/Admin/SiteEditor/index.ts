import { connect } from 'react-redux';

import AdminSiteEditorComponent from './layout';


const mapStateToProps = () => ({

});

const mapDispatchToProps = {
};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(AdminSiteEditorComponent);
