import Header from '../Components/Header/Header'
import React from 'react'
import EditProduct from '../Components/Products/EditProduct'

const ProductPage = () => {
    return (
        <>
            <Header />
            <div className="px-6">
                <h1 className='text-4xl text-bold text-center'>Ürünler</h1>
                <EditProduct />
            </div>



        </>
    )
}

export default ProductPage;
