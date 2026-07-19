
import * as React from "react"
import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
    HTMLTextAreaElement,
    React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
    return (
        <textarea
            className={cn(
                "flex min-h-[80px] w-full rounded-3xl border border-[#DCE6EE] bg-white px-4 py-3 text-base text-[#0F1720] ring-offset-white placeholder:text-[#293241]/48 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4E7A97] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                className
            )}
            ref={ref}
            {...props}
        />
    )
})
Textarea.displayName = "Textarea"

export { Textarea }
