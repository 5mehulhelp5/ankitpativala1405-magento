/* eslint-disable simple-import-sort/imports */
/* eslint-disable jsx-quotes */
/* eslint-disable react/forbid-dom-props */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable babel/semi */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-indent-props */
import {
    SliderWidgetComponent as SourceSliderWidgetComponent,
} from 'SourceComponent/SliderWidget/SliderWidget.component';

import './SliderWidget.style';
import "../../style/main.css"
import MonthlySaleComponents from 'Component/MonthlySale';

/** @namespace Custom/Component/SliderWidget/Component */
export class SliderWidgetComponent extends SourceSliderWidgetComponent {
    // TODO implement logic
    renderSlideImage() {
        return (
            <div>
                <div className='flex justify-center font-black'>
                    <p>This IS First Line</p>
                </div>
                <div className='flex justify-center'>
                    <p>This Is Second line</p>
                </div>
                <MonthlySaleComponents />
            </div>

        );
    }
}

export default SliderWidgetComponent;
