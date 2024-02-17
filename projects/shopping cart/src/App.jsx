import { useState } from 'react';
import {products as initialProducts} from '../mocks/products.json';
import { Products } from './components/Products';
import './App.css'
import Cart from './components/Cart';
import { CartProvider } from './context/cart';
import { useFilters } from './hooks/useFilters';
import { Filters } from './components/Filters';
export function App(){
    const [products]=useState(initialProducts);
    const {filteredProducts}=useFilters();
    const newFilteredProducts= filteredProducts(products);
    return (
        <CartProvider>
        <header>
            <h1>Store</h1>
            <Cart />
            <Filters/>
        </header>
        <main>
            <Products products={newFilteredProducts} />
        </main>
        </CartProvider>
    )
}