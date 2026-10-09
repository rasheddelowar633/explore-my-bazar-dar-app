
import Link from "next/link";

const NavLinks = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Categories fetch failed");
  }

  const categoriesData = await res.json();

  return (
    <nav className="flex flex-wrap items-center justify-start container mx-auto gap-2">
      {categoriesData.map((category) => (
        <Link
          key={category.id}
          href={`/category/${category.slug}`}
          className="rounded-lg px-4 py-2 text-black transition duration-300 hover:bg-green-600 hover:text-white"
        >
          <span className="mr-1">{category.icon}</span>
          {category.nameBn}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;