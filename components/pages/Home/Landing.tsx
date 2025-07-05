import Button from "@/components/hooks/Button";
import Grid from "@/components/styles/Grid";
import Image from "next/image";
import React from "react";
import heroImage from "@/assets/images/hero.png";

const Landing = () => {
  return (
    <Grid>
      <div className="w-full mt-4">
        <span className="text-sm md:py-6 mb-5 text-secondary pl-1 opacity-70">
          WELCOME TO BRIGHTHAT
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-[4.0rem]">
          Borderless,
          <br />
          <span className="text-primary">outcome-focused</span>
          <br />
          tutoring at its best
        </h1>
        <p className="mt-4 text-sm pl-2">Engage. Enhance. Extend.</p>

        <Button
          title="Get Started"
          type="button"
          classNames="mt-6 bg-primary text-white"
        />
      </div>
      <div className="w-full mt-6 flex justify-center">
        <Image
          src={heroImage}
          width={1000}
          height={1000}
          alt="hero image"
          className="w-full me-10 md:mx-auto" 
        />
      </div>
    </Grid>
  );
};

export default Landing;
