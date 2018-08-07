import { connect } from "react-redux";

import Theme from "../../components/Theme";

import { IThemeProps } from "../../components/Theme";

import { IStoreState } from "../../../../stores";

export default connect(
  (state: IStoreState): IThemeProps => ({ theme: state.theme.mode })
)(Theme);
