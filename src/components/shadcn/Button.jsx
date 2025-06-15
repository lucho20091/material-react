import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Loader2Icon } from "lucide-react";
import { useState } from "react";
export default function ButtonDemo() {
  const [clicked, setClicked] = useState(false);
  function handleClick() {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 5000);
  }
  console.log("clicked", clicked);
  return (
    <>
      <p>Example 1</p>
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button>Button</Button>
      </div>
      <p>Example 2</p>
      <Button asChild>
        <Link to="/login">Login</Link>
      </Button>
      <p>Example 3</p>
      <Button onClick={handleClick} disabled={clicked}>
        {clicked && <Loader2Icon className="animate-spin" />}
        {clicked ? "Please wait" : "Click here!"}
      </Button>
    </>
  );
}
