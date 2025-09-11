/* eslint-disable simple-import-sort/imports */
// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './MonthlySale.style';

/** @namespace Custom/Route/MonthlySale/Component */
export class MonthlySaleComponent extends PureComponent {
    static propTypes = {
        // TODO: implement prop-types
    };

    render() {
        return (
            <div block="MonthlySale">
                <h1>This is First Route</h1>
            </div>
        );
    }
}

export default MonthlySaleComponent;
