import Image from "next/image"
import styles from "./ModalCart.module.scss"
import arrow from "@/public/icons/Arrow - Left.png"
import { useDispatch } from "react-redux"
import { closeCart } from "@/src/store/cart/cartSlice"

export function HeaderModal() {
    const dispatch = useDispatch();

    function handleCloseCart() {
        dispatch(closeCart());
    }

    return (
        <header className={styles.header}>
            <button onClick={handleCloseCart} aria-label="Fechar">
                <Image src={arrow} alt="Cart" width={33} height={33} />
            </button>

            <h2>Mochila de Compras</h2>
        </header>
    )
}