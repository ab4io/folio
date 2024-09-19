import * as React from "react";

import { cn } from "@/lib/utils";

// eslint-disable-next-line react/display-name
export const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'group relative flex flex-col items-start rounded-2xl box-gen p-4 shadow hover:shadow-lg overflow-hidden',
      className
    )}
    {...props}
  />
));

Card.displayName = "Card";

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-base font-semibold tracking-tight body-primary', className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

// eslint-disable-next-line react/display-name
export const CardContents = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props}, ref)=> (
  <div
  ref={ref}
  className={cn("")}
  {...props}
  />
))