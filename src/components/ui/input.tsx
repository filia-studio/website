
import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-12 w-full rounded-full border border-[#DCE6EE] bg-white px-4 py-2 text-base text-[#0F1720] ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#293241]/48 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4E7A97] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

export { Input }
