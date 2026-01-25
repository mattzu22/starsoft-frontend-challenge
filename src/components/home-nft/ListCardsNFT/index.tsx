import { NFTprops } from "@/types/nft";
import CardNFT from "../CardNFT";
import styles from "./ListCardsNFT.module.scss"
import { AnimatePresence, motion } from "framer-motion";

export default function ListCardsNFT({ data }: { data: NFTprops[] }) {
    return (
        <motion.div className={styles.containerNFT} layout>
            <AnimatePresence>
                {
                    data?.map(nft => (
                        <CardNFT key={nft.id} data={nft} />
                    ))
                }
            </AnimatePresence>
        </motion.div>
    )
}