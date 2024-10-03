import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
export declare class ProductsService {
    products: Product[];
    constructor();
    create(product: Product): Product;
    findAll(): Product[];
    findOne(id: string): Product | null;
    update(id: number, updateProductDto: UpdateProductDto): string;
    remove(id: number): string;
}
