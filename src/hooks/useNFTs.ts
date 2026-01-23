import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import api from "../services/api";
import { initialDataProps } from "../pages";

export interface NFTprops {
    id: string
    name: string
    image: string
    price: number
    description: string
}



interface ParamsProps {
    rows: number
    sortBy: string
    orderBy: string
    initialData: initialDataProps
}

export default function useNFTs({ rows, sortBy, orderBy, initialData }: ParamsProps) {
    return useInfiniteQuery({
        queryKey: ['nfts', sortBy, orderBy],
        initialPageParam: 1,
        initialData: {
            pages: [initialData],
            pageParams: [1],
        },
        queryFn: async ({ pageParam = 1 }) => {
            const response = await api.get(`?page=${pageParam}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`)

            if (response.status != 200) {
                throw new Error('Não foi possível carregar os NFTs')
            }

            return response.data
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