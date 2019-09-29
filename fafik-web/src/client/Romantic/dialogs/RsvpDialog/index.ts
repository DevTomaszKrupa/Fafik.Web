import { connect } from 'react-redux';

import RsvpDialog from './layout';
import { AppState } from 'application/store/reducers';
import { closeRsvpDialog } from 'application/store/romantic/dialogs/RsvpDialog/actions';

const mapStateToProps = ({ romanticRsvpDialogState }: AppState) => ({
  romanticRsvpDialogState: romanticRsvpDialogState
});

const mapDispatchToProps = {
  closeRsvpDialog
};

const enhancer = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default enhancer(RsvpDialog);
