import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return <p>상품 Id: {router.query.id}</p>;
}
