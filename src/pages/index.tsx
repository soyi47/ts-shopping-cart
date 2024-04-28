import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import ProductList from "@/components/ProductList";
import { API_HOST } from "@/constants/api";
import { Product } from "@/models/product";

export const getServerSideProps: GetServerSideProps<{
  products: Product[];
}> = async (ctx) => {
  const { id } = ctx.query;
  const res = await fetch(API_HOST + "/products");
  const data: { products: Product[] } = await res.json();
  const { products } = data;

  return {
    props: { products },
  };
};

export default function Page(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { products } = props;

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}
