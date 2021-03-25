import React from "react";
import {
  CreateProductInput,
  useCreateProductMutation,
} from "../../generated/graphql";
import ProductModal from "../ProductsManager/ProductModal";
import { ProductInfo } from "../types";

interface CreateProductProps {
  product: ProductInfo;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateProduct: React.FC<CreateProductProps> = ({
  product,
  setIsOpen,
}: CreateProductProps) => {
  const [_, createProduct] = useCreateProductMutation();
  const handleCreateProduct = async (values: CreateProductInput) => {
    await createProduct({ input: values });
    console.log("create product")
  };
  return (
    <ProductModal
      product={product}
      setIsOpen={setIsOpen}
      callback={handleCreateProduct}
    ></ProductModal>
  );
};

export default CreateProduct;
