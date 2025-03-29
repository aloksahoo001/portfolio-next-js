"use client"
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
const Home = () => {
  console.log("Home page rendered");
  return <section className="h-full">
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pb-24">
        <div className="text-center xl:text-left order-2 xl:order-none mt-5 xl:mt-0">
          <span className="text-xl">Sr. Software Developer</span>
          <h1 className="h1 mb-6">
            Hello I&apos;m<br/><span className="text-accent">Alok Sahoo</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">
            I excel in developing user-friendly and hogh performant digital applications using various technology and platforms.
          </p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button 
            variant="outline"
            size="lg"
            className="uppercase flex items-center gap-2"
            >
              <span>Download CV</span>
              <Download className="text-xl"/>
            </Button>
            <div className="mb-8 xl:mb-0">
              <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
            </div>
          </div>
        </div>
        <div>
          <Photo/>
        </div>
      </div>
    </div>
  </section>
}

export default Home;