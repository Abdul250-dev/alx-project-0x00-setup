import React from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />

      <div className="mt-4 space-y-2">
        <Button shape="rounded-sm" styles="">
          Small Rounded Button
        </Button>
        <Button shape="rounded-lg" styles="">
          Medium Rounded Button
        </Button>
        <Button shape="rounded-full" styles="">
          Full Rounded Button
        </Button>
      </div>
    </div>
  );
};

export default Landing;
