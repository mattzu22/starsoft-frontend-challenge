import Image from "next/image"
import styles from "./ModalCart.module.scss"
import arrow from "@/public/Arrow - Left.png"

export function HeaderModal() {
    return (
        <header className={styles.header}>
            <button>
                <Image src={arrow} alt="Cart" width={33} height={33} />
            </button>

            <h2>Mochila de Compras</h2>
        </header>
    )
}