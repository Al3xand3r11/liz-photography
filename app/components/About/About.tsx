import AboutImage from "./components/aboutImage";
import AboutInfo from "./components/aboutInfo";

export default function About() {
    return(
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mx-8 mt-12 h-screen" id="about">
            <AboutInfo />
            <AboutImage />
            
        </div>
    )

}