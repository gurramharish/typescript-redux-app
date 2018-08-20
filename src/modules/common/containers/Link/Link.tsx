import { connect } from "react-redux";
import { Dispatch } from "redux";

import Link from "../../components/Link";
import { ILinkActions, ILinkData } from "../../components/Link";

import { IStoreState } from "../../../../stores";

import { pushPath } from "../../../../stores";

export default connect(
  (state: IStoreState): ILinkData => ({}),
  (dispatch: Dispatch): ILinkActions => ({
    navigate(path: string): void {
      dispatch(pushPath(path));
    }
  })
)(Link);
