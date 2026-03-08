import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechnicalExpertise } from "@/components/sections/TechnicalExpertise";
import { Projects } from "@/components/sections/Projects";
import { Blog } from "@/components/sections/Blog";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
    return (
        <>
            <Hero />
            <About />
            <TechnicalExpertise />
            <Projects />
            <Blog />
            <Resume />
            <Contact />
        </>
    );
}
