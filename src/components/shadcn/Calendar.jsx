import { ChevronDownIcon } from "lucide-react";
import { CalendarIcon } from "lucide-react";
import { parseDate } from "chrono-node";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
export default function CalendarDemo() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(null);
  const [open2, setOpen2] = useState(false);
  const [value, setValue] = useState("In 2 days");
  const [date2, setDate2] = useState(parseDate(value) || null);
  const [month, setMonth] = useState(date2);

  console.log(value);

  function formateDate(date) {
    if (!date) {
      return "";
    }
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }
  return (
    <>
      <p>Example 1</p>
      <div className="flex flex-col gap-3">
        <Label htmlFor="date" className="px-1">
          Date of birth
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date"
              className="w-48 justify-between font-normal"
            >
              {date ? date.toLocaleDateString() : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              onSelect={(date) => {
                setDate(date);
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
      <p>Example 2</p>
      <div className="flex flex-col gap-3">
        <Label htmlFor="date" className="px-1">
          Schedule Date
        </Label>
        <div className="relative flex gap-2">
          <Input
            id="date"
            value={value}
            placeholder="Tomorrow or next week"
            className="bg-background pr-10"
            onChange={(e) => {
              setValue(e.target.value);
              const date = parseDate(e.target.value);
              if (date) {
                setDate2(date);
                setMonth(date);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setOpen2(true);
              }
            }}
          />
          <Popover open={open2} onOpenChange={setOpen2}>
            <PopoverTrigger asChild>
              <Button
                id="date-picker"
                variant="ghost"
                className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
              >
                <CalendarIcon className="size-3.5" />
                <span className="sr-only">Select date</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto overflow-hidden p-0" align="end">
              <Calendar
                mode="single"
                selected={date2}
                captionLayout="dropdown"
                month={month}
                onMonthChange={setMonth}
                onSelect={(date) => {
                  setDate2(date);
                  setValue(formateDate(date));
                  setOpen2(false);
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="text-muted-foreground px-1 text-sm">
          Your post will be published on{" "}
          <span className="font-medium">{formateDate(date2)}</span>.
        </div>
      </div>
    </>
  );
}
