"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function page() {
  const path = usePathname();
  console.log(path);
  return (
    <div>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href={`news/first-news`}>First news item</Link>
        </li>
        <li>
          <Link href={`news/second-news`}>Second news item</Link>
        </li>
        <li>
          <Link href={`news/third-news`}>Third news item</Link>
        </li>
      </ul>
    </div>
  );
}
