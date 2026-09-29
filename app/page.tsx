import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Thesis } from "@/components/sections/Thesis";
import { Projects } from "@/components/sections/Projects";
import { TechnicalExpertise } from "@/components/sections/TechnicalExpertise";
import { Recognition } from "@/components/sections/Recognition";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
    return (
        <>
            <Hero />
            <Highlights />
            <About />
            <Experience />
            <Thesis />
            <Projects />
            <TechnicalExpertise />
            <Recognition />
            <Blog />
            <Contact />
        </>
    );
}
