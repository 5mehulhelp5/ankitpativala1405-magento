/* eslint-disable no-unused-vars */
/* eslint-disable padding-line-between-statements */
import { connect } from 'react-redux';

import {
    mapDispatchToProps as sourceMapDispatchToProps,
    mapStateToProps as sourceMapStateToProps,
    RouterContainer as SourceRouterContainer,
} from 'SourceComponent/Router/Router.container';

/** @namespace Custom/Component/Router/Container/mapStateToProps */
// export const mapStateToProps = (state) => {
//     const safeSourceProps = sourceMapStateToProps ? sourceMapStateToProps(state || {}) : {};
//     return {
//         ...safeSourceProps,
//         // custom props if needed
//     };
// };

export const mapStateToProps = (state) => ({
    cmsPage: state.CmsReducer?.cmsPage || {},
    isLoading: state.CmsReducer?.isLoading ?? false,
    activeOverlay: state.OverlayReducer?.activeOverlay || null,
    shouldPopupClose: state.OverlayReducer?.shouldPopupClose || false,
});
/** @namespace Custom/Component/Router/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
    ...sourceMapDispatchToProps(dispatch),
    // TODO extend mapDispatchToProps
});

/** @namespace Custom/Component/Router/Container */
export class RouterContainer extends SourceRouterContainer {
    // TODO implement logic
}

export default connect(mapStateToProps, mapDispatchToProps)(RouterContainer);
