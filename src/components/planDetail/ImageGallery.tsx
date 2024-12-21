import { useState } from "react";
import Image from "next/image";

export function ImageGallery({ images }: { images: string[] }) {
  const [mainImage, setMainImage] = useState(0);

  if (images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
        <Image src={images[0]} alt="" fill className="object-cover" />
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {/* メイン画像 */}
      <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
        <Image src={images[mainImage]} alt="" fill className="object-cover" />
      </div>
      {/* サムネイル */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setMainImage(index)}
            className={`aspect-[4/3] relative rounded-lg overflow-hidden ${
              mainImage === index
                ? "ring-2 ring-primary"
                : "hover:ring-2 hover:ring-primary/50"
            }`}
          >
            <Image src={image} alt="" fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
