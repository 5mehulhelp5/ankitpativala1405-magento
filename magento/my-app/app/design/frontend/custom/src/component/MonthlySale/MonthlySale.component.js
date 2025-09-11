/* eslint-disable jsx-quotes */
/* eslint-disable react/forbid-dom-props */
/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable @scandipwa/scandipwa-guidelines/derived-class-names */
/* eslint-disable simple-import-sort/imports */
// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './MonthlySale.style.scss';

/** @namespace Custom/Component/MonthlySale/Component */
export class MonthlySaleComponents extends PureComponent {
    static propTypes = {
        // TODO: implement prop-types
    };

    render() {
        return (
            <div block="MonthlySales" className='flex justify-center items-center text-[3rem] font-semibold'>
                <h1>This is First Route</h1>
            </div>
        );
    }
}

export default MonthlySaleComponents;
