export interface BestBuyInterface {
    from?: number,
    to?: number,
    currentPage?: number,
    total?: number,
    totalPages?: number,
    queryTime?: string,
    totalTime?: string,
    partial?: boolean,
    canonicalUrl?: string,
    products?: BestBuyProductInterface[],
}


export interface BestBuyProductInterface {
    name?: string,
    salePrice?: number,
    customerReviewAverage?: number,
    customerReviewCount?: number,
    thumbnailImage?: string,
    url?: string,
    shortDescription?: string
    features?: [{ feature?: string }],
    image?:string
}