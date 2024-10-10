import { ProductModel } from "../models/product.model";
import { Product, ProductMongoose } from "../types/product.types";

export const create = async (
  product: Product
): Promise<ProductMongoose | null> => {
  try {
    return await ProductModel.create(product);
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const getAll = async (): Promise<ProductMongoose[] | []> => {
  try {
    return await ProductModel.find({});
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const getById = async (id: string): Promise<ProductMongoose | null> => {
  try {
    return await ProductModel.findById(id);
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const update = async (
  id: string,
  body: Product
): Promise<ProductMongoose | null> => {
  try {
    return await ProductModel.findByIdAndUpdate(id, body, { new: true });
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const remove = async (id: string): Promise<ProductMongoose | null> => {
  try {
    return await ProductModel.findByIdAndDelete(id);
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
