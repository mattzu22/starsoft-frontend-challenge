export interface NFTprops {
    id: string
    name: string
    image: string
    price: number
    description: string
    quantity: number;
}

export interface initialDataProps {
    initialData: NFTprops[]
    count: number
}


