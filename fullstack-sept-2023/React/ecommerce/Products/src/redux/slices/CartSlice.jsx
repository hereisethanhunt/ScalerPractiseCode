import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name : 'cartSlice',
    initialState: {
        cartProducts : [],
        cartQuantity: 0
    },
    reducers : {
        addToCart :(state, action)=> {
            state.cartQuantity++;
            // action is immutable.
            let productTobeAdded = {...action.payload};
            let fetchedProduct = state?.cartProducts?.find((eProduct)=>{
                return eProduct.id === productTobeAdded.id;
            });
            if(!!!fetchedProduct) {
                productTobeAdded.numOfQuantity = 1;
                state.cartProducts.push(productTobeAdded);
            }
            else
            {
                fetchedProduct.numOfQuantity++;
            }
        },
        removeFromCart : (state, action) => {
            const removeProduct = action.payload;
            const idx = state.cartProducts.findIndex((eProduct)=>{
                return eProduct.id === removeProduct.id;
            });

            if(idx !== -1) {
                let product = state.cartProducts[idx];
                if(product.numOfQuantity === 1) {
                    console.log("qwerty", idx, state.cartProducts)
                    const data = state.cartProducts.filter((pr)=>{
                        return pr.id !== product.id;
                    });
                    console.log(data, "data")
                    state.cartProducts = data;
                }
                else {
                    state.cartProducts[idx].numOfQuantity--;
                }
                state.cartQuantity--;
            }
        }
    },
});

export default cartSlice;