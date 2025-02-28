import { accomplishments, education, gridItems } from "@/Data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import ThreeDCard from "./ui/3DCard";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { PinContainer } from "./ui/3d-pin";
import { useEffect } from "react";
import { AccomplishmentsMarquee } from "./ui/AccomplishmentsMarquee";

export function EducationCard({
    title,
    graduationDate,
    subheading,
    description,
    image,
}: {
    title: string;
    graduationDate: string;
    subheading: string;
    description: string;
    image: string;
}) {


    return (
        <div>
            <CardContainer className="inter-var col-span-1 md:col-span-2">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border flex flex-col items-center">
                    <CardItem
                        translateZ="50"
                        className="grid place-items-center text-xl font-bold text-neutral-600 dark:text-white text-center"
                    >
                        {title}
                    </CardItem>

                    <CardItem as="p" translateZ="60" className="justify-center text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                        {graduationDate}
                    </CardItem>
                    <CardItem as="p" translateZ="60" className="justify-center text-red-500 text-sm max-w-sm mt-2">
                        {subheading}
                    </CardItem>
                    <CardItem as="p" translateZ="60" className="w-full text-neutral-500 text-sm mt-2 dark:text-neutral-300 whitespace-pre-line">
                        {description}
                    </CardItem>
                    <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
                        <img
                            src={image}
                            height="500"
                            width="500"
                            className="h-[300px] md:h-[400px] w-full object-contain rounded-xl"
                            alt={`thumbnail-${image}`}
                        />
                    </CardItem>
                </CardBody>
            </CardContainer>

            <AccomplishmentsMarquee items={accomplishments} />

        </div>
    );
}



const Education = () => {
    return (

        <div className="py-20">
            <h1 className="heading">
                <span className="text-purple">Education</span>
            </h1>

            <EducationCard
                title={education.title}
                graduationDate={education.graduationDate}
                subheading={education.subheading}
                description={education.description}
                image={education.image}

            />

        </div>
    );
}

export default Education;