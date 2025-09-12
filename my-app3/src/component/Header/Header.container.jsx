import { connect } from 'react-redux';

import {
    DEFAULT_HEADER_STATE as SOURCE_DEFAULT_HEADER_STATE,
    HeaderContainer as SourceHeaderContainer,
    mapDispatchToProps as sourceMapDispatchToProps,
    mapStateToProps as sourceMapStateToProps,
} from 'SourceComponent/Header/Header.container';

// TODO: implement DEFAULT_HEADER_STATE
export const DEFAULT_HEADER_STATE = SOURCE_DEFAULT_HEADER_STATE;

/** @namespace myApp3/Component/Header/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    ...sourceMapStateToProps(state),
    // TODO extend mapStateToProps
});

/** @namespace myApp3/Component/Header/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
    ...sourceMapDispatchToProps(dispatch),
    // TODO extend mapDispatchToProps
});

/** @namespace myApp3/Component/Header/Container */
export class HeaderContainer extends SourceHeaderContainer {
    // TODO implement logic
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
