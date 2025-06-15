import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
export default function ComboboxDemo() {
  const [open, setOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [label, setLabel] = useState("feature");
  const [open2, setOpen2] = useState(false);
  const statuses = [
    {
      value: "backlog",
      label: "Backlog",
    },
    {
      value: "todo",
      label: "Todo",
    },
    {
      value: "in progress",
      label: "In Progress",
    },
    {
      value: "done",
      label: "Done",
    },
    {
      value: "canceled",
      label: "Canceled",
    },
  ];
  const labels = [
    "feature",
    "bug",
    "enhancement",
    "documentation",
    "design",
    "question",
    "maintenance",
  ];

  return (
    <div>
      <p>Example 1</p>
      <div className="flex items-center space-x-4">
        <p className="text-muted-foreground text-sm">Status</p>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-[150px] justify-start">
              {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0" side="right" align="start">
            <Command>
              <CommandInput placeholder="Change status..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                  {statuses.map((status) => (
                    <CommandItem
                      key={status.value}
                      value={status.value}
                      onSelect={(value) => {
                        setSelectedStatus(
                          statuses.find(
                            (priority) => priority.value === value
                          ) || null
                        );
                        setOpen(false);
                      }}
                    >
                      {status.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <p>Example 2</p>
      <div className="flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center">
        <p className="text-sm leading-none font-medium">
          <span className="bg-primary text-primary-foreground mr-2 rounded-lg px-2 py-1 text-xs">
            {label}
          </span>
          <span className="text-muted-foreground">Create a new project</span>
        </p>
        <DropdownMenu open={open2} onOpenChange={setOpen2}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem>Assign to...</DropdownMenuItem>
              <DropdownMenuItem>Set due date...</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Apply label</DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="p-0">
                  <Command>
                    <CommandInput
                      placeholder="Filter label..."
                      autoFocus={true}
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>No label found.</CommandEmpty>
                      <CommandGroup>
                        {labels.map((label) => (
                          <CommandItem
                            key={label}
                            value={label}
                            onSelect={(value) => {
                              setLabel(value);
                              setOpen2(false);
                            }}
                          >
                            {label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                Delete
                <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
