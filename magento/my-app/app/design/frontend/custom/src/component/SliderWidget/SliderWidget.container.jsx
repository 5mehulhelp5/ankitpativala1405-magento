import { connect } from 'react-redux';

import {
    mapDispatchToProps as sourceMapDispatchToProps,
    mapStateToProps as sourceMapStateToProps,
    SliderWidgetContainer as SourceSliderWidgetContainer,
} from 'SourceComponent/SliderWidget/SliderWidget.container';

/** @namespace Custom/Component/SliderWidget/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    ...sourceMapStateToProps(state),
    // TODO extend mapStateToProps
});

/** @namespace Custom/Component/SliderWidget/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
    ...sourceMapDispatchToProps(dispatch),
    // TODO extend mapDispatchToProps
});

/** @namespace Custom/Component/SliderWidget/Container */
export class SliderWidgetContainer extends SourceSliderWidgetContainer {
    // TODO implement logic
}

export default connect(mapStateToProps, mapDispatchToProps)(SliderWidgetContainer);
