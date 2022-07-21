 
class Product {
    name: string;
    originalPrice: number;
    image: string;
    saleOffPrice?: number;
    category?: string;
    feature?: string;
    description?: string;
    shortDescription?: string;
    
    constructor(
        name: string,
        originalPrice: number,
        image: string,
        saleOffPrice: number,
        category?: string,
        feature?: string,
        description?: string,
        shortDescription?: string
    ) {
        this.name = name;
        this.originalPrice = originalPrice;
        this.image = image;
        this.saleOffPrice = saleOffPrice;
        this.category = category;
        this.feature = feature;
        this.description = description;
        this.shortDescription = shortDescription;
    }
}

export default Product