import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";
import Social from "../Header/Social";
import { cn } from "@/lib/utils";

interface ProfileProps {
  ClassName?: string;
}

const Profile: React.FC<ProfileProps> = ({ ClassName }) => {
  return (
    <div
      className={cn(
        "z-[3] mx-auto hidden h-max w-full flex-col items-center justify-center gap-y-4 xl:fixed xl:left-[2%] xl:top-[30rem] xl:mx-0 xl:flex xl:max-w-sm xl:-translate-y-1/2",
        ClassName
      )}
    >
      <Card className="w-full border-foreground bg-card/10 backdrop-blur-sm">
        <CardHeader className="flex-row justify-between">
          <CardTitle className="text-center text-2xl font-semibold leading-[3rem]">
            Sultonoir
            <span className="text-rose-700 dark:text-secondary">.</span>
          </CardTitle>
          <div className="flex flex-col items-end text-[14px]">
            <p>
              Front
              <span className="text-rose-700 dark:text-secondary">-End</span>
            </p>
            <p>
              & {""}
              <span>Web Design</span>
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mx-auto w-52 overflow-hidden rounded-full border-[2px] border-foreground">
            <Image
              src="/1.png"
              alt="profile"
              width={200}
              height={200}
              priority
              quality={95}
            />
          </div>
        </CardContent>
        <CardDescription className="px-6 pt-0 text-center text-lg text-foreground">
          sultonalidrus4@gmail.com
        </CardDescription>
        <p className="px-6 text-center">Base in Sukabumi,Indonesia</p>
        <p className="p-6 text-center text-[12px] text-muted-foreground">
          © 2022 Sulton. All Rights Reserved
        </p>
        <div className="mx-auto p-6">
          <Social />
        </div>
        <CardFooter>
          <Button className="w-full rounded-full border bg-rose-700 text-white hover:border-rose-700 hover:bg-transparent hover:text-rose-700">
            <Mail className="mr-2" />
            Hire me!
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Profile;
