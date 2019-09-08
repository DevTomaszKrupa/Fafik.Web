import { connect } from 'react-redux';

import LoginPageComponent from './layout';


const mapStateToProps = () => ({

});

const mapDispatchToProps = {
};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(LoginPageComponent);
