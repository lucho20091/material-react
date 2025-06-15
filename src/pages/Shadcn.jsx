import AccordionDemo from "@/components/shadcn/Accordion";
import Alert from "@/components/shadcn/Alert";
import AlertDialog from "@/components/shadcn/AlertDialog";
import AspectRatioDemo from "@/components/shadcn/AspectRatio";
import AvatarDemo from "@/components/shadcn/AvatarDemo";
import BadgeDemo from "@/components/shadcn/BadgeDemo";
import BreadcrumbDemo from "@/components/shadcn/Breadcrumb";
import ButtonDemo from "@/components/shadcn/Button";
import CalendarDemo from "@/components/shadcn/Calendar";
import CardDemo from "@/components/shadcn/Card";
import CarouselDemo from "@/components/shadcn/Carousel";
import CheckboxDemo from "@/components/shadcn/Checkbox";
import CollapsibleDemmo from "@/components/shadcn/Collapsible";
import ComboboxDemo from "@/components/shadcn/Combobox";
import DialogDemo from "@/components/shadcn/Dialog";
import DrawerDemo from "@/components/shadcn/Drawer";
import DropdownMenuDemo from "@/components/shadcn/DropdownMenu";
import InputOTPDemo from "@/components/shadcn/InputOTP";
import MenuBarDemo from "@/components/shadcn/MenuBar";
import NavigationMenuDemo from "@/components/shadcn/NavigationMenu";
import ResizableDemo from "@/components/shadcn/Resizable";
import ScrollAreaDemo from "@/components/shadcn/ScrollArea";
import SeparatorDemo from "@/components/shadcn/Separator";
import SheetDemo from "@/components/shadcn/Sheet";
import SkeletonDemo from "@/components/shadcn/Skeleton";
import TableDemo from "@/components/shadcn/Table";
import TabsDemo from "@/components/shadcn/Tabs";
import Border from "@/components/Border";
import TooltipDemo from "@/components/shadcn/Tooltip";

export default function Shadcn() {
  return (
    <div className="p-4">
      <h1>
        Shadcn documentation:{" "}
        <a
          href="https://ui.shadcn.com/docs/installation/vite"
          className="text-blue-950 underline"
          target="_blank"
        >
          https://ui.shadcn.com/docs/installation/vite
        </a>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <Border>
          <p className="text-center">Accordion</p>
          <AccordionDemo />
        </Border>
        <Border>
          <p className="text-center">Alert</p>
          <Alert />
        </Border>
        <Border>
          <p className="text-center">Alert Dialog</p>
          <AlertDialog />
        </Border>
        <Border>
          <p className="text-center">Aspect Ratio</p>
          <AspectRatioDemo />
        </Border>
        <Border>
          <p className="text-center">Avatar</p>
          <AvatarDemo />
        </Border>
        <Border>
          <p className="text-center">Badge</p>
          <BadgeDemo />
        </Border>
        <Border>
          <p className="text-center">Breadcrumb</p>
          <BreadcrumbDemo />
        </Border>
        <Border>
          <p className="text-center">Button</p>
          <ButtonDemo />
        </Border>
        <Border>
          <p className="text-center">Calendar</p>
          <CalendarDemo />
        </Border>
        <Border>
          <p className="text-center">Card</p>
          <CardDemo />
        </Border>
        <Border>
          <p className="text-center">Carousel</p>
          <CarouselDemo />
        </Border>
        <Border>
          <p className="text-center">Checkbox</p>
          <CheckboxDemo />
        </Border>
        <Border>
          <p className="text-center">Collapsible</p>
          <CollapsibleDemmo />
        </Border>
        <Border className="md:col-span-2">
          <p className="text-center">Combobox</p>
          <ComboboxDemo />
        </Border>
        <Border>
          <p className="text-center">Dialog</p>
          <DialogDemo />
        </Border>
        <Border>
          <p className="text-center">Drawer</p>
          <DrawerDemo />
        </Border>
        <Border>
          <p className="text-center">Dropdown Menu</p>
          <DropdownMenuDemo />
        </Border>
        <Border>
          <p className="text-center">Input OTP</p>
          <InputOTPDemo />
        </Border>
        <Border>
          <p className="text-center">Menubar</p>
          <MenuBarDemo />
        </Border>
        <Border className="md:col-span-3 md:w-full">
          <p className="text-center">Navigation Menu</p>
          <div className="w-fit mx-auto">
            <NavigationMenuDemo />
          </div>
        </Border>
        <Border className="md:col-span-2 h-fit">
          <p className="text-center">Resizable</p>
          <ResizableDemo />
        </Border>
        <Border>
          <p className="text-center">Scroll Area</p>
          <ScrollAreaDemo />
        </Border>
        <Border>
          <p className="text-center">Separator</p>
          <SeparatorDemo />
        </Border>
        <Border>
          <p className="text-center">Sheet</p>
          <SheetDemo />
        </Border>
        <Border>
          <p className="text-center">Skeleton</p>
          <SkeletonDemo />
        </Border>
        <Border className="md:col-span-2">
          <p className="text-center">Table</p>
          <TableDemo />
        </Border>
        <Border>
          <p className="text-center">Tabs</p>
          <TabsDemo />
        </Border>
        <Border>
          <p className="text-center">Tooltip</p>
          <TooltipDemo />
        </Border>
      </div>
    </div>
  );
}
