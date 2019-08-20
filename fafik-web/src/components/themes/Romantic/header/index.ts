import { connect } from "react-redux";

import header from "./layout";
import { AppState } from "./../../../../store/reducers";

const mapStateToProps = ({ romanticState }: AppState) => ({
  romanticState: romanticState
});

const enhancer = connect(
  mapStateToProps,
  {}
);

export default enhancer(header);
