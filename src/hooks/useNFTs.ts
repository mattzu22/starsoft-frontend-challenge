import { useInfiniteQuery } from "@tanstack/react-query";
import api from "../services/api";
import { initialDataProps } from "../types/nft";


 
interface useNFTsProps {
    rows: number
    sortBy: string
    orderBy: string
    initialData: initialDataProps
}

export default function useNFTs({ rows, sortBy, orderBy, initialData }: useNFTsProps) {
    return useInfiniteQuery({
        queryKey: ['nfts', sortBy, orderBy],
        initialPageParam: 1,
        initialData: {
            pages: [initialData],
            pageParams: [1],
        },
        queryFn: async ({ pageParam = 1 }) => {
            try {
                const response = await api.get(`?page=${pageParam}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`)

                if (response.status !== 200) {
                    throw new Error('Não foi possível carregar os NFTs')
                }

                return response.data
            } catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Erro ao carregar NFTs: ${error.message}`)
                }
                throw new Error('Erro desconhecido ao carregar NFTs')
            }
        },
        getNextPageParam: (lastPage, allPages) => {
            const itemsLoaded = allPages.length * rows;
            if (itemsLoaded < lastPage.count) {
                return allPages.length + 1;
            }

            return undefined;
        },
    })
}