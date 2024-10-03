import { ProductsService } from './products.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(product: Product): Product;
    findAll(): Product[];
    findOne(id: string): Product | null;
    update(id: string, updateProductDto: UpdateProductDto): string;
    remove(id: string): string;
}
