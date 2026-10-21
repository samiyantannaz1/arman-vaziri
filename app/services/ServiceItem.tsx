
import Image from "next/image";

type ServiceItemProps = {
  number: string;
  title: string;
  image: string;
  description: string;
  imagePosition: "left" | "right";
};

export default function ServiceItem({
  number,
  title,
  image,
  description,
  imagePosition,
}: ServiceItemProps) {
  const imageOnLeft = imagePosition === "left";

  return (
    <article className="group relative border border-white/15 px-5 py-3 transition-colors duration-500 hover:border-[#b49a6c]/60 md:px-8 md:py-1">
      <div
        className={`grid items-center gap-7 md:grid-cols-2 md:gap-10 ${
          imageOnLeft ? "" : "md:[&>div:first-child]:order-2"
        }`}
      >
        <div className="relative z-10">
          <div className="relative aspect-[4/3] translate-y-3 overflow-hidden md:translate-y-15">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center py-3 md:py-5">
          <span className="mb-4 text-xs tracking-[0.3em] text-white/45 transition-colors duration-500 group-hover:text-[#b49a6c]">
            {number}
          </span>

          <h2 className="mb-4 text-xl font-light tracking-[0.08em] text-white transition-colors duration-500 group-hover:text-[#b49a6c] md:text-2xl">
            {title}
          </h2>

          <p className="max-w-xl text-sm leading-7 text-white/65 transition-colors duration-500 group-hover:text-white/85 md:leading-8">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
