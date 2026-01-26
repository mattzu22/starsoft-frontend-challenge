import { NFTprops } from "@/types/nft";
import CardNFT from "../CardNFT";
import styles from "./ListCardsNFT.module.scss"

export default function ListCardsNFT({ data, isError }: { data: NFTprops[], isError: boolean }) {
    return (
        <div className={styles.containerNFT}>
            {
                isError ?
                    <p>Erro ao carregar os NFTs</p>
                    :
                    data?.map(nft => (
                        <CardNFT key={nft.id} data={nft} />
                    ))
            }
        </div>
    )
}