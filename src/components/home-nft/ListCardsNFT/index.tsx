import { NFTprops } from "@/src/hooks/useNFTs";
import CardNFT from "../CardNFT";
import styles from "./ListCardsNFT.module.scss"

export default function ListCardsNFT({ data }: { data: NFTprops[] }) {
    return (
        <div className={styles.containerNFT}>
            {
                data?.map(nft => (
                    <CardNFT key={nft.id} data={nft} />
                ))
            }
        </div>
    )
}