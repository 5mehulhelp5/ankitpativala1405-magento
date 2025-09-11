import { connect } from 'react-redux';

import {
    DEFAULT_HEADER_STATE,
    HeaderContainer as SourceHeaderContainer,
    mapDispatchToProps,
    mapStateToProps,
} from 'SourceComponent/Header/Header.container';

export {
    mapStateToProps,
    mapDispatchToProps,
    DEFAULT_HEADER_STATE,
};

/** @namespace myApp2/Component/Header/Container */
export class HeaderContainer extends SourceHeaderContainer {
    // TODO implement logic
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
