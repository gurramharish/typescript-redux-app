import { connect } from "react-redux";

import { Switch, SwitchProps } from "react-router";

import { IStoreState } from "../../../../stores";

export default connect(
  (state: IStoreState): SwitchProps => ({
    location: state.router.location!
  })
)(Switch);
