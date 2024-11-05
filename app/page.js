import Link from "next/link";
export default function Home() {
  return (
    <>
        <h1>Hello</h1>
        <hr />
        <Link href="./products">Products page</Link>
    </>
  );
}
