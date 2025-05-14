import { Input as InputShad } from "@/components/ui/input";

interface SliceProps {
  error?: string;
  helpEroor?: string;
}
export const Input = ({
  error,
  ...props
}: React.ComponentProps<"input"> & SliceProps) => {
  return (
    <div>
      <InputShad
        {...props}
        className={`${error ? " border-orange-400 " : ""}`}
      />
      <span
        className={`pl-2 text-[13px] font-light text-orange-500 block max-h-0 overflow-hidden transition-all duration-300 ${
          error ? "max-h-10" : ""
        }`}
      >
        {error}
      </span>
    </div>
  );
};
