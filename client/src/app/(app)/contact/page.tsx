import {
  containerVariants,
  itemVariants,
} from "@/common/constants/defaultValues";
import BgGradient from "@/components/common/BGGradient";
import { MotionDiv, MotionH1, MotionP } from "@/components/common/FramerMotion";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      <BgGradient className="from-cyan-200 via-teal-200 to-emerald-200" />
      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <MotionH1
              variants={itemVariants}
              viewport={{ once: true }}
              className="bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-5xl"
            >
              Get in Touch
            </MotionH1>
            <MotionP
              viewport={{ once: true }}
              variants={itemVariants}
              className="mt-4 text-lg text-gray-600"
            >
              Have questions or feedback? We&apos;d love to hear from you.
            </MotionP>
          </div>
        </div>
      </MotionDiv>
    </div>
  );
}
