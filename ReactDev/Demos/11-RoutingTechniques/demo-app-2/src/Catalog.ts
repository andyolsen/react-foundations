export class ProductItem {
    
    public id: string;
    public description: string;
    public price: number;
    public likes: number;
    public mostRecentLike: string;

    constructor(
        id: string,
        description: string,
        price: number,
        likes: number,
        mostRecentLike: string
    ) {
        this.id = id;
        this.description = description;
        this.price = price;
        this.likes = likes;
        this.mostRecentLike = mostRecentLike;
    }
}

export class Catalog {

    // Let's just store data in static variables for simplicity here!
    private static productItems: Map<string, ProductItem> = new Map([
        ["1", new ProductItem("1", "Swansea City Shirt", 55.99, 20001, "2015-05-09")],
        ["2", new ProductItem("2", "Cardiff City Shirt", 49.99, 15009, "2018-12-08")],
        ["3", new ProductItem("3", "Bugatti Divo Sport", 4_000_000, 4, "2017-12-25")],
    ])

    static getAllProductItems() : Array<ProductItem> {
        let productItemsAsIterable = Catalog.productItems.values()
        return Array.from(productItemsAsIterable)
    }

    static getProductItemById(id: string) : ProductItem | undefined {
        return Catalog.productItems.get(id)
    }
}