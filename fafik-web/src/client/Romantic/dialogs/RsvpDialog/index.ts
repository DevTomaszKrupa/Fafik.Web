import { connect } from 'react-redux';

import RsvpDialog from './layout';
import {} from 'application/store/reducers';
import { closeRsvpDialog } from 'application/store/romantic/dialogs/RsvpDialog/actions';

const mapStateToProps = ({ romanticRsvpDialogState }: any) => ({
  romanticRsvpDialogState: romanticRsvpDialogState,
});

const mapDispatchToProps = {
  closeRsvpDialog,
};

const enhancer = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default enhancer(RsvpDialog);
