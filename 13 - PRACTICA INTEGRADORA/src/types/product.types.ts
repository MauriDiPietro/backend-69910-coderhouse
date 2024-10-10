import { Document, ObjectId } from "mongoose";

export interface Product {
  name: string;
  description: string;
  price: number;
  stock: number;
}

export type ProductType = {
  name: string;
  description: string;
  price: number;
  stock: number;
};

export interface Product2 extends Product {
  color: string;
}

export type Producttype2 = ProductType & {
  color: string;
};

export type Product3 = Pick<Product, "name" | "description">;

export type Product4 = Omit<Product, "description">;

export interface ProductResponseDB extends Product {
  _id: ObjectId;
}

export type ProductMongoose = ProductType & Document;
