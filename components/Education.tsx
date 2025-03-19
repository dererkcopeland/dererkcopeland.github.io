import { accomplishments, education } from "@/Data";
import { FramerCardContainer } from "./ui/3d-card";
import { FramerCardItem } from "./ui/3d-card";
import { AccomplishmentsMarquee } from "./ui/AccomplishmentsMarquee";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export function EducationCard({
    title,
    graduationDate,
    subheading,
    description,
    image,
    certificationLink,
}: {
    title: string;
    graduationDate: string;
    subheading: string;
    description: string;
    image: string;
    certificationLink?: string;
}) {
    const [expanded, setExpanded] = useState(false);
    const [displayText, setDisplayText] = useState(description);
    const fullDescription = useRef(description);
    
    // Update displayed text based on expanded state
    useEffect(() => {
        if (expanded) {
            setDisplayText(fullDescription.current);
        } else {
            // Get first few lines of text when collapsed
            const truncatedText = getTruncatedText(fullDescription.current, 250); // Adjust character count as needed
            setDisplayText(truncatedText);
        }
    }, [expanded]);
    
    // Function to truncate text and add ellipsis
    const getTruncatedText = (text: string, maxLength: number) => {
        if (text.length <= maxLength) return text;
        // Find the last space before the maxLength to avoid cutting words
        const lastSpace = text.substring(0, maxLength).lastIndexOf(' ');
        const truncatedPos = lastSpace > 0 ? lastSpace : maxLength;
        return text.substring(0, truncatedPos) + '...';
    };
    
    const toggleExpanded = () => {
        setExpanded(!expanded);
    };
    
    return (
        <div className="h-full">
            <FramerCardContainer className="inter-var h-full">
                <div className="relative h-full group overflow-hidden border border-white/10 rounded-2xl bg-gradient-to-br from-black-100 to-black-200 backdrop-blur-sm shadow-xl transition-all duration-300 hover:border-purple/30 hover:shadow-[0_0_20px_rgba(203,172,249,0.15)]">
                    {/* Image Section - Top portion of card */}
                    <div className="relative w-full h-64 overflow-hidden">
                        <Image
                            src={image}
                            height={800}
                            width={800}
                            className="object-cover w-full h-full"
                            alt={`thumbnail-${title}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        
                        {/* Badge */}
                        <div className={`absolute top-4 right-4 ${
                            title.includes('Meta Android') ? 'bg-green-500/70' : 'bg-purple/70'
                        } backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white shadow-lg`}>
                            {graduationDate}
                        </div>
                    </div>
                    
                    {/* Content Section - Bottom portion of card */}
                    <div className="relative p-6 z-10">
                        {/* Title and Subtitle */}
                        <FramerCardItem className="mb-4">
                            <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-purple">{title}</h3>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="text-purple text-sm font-medium">{subheading}</span>
                            </div>
                        </FramerCardItem>
                        
                        {/* Description */}
                        <FramerCardItem className="mt-4 relative">
                            <div 
                                className={`text-white/70 text-sm leading-relaxed whitespace-pre-line transition-all duration-500 ${
                                    expanded 
                                        ? "max-h-[800px] overflow-y-auto pr-1" 
                                        : "max-h-[9rem] overflow-hidden"
                                }`}
                            >
                                {displayText}
                            </div>
                            
                            {/* Gradient Fade - only show when not expanded */}
                            {!expanded && (
                                <div className="h-12 w-full bg-gradient-to-t from-black-200 to-transparent absolute bottom-0 left-0 pointer-events-none"></div>
                            )}
                            
                            {/* Read More / Read Less Button */}
                            <button 
                                onClick={toggleExpanded}
                                className="mt-2 text-purple text-sm flex items-center gap-1 hover:text-white transition-colors duration-300 cursor-pointer"
                                aria-expanded={expanded}
                            >
                                {expanded ? 'Read Less' : 'Read More'}
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="14" 
                                    height="14" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                    className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
                        </FramerCardItem>
                        
                        {/* Certification Link Button */}
                        {certificationLink && (
                            <FramerCardItem className="mt-6">
                                <a 
                                    href={certificationLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 rounded-full bg-purple/80 hover:bg-purple transition-colors duration-300 shadow-lg flex items-center justify-center gap-2 text-white"
                                >
                                    <span>View Certification</span>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="16" 
                                        height="16" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                    >
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </a>
                            </FramerCardItem>
                        )}
                    </div>
                </div>
            </FramerCardContainer>
        </div>
    );
}

const Education = () => {
    return (
        <div className="py-20 relative" id="education">
            {/* Background Element */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -right-64 top-20 w-96 h-96 bg-purple/10 rounded-full filter blur-3xl opacity-30" />
                <div className="absolute -left-64 bottom-20 w-96 h-96 bg-purple/10 rounded-full filter blur-3xl opacity-30" />
            </div>
            
            <div className="relative z-10">
                <h1 className="heading mb-16">
                    <span className="text-purple">Education</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {education.map((edu) => (
                        <EducationCard
                            key={edu.id}
                            title={edu.title}
                            graduationDate={edu.graduationDate}
                            subheading={edu.subheading}
                            description={edu.description}
                            image={edu.image}
                            certificationLink={edu.certificationLink}
                        />
                    ))}
                </div>
                
                <div className="mt-24">
                    <AccomplishmentsMarquee items={accomplishments} />
                </div>
            </div>
        </div>
    );
}

export default Education;