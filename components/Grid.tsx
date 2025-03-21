import { gridItems } from "@/Data";
import dynamic from "next/dynamic";

// Dynamically import BentoGrid components with SSR disabled
const BentoGrid = dynamic(() => import("./ui/BentoGrid").then(mod => mod.BentoGrid), { ssr: false });
const BentoGridItem = dynamic(() => import("./ui/BentoGrid").then(mod => mod.BentoGridItem), { ssr: false });
const GridGlobe = dynamic(() => import("./ui/GridGlobe"), { ssr: false });

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-24 md:py-28 lg:py-32">
        {gridItems.map((item, i) => (
          item.isGlobe ? (
            <GridGlobe
              key={i}
              title={item.title}
              description={item.description}
              className={item.className}
            />
          ) : (
            <BentoGridItem
              id={item.id}
              key={i}
              title={item.title}
              description={item.description}
              className={item.className}
              img={item.img}
              imgClassName={item.imgClassName}
              titleClassName={item.titleClassName}
              spareImg={item.spareImg}
            />
          )
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;