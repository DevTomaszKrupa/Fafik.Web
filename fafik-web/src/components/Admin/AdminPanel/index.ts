import { connect } from 'react-redux';

import AdminPanelComponent from './layout';
import { logout } from '../../../store/admin/login/actions';


const mapStateToProps = () => ({

});

const mapDispatchToProps = {
  logout
};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(AdminPanelComponent);
