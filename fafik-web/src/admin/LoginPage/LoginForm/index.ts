import { connect } from 'react-redux';
import { reduxForm, getFormValues } from 'redux-form';

import LoginPageComponent from './layout';

import { login } from 'application/store/admin/login/actions';
import { AppState } from 'application/store/reducers';

const loginFormName = 'adminLogin';

const mapStateToProps = (state: AppState) => ({
  values: getFormValues(loginFormName)(state),
  adminLoginState: state.adminLoginState,
});

const mapDispatchToProps = {
  login,
};

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPageComponent as any) as any;
const component = reduxForm({ form: loginFormName })(connected);

export default component;
