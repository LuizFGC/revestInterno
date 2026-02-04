"use client"

import { ptBR } from "date-fns/locale"
import { CalendarIcon } from "lucide-react"
import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Field, FieldLabel } from "@/components/ui/field"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from "@/components/ui/input-group"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

function formatDate(date: Date | undefined) {
    if (!date) {
        return ""
    }

    return date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    })
}

function isValidDate(date: Date | undefined) {
    if (!date) {
        return false
    }
    return !isNaN(date.getTime())
}

// Adicionar props para controlar externamente
interface DatePickerInputProps {
    value?: Date | undefined;
    onChange?: (date: Date | undefined) => void;
    className?: string;
    side?:string;
}

export function DatePickerInput({ value: externalValue, onChange, className, side }: DatePickerInputProps) {
    const [open, setOpen] = React.useState(false)
    const [date, setDate] = React.useState<Date | undefined>(externalValue || new Date())
    const [month, setMonth] = React.useState<Date | undefined>(date)
    const [inputValue, setInputValue] = React.useState(formatDate(date))

    // Sincronizar com valor externo
    React.useEffect(() => {
        if (externalValue !== undefined) {
            setDate(externalValue)
            setInputValue(formatDate(externalValue))
            setMonth(externalValue)
        }
    }, [externalValue])

    const handleDateChange = (newDate: Date | undefined) => {
        setDate(newDate)
        setInputValue(formatDate(newDate))
        onChange?.(newDate) // Notificar o pai
    }

    return (
        <Field className="w-full  ">
            <FieldLabel htmlFor="date-required"></FieldLabel>
            <InputGroup className={`border-background rounded-xl ${className}`}>
                <InputGroupInput
                    id="date-required"
                    value={inputValue}
                    onChange={(e) => {
                        const newDate = new Date(e.target.value)
                        setInputValue(e.target.value)
                        if (isValidDate(newDate)) {
                            handleDateChange(newDate)
                        }
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "ArrowDown") {
                            e.preventDefault()
                            setOpen(true)
                        }
                    }}
                    className={`pointer-events-none ${className}`}
                />
                <InputGroupAddon align="inline-end">
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <InputGroupButton
                                id="date-picker"
                                size="icon-xs"
                                aria-label="Select date"
                                className="cursor-pointer"
                            >
                                <CalendarIcon />
                                <span className="sr-only">Select date</span>
                            </InputGroupButton>
                        </PopoverTrigger>
                        <PopoverContent
                            className={`w-auto overflow-hidden p-0 bg-white rounded-xl text-black`}
                            side={side}
                            align="end"
                            sideOffset={8}
                            avoidCollisions={false}
                        >
                            <Calendar
                                mode="single"
                                selected={date}
                                month={month}
                                locale={ptBR}
                                onMonthChange={setMonth}
                                onSelect={(newDate) => {
                                    handleDateChange(newDate)
                                    setOpen(false)
                                }}
                            />
                        </PopoverContent>
                    </Popover>
                </InputGroupAddon>
            </InputGroup>
        </Field>
    )
}
