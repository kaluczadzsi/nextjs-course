"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";

export default function page() {
  const path = usePathname();
  console.log(path);
  return (
    <div>
      <h1>News Page</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((newsItem) => (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <img src={`/images/news/${newsItem.image}`} fill />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
