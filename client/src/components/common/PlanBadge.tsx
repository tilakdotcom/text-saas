"use client";

import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Crown } from "lucide-react";
import { pricingPlans } from "@/common/constants/defaultValues";

export default function PlanBadge() {
  const priceId = "pro_monthly";

  const plan = pricingPlans.find((plan) => plan.priceId === priceId);


  return (
    <div>
      <Badge
        variant="outline"
        className={cn(
          "ml-2 hidden flex-row items-center border-amber-300 bg-linear-to-r from-amber-100 to-amber-200 lg:flex",
          !priceId && "border-red-300 from-red-100 to-red-200"
        )}
      >
        <Crown
          className={cn(
            "mr-1 h-2 w-3 text-amber-600",
            !priceId && "text-red-600"
          )}
        />
        {plan?.name}
      </Badge>
    </div>
  );
}
