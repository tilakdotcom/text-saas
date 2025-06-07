import {
  containerVariants,
  itemVariants,
  pricingPlans,
} from "@/common/constants/defaultValues";
import PricingCardBasic from "@/components/cards/pricing-card/PricingCardBasic";
import PricingCardPro from "@/components/cards/pricing-card/PricingCardPro";
import { MotionDiv, MotionSection } from "@/components/common/FramerMotion";

export default function PricingSection() {
  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative overflow-hidden"
      id="pricing"
    >
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-12 lg:pt-12">
        <MotionDiv
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          className="flex w-full flex-col items-center justify-center pb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-extrabold uppercase text-rose-500 tracking-wide">
            Pricing
          </h2>
          <p className="max-w-xl text-base text-gray-600 dark:text-gray-400">
            Choose the plan that fits your needs. Whether you&apos;re just
            getting started or need advanced features — we&apos;ve got you
            covered.
          </p>
        </MotionDiv>
        <div className="relative flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-stretch">
          <PricingCardPro key={"pro"} {...pricingPlans[1]} />
          <PricingCardBasic key={"basic"} {...pricingPlans[0]} />
        </div>
      </div>
    </MotionSection>
  );
}
