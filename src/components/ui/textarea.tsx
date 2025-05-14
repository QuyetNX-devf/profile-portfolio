import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex m-h-[80px] border-1 focus:border-accent border-white/10 rounded-md bg-primary px-3 text-base placeholder:text-white/60 outline-none py-5",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
