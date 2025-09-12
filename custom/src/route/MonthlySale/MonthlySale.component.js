/* eslint-disable no-alert */
/* eslint-disable babel/semi */
/* eslint-disable jsx-quotes */
/* eslint-disable padding-line-between-statements */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable @scandipwa/scandipwa-guidelines/export-level-one */
/* eslint-disable arrow-spacing */
/* eslint-disable space-infix-ops */
/* eslint-disable key-spacing */
/* eslint-disable space-before-blocks */
/* eslint-disable lines-between-class-members */
/* eslint-disable simple-import-sort/imports */
// import PropTypes from 'prop-types';

import { PureComponent } from 'react';
import './MonthlySale.style';
import { connect } from 'react-redux';
import { increase, decrease, reset } from 'Store/Counter/Counter.action';

class MonthlySaleComponent extends PureComponent {
    handleIncrement = () => {
        this.props.increase();
    };

    handleDecrement = () => {
        this.props.decrease();
    };
    handleReset = () => {
        this.props.reset()
    }

    render() {
        const { value } = this.props;
        return (
            <div className="MonthlySale">
                <h1>This is First Route</h1>
                <div className='flex justify-center flex-col items-center'>
                    <p className='text-[2rem] p-2'>{value}</p>
                    <div className='flex gap-4'>
                        <button onClick={this.handleIncrement}>Increment</button>
                        <button onClick={this.handleDecrement}>Decrement</button>
                        <button onClick={this.handleReset}>Reset</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    value: state.CounterReducer.value
});

const mapDispatchToProps = { increase, decrease, reset };

export default connect(mapStateToProps, mapDispatchToProps)(MonthlySaleComponent);
