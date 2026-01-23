import type { LucideIcon } from "lucide-react"
import * as React from "react"
import { Icon } from "@/components/ui/icon"
import { cn } from "@/lib/utils"

interface InputProps extends React.ComponentProps<"input"> {
    leftIcon?: LucideIcon | null
    rightIcon?: LucideIcon | null
    onRightIconClick?: () => void
}

function Input({
                   className,
                   type,
                   leftIcon,
                   rightIcon,
                   onRightIconClick,
                   ...props
               }: InputProps) {
    return (
        <div className="relative w-full">
            {leftIcon && (
                <Icon
                    iconNode={leftIcon}
                    className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"
                />
            )}

            <input
                type={type}
                data-slot="input"
                className={cn(
                    "flex items-center w-full rounded-xl border-2 px-[44px] py-[12px]",
                    leftIcon && "pl-12",
                    rightIcon && "pr-12",
                    className
                )}
                {...props}
            />

            {rightIcon && (
                <button
                    type="button"
                    onClick={onRightIconClick}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                    <Icon
                        iconNode={rightIcon}
                        className="h-5 w-5"
                    />
                </button>
            )}
        </div>
    )
}

export { Input }
