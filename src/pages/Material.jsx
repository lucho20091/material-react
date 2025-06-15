import ButtonMT from "@/components/material-tailwind/Button";
import { NavbarSimple } from "@/components/material-tailwind/Navbar";
import Border from "@/components/Border";
import { NavbarDefault } from "@/components/material-tailwind/Navbar2";
import { StickyNavbar } from "@/components/material-tailwind/Navbar3";
import { FooterWithLogo } from "@/components/material-tailwind/Footer";
import { DefaultSidebar } from "@/components/material-tailwind/Sidebar";
import { DefaultSpinner } from "@/components/material-tailwind/Spinner";
import { DefaultStepper } from "@/components/material-tailwind/Stepper";
import Tabs from "@/components/material-tailwind/Tabs";
import Tabs2 from "@/components/material-tailwind/Tabs2";
import Tabs3 from "@/components/material-tailwind/Tabs3";
import Cards from "@/components/material-tailwind/Cards";
import Gallery from "@/components/material-tailwind/Gallery";

export default function Material() {
  return (
    <div className="p-4">
      <h1>
        Material Tailwind documentation:{" "}
        <a
          href="https://www.material-tailwind.com/docs/react/installation"
          className="text-blue-950 underline"
          target="_blank"
        >
          https://www.material-tailwind.com/docs/react/installation
        </a>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <Border className="md:col-span-3">
          <p className="text-center">Button</p>
          <ButtonMT />
        </Border>
        <Border className="md:col-span-3 grid gap-4">
          <p className="text-center">Navbar</p>
          <NavbarSimple />
          <NavbarDefault />
          <div className="mx-auto max-w-screen-xl mt-8">
            <StickyNavbar />
          </div>
        </Border>
        <Border className="md:col-span-3">
          <p className="text-center">Footer</p>
          <FooterWithLogo />
        </Border>
        <Border className="md:col-span-3 bg-black">
          <p className="text-center">Sidebar</p>
          <DefaultSidebar />
        </Border>
        <Border>
          <p className="text-center">Spinner</p>
          <DefaultSpinner />
        </Border>
        <Border className="md:col-span-2">
          <p className="text-center">Stepper</p>
          <DefaultStepper />
        </Border>
        <Border className="md:col-span-3">
          <p className="text-center">Tabs</p>
          <Tabs />
          <Tabs2 />
          <Tabs3 />
        </Border>
        <Border className="md:col-span-3">
          <p className="text-center">Cards</p>
          <Cards />
        </Border>
        <Border className="md:col-span-2 h-fit">
          <p className="text-center">Gallery</p>
          <Gallery />
        </Border>
      </div>
    </div>
  );
}
