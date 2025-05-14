import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <>
      <input
        type={type}
        data-slot="input"
        className={cn(
          "flex h-[48px] w-full bg-primary border border-white/10 rounded-md focus:border-accent font-light text-base placeholder:text-white/60 outline-none px-3 hover:border-accent autofill:border-white/10 ",
          className
        )}
        {...props}
      />
      <style jsx>{`
        input:-webkit-autofill {
          box-shadow: inset 0 0 0 1000px #1c1c22 !important;
          -webkit-text-fill-color: white !important;
          caret-color: white !important;
          border: none !important;
        }
      `}</style>
    </>
  );
}

export { Input };
