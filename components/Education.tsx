import { accomplishments, education } from "@/Data";
import { FramerCardContainer } from "./ui/3d-card";
import { FramerCardItem } from "./ui/3d-card";
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
            <FramerCardContainer className="inter-var col-span-1 md:col-span-2">
                <div className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border flex flex-col items-center">
                    <FramerCardItem
                        className="grid place-items-center text-xl font-bold text-neutral-600 dark:text-white text-center"
                    >
                        {title}
                    </FramerCardItem>

                    <FramerCardItem   className="justify-center text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                        {graduationDate}
                    </FramerCardItem>
                    <FramerCardItem  className="justify-center text-red-500 text-sm max-w-sm mt-2">
                        {subheading}
                    </FramerCardItem>
                    <FramerCardItem   className="w-full text-neutral-500 text-sm mt-2 dark:text-neutral-300 whitespace-pre-line">
                        {description}
                    </FramerCardItem>
                    <FramerCardItem className="w-full mt-4">
                        <img
                            src={image}
                            height="500"
                            width="500"
                            className="h-[300px] md:h-[400px] w-full object-contain rounded-xl"
                            alt={`thumbnail-${image}`}
                        />
                    </FramerCardItem>
                </div>
            </FramerCardContainer>

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