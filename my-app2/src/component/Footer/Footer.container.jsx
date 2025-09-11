import { connect } from 'react-redux';

import {
    FooterContainer as SourceFooterContainer,
    mapDispatchToProps as sourceMapDispatchToProps,
    mapStateToProps as sourceMapStateToProps,
} from 'SourceComponent/Footer/Footer.container';

/** @namespace myApp2/Component/Footer/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    ...sourceMapStateToProps(state),
    // TODO extend mapStateToProps
});

/** @namespace myApp2/Component/Footer/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
    ...sourceMapDispatchToProps(dispatch),
    // TODO extend mapDispatchToProps
});

/** @namespace myApp2/Component/Footer/Container */
export class FooterContainer extends SourceFooterContainer {
    // TODO implement logic
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);
