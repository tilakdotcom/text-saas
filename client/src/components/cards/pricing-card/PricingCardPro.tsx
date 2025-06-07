import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckIcon } from "lucide-react";
import Link from "next/link";
import { listVariants, itemVariants } from "@/common/constants/defaultValues";
import { MotionDiv } from "@/components/common/FramerMotion";
import { Button } from "@/components/ui/button";

type PricingCardProProps = {
  name: string;
  description: string;
  items: string[];
  id: string;
  price: string;
  paymentLink: string;
};

export default function PricingCardPro({
  name,
  description,
  items,
  id,
  price,
}: PricingCardProProps) {
  return (
    <MotionDiv
      viewport={{ once: true }}
      variants={listVariants}
      whileHover={{ scale: 1.001 }}
      className="relative w-full max-w-lg rounded-2xl border  p-8 shadow-md hover:shadow-xl  border-rose-500 bg-rose-500/5"
    >
      <div
        className={cn(
          "relative z-10 flex h-full flex-col gap-4 rounded-2xl p-4 lg:p-8",
          id === "pro" && "gap-5"
        )}
      >
        <MotionDiv
          viewport={{ once: true }}
          variants={listVariants}
          className="flex items-center justify-between gap-4"
        >
          <div>
            <p className="text-lg font-bold capitalize text-black lg:text-xl">
              {name}
            </p>
            <p className="mt-2 text-base text-gray-800">{description}</p>
          </div>
        </MotionDiv>

        <MotionDiv
          viewport={{ once: true }}
          variants={listVariants}
          className="flex gap-2"
        >
          <p className="text-5xl font-extrabold text-black tracking-tight">
            ₹ {price}
          </p>
          <div className="mb-[5px] flex flex-col justify-end">
            <p className="text-xs text-gray-700">/month</p>
          </div>
        </MotionDiv>

        <MotionDiv
          viewport={{ once: true }}
          variants={listVariants}
          className="flex-1 space-y-2.5 text-sm text-gray-600 leading-relaxed"
        >
          {items.map((item, idx) => (
            <MotionDiv
              key={idx}
              variants={itemVariants}
              className="flex items-center gap-2"
            >
              <CheckIcon size={18} className="text-green-400" />
              <span>{item}</span>
            </MotionDiv>
          ))}
        </MotionDiv>

        <MotionDiv
          viewport={{ once: true }}
          variants={listVariants}
          className="flex w-full justify-center pt-4"
        >
          <Link className="w-full no-underline" href="/upload">
            <Button
              variant="link"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-800 to-rose-500 py-2 text-white no-underline transition-colors duration-1000 hover:from-rose-500 hover:to-rose-800"
            >
              Try Now <ArrowRight size={18} />
            </Button>
          </Link>
        </MotionDiv>
      </div>
    </MotionDiv>
  );
}
