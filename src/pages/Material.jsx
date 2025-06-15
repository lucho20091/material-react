import ButtonMT from "@/components/material-tailwind/Button";
import Border from "@/components/Border";
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
        <Border>
          <p className="text-center">Button</p>
          <ButtonMT />
        </Border>
      </div>
    </div>
  );
}
