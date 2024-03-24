import Link from "next/link";
import Parent from "./parent/parent";
export default function Home() {
  return (

    <>
    <Link href="/contact">Contact</Link>
    Home Page
    <Parent/>
    </>
  );
}
