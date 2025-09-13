/* eslint-disable no-alert */
/* eslint-disable max-len */
/* eslint-disable no-magic-numbers */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-conditional */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/no-unused-state */
/* eslint-disable space-before-blocks */
/* eslint-disable no-console */
/* eslint-disable arrow-parens */
/* eslint-disable lines-between-class-members */
/* eslint-disable @scandipwa/scandipwa-guidelines/use-namespace */
/* eslint-disable jsx-quotes */
// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './TodaySale.style';

/** @namespace Custom/Route/TodaySale/Component */
export class TodaySale extends PureComponent {
    static propTypes = {
        // TODO: implement prop-types
    };
    constructor(props) {
        super(props);
        this.state = {
            item: []
        };
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }
    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(product => {
                this.setState({ item: product });
            })
            .catch(err => console.error("Error fetching products:", err));
    }
    handleAddToCart(item){
        alert(item.id);
    }

    render() {
        const { item } = this.state;
        
        return (
            <div className='container mx-auto'>
                <div block="TodaySale">
                    <h1 className='flex justify-center'>This Is Today Sale Component From Create Router</h1>
                </div>
                 <div className="grid grid-cols-4 gap-10 p-4">
                    {item.length > 0 ? (
                        item.map((prod) => (
                            <div key={prod.id} className="border p-2 rounded-xl shadow">
                                <img src={prod.image} alt={prod.title} className="h-45 w-auto mx-auto" />
                                <h2 className="text-lg font-bold">{prod.title}</h2>
                                <p className="text-sm">{prod.description.substring(0, 500)}...</p>
                                <p className="font-semibold">${prod.price}</p>
                                <div className='flex items-center gap-5'>
                                    <button className='w-1/2 px-4 py-2 text-[1.5rem] text-nowrap' onClick={() => this.handleAddToCart(prod)}>Add To Cart</button>
                                    <button className='w-1/2 px-4 py-2 text-[1.5rem] text-nowrap'>Add To Wishlist</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">Loading products...</p>
                    )}
                </div>
            </div>
        );
    }
}

export default TodaySale;
