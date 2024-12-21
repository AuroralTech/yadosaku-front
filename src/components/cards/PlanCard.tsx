import Image from "next/image";
import Link from "next/link";

type PlanCardProps = {
  name: string;
  price: string;
  remaining: number;
  tags: string[];
  image: string;
};

export function PlanCard({
  name,
  price,
  remaining,
  tags,
  image,
}: PlanCardProps) {
  return (
    <Link
      href={`/plans/${encodeURIComponent(
        name.toLowerCase().replace(/ /g, "-")
      )}`}
    >
      <div className="bg-secondary rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="aspect-[4/3] bg-zinc-100 relative">
          <Image src={image} alt={name} fill className="object-cover" />
          <div className="absolute top-2 right-2">
            <span className="inline-flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-sm">
              <span className="text-accent mr-1">残り</span>
              <span className="font-medium">{remaining}室</span>
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-medium mb-2">{name}</h3>
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-primary font-bold">{price}</p>
        </div>
      </div>
    </Link>
  );
}
