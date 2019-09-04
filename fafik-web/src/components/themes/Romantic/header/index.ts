import { connect } from 'react-redux';

import header from './layout';
import { AppState } from '../../../../store/reducers';
import { openRsvpDialog } from '../../../../store/romantic/dialogs/RsvpDialog/actions';

const mapStateToProps = ({ romanticState }: AppState) => ({
  romanticState: romanticState
});

const mapDispatchToProps = {
  openRsvpDialog
};

const enhancer = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default enhancer(header);
