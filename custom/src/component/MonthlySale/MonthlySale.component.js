/* eslint-disable no-console */
/* eslint-disable no-trailing-spaces */
/* eslint-disable curly */
/* eslint-disable padding-line-between-statements */
/* eslint-disable react/prop-types */
/* eslint-disable key-spacing */
/* eslint-disable keyword-spacing */
/* eslint-disable lines-between-class-members */
/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable arrow-spacing */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable semi */
/* eslint-disable babel/semi */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable comma-dangle */
/* eslint-disable react/no-unused-state */
/* eslint-disable @scandipwa/scandipwa-guidelines/only-render-in-component */
/* eslint-disable @scandipwa/scandipwa-guidelines/use-magic-construct */
/* eslint-disable indent */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-quotes */
/* eslint-disable react/forbid-dom-props */
/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable @scandipwa/scandipwa-guidelines/derived-class-names */
/* eslint-disable simple-import-sort/imports */
// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './MonthlySale.style.scss';
import MonthlySaleComponent from 'Route/MonthlySale';

/** @namespace Custom/Component/MonthlySale/Component */
export class MonthlySaleComponents extends PureComponent {
    static propTypes = {
        // TODO: implement prop-types
    };

    constructor(props) {
        super(props);
        this.state = {
            value
        }
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }

    handleIncrement() {
        const { increment } = this.props;
        if (increment) increment();
    }

    handleDecrement() {
        const { decrement } = this.props;
        if (decrement) decrement();
    }

    render() {
        return (
            <div>
                <div block="MonthlySales" className='flex justify-center items-center text-[3rem] font-semibold'>
                    <p className='text-nowrap'>MonthlySale Component : <span><MonthlySaleComponent /></span></p>
                </div>
                <div className='flex justify-center flex-col items-center'>
                    <p className='text-[2rem] p-2'>{this.props.value}</p>
                    <div className='flex gap-4'>
                        <button onClick={this.handleIncrement}>Increment</button>
                        <button onClick={this.handleDecrement}>Decrement</button>
                    </div>
                </div> 
            </div>
        );
    }
}

export default MonthlySaleComponents;
