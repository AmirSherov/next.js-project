import Link from "next/link";
import NAV from "./nav";
export default function Home() {
  return (
    <>
        <h1>Hello</h1>
        <Link href="/Login"><h1>Login</h1></Link>
        <NAV />
    </>
  );
}
