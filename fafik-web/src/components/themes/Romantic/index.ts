import { connect } from 'react-redux';

import RomanticLayout from './layout';
import { AppState } from './../../../store/reducers';
import { getRomanticTheme } from '../../../store/romantic/theme/actions';

const mapStateToProps = ({ romanticState }: AppState) => ({
  romanticState: romanticState
});

const mapDispatchToProps = {
  getRomanticTheme
};

const enhancer = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default enhancer(RomanticLayout);
