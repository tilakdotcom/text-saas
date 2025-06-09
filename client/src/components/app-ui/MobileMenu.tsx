import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LucideChevronRight, LucideMenu } from "lucide-react";

import Link from "next/link";
import { MotionDiv } from "../common/FramerMotion";
import { itemVariants } from "@/common/constants/defaultValues";
import { CustomButtonWrapper } from "./CustomButtom";

const HeaderLink = [
  {
    href: "",
    name: "",
  },
  {
    href: "",
    name: "",
  },
  {
    href: "",
    name: "",
  },
  {
    href: "",
    name: "",
  },
];

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <LucideMenu className="size-8 cursor-pointer text-gray-800 hover:text-gray-950" />
      </SheetTrigger>
      <SheetContent className="bg-gold-50">
        <MotionDiv variants={itemVariants}>
          <SheetHeader>
            <SheetTitle className=" flex items-center md:text-xl text-lg font-medium tracking-normal px-0.5 gap-x-2 ">
              <span className={`rounded-full p-2 bg-gold-100`}></span>
              BloomKnot
            </SheetTitle>
          </SheetHeader>
        </MotionDiv>

        <div className=" flex flex-col gap-y-4 w-10/12 mx-auto">
          <div className=" flex flex-col gap-y-4 ">
            {HeaderLink.map((link, i) => (
              <MotionDiv key={i} variants={itemVariants}>
                <SheetClose asChild key={link.name}>
                  <Link
                    className="flex items-center justify-between text-[15px] md:text-base py-2 tracking-wide text-gray-700 font-medium hover:translate-x-1 duration-700 capitalize  text-start transition-transform "
                    href={link.href}
                  >
                    {link.name}
                    <LucideChevronRight />
                  </Link>
                </SheetClose>
              </MotionDiv>
            ))}
          </div>

          <MotionDiv className="h-[0.5px] w-9/12 bg-gray-400 mx-auto" />

          <MotionDiv
            variants={itemVariants}
            className=" flex-col flex gap-y-2 "
          >
            <SheetClose asChild>
              <CustomButtonWrapper
                className="justify-center w-full font-medium"
                title={"Sign up"}
              />
            </SheetClose>
            <SheetClose asChild>
              <CustomButtonWrapper
                className="justify-center w-full font-medium"
                title={"Login"}
              />
            </SheetClose>
          </MotionDiv>
        </div>
      </SheetContent>
    </Sheet>
  );
}
