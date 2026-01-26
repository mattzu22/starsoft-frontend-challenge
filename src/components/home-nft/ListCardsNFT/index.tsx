import { NFTprops } from "@/types/nft";
import CardNFT from "../CardNFT";
import styles from "./ListCardsNFT.module.scss"
import { AnimatePresence, motion } from "framer-motion";

export default function ListCardsNFT({ data, isError }: { data: NFTprops[], isError: boolean }) {
    return (
        <motion.div className={styles.containerNFT} layout>
            <AnimatePresence mode="popLayout">
                {
                    isError ?
                        <p>Erro ao carregar os NFTs</p>
                        :
                        data?.map(nft => (
                            <CardNFT key={nft.id} data={nft} />
                        ))
                }
            </AnimatePresence>
        </motion.div>
    )
}