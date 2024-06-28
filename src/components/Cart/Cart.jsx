function Cart() {
    let cart = useSelector((state) => {
        return state.items;
        return state.cart.items;
    })
    return (
        <div>
            <ul>
            {
                Object.values(cart).map((item) => {
                    return (<li key={item.id}>{item.title}</li>)
                })
                }
            </ul>
        </div>
    )
}
export default Cart;
