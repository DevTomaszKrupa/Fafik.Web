import { connect } from 'react-redux';

import adminEditableComponent from './layout';

import { editAdminEditableTextComponent } from '../../../store/admin/actions';

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
  editAdminEditableTextComponent
};

const enhancer = connect(
  mapStateToProps,
  mapDispatchToProps
)(adminEditableComponent);

export { enhancer as AdminEditableComponent };
