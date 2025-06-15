import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckIcon } from "lucide-react";
import Link from "next/link";
import { MotionDiv } from "@/components/common/FramerMotion";
import { listVariants, itemVariants } from "@/common/constants/defaultValues";

type PricingCardBasicProps = {
  name: string;
  description: string;
  items: string[];
  id: string;
  price: string;
  paymentLink: string;
};

export default function PricingCardBasic({
  name,
  description,
  items,
  id,
  price,
  paymentLink,
}: PricingCardBasicProps) {
  return (
    <MotionDiv
      viewport={{ once: true }}
      variants={listVariants}
      whileHover={{ scale: 1.001 }}
      className="relative w-full max-w-lg rounded-2xl border border-gray-500/20 bg-white/5 p-8 shadow-md hover:shadow-xl"
    >
      <div
        className={cn(
          "relative z-10 flex h-full flex-col gap-6 rounded-2xl p-4 lg:p-8",
          id === "pro" && "border-2 border-main-500 bg-main-500/5"
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
            {price}
          </p>
        </MotionDiv>

        <MotionDiv
          viewport={{ once: true }}
          variants={listVariants}
          className="flex-1 space-y-3 text-base text-gray-600 leading-relaxed"
        >
          {items.map((item, idx) => (
            <MotionDiv
              key={idx}
              variants={itemVariants}
              className="flex items-center gap-2 text-sm"
            >
              <CheckIcon size={18} className="text-green-400 " />
              <span>{item}</span>
            </MotionDiv>
          ))}
        </MotionDiv>

        <MotionDiv
          viewport={{ once: true }}
          variants={listVariants}
          className="flex w-full justify-center pt-4"
        >
          <Link
            href={paymentLink}
            className={cn(
              "flex w-full items-center justify-center gap-2 rounded-full border-2 py-2 text-white transition-all duration-700",
              "bg-gradient-to-r from-main-600 to-main-400 hover:from-main-500 hover:to-main-700",
              id === "pro" ? "border-main-900" : "border-main-200"
            )}
          >
            Try Now <ArrowRight size={18} />
          </Link>
        </MotionDiv>
      </div>
    </MotionDiv>
  );
}
