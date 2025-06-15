import { Minus, Plus } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useState } from "react";
export default function DrawerDemo() {
  const data = [
    {
      goal: 400,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 278,
    },
    {
      goal: 189,
    },
    {
      goal: 239,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 278,
    },
    {
      goal: 189,
    },
    {
      goal: 349,
    },
  ];
  const [goal, setGoal] = useState(350);
  const [open, setOpen] = useState(false);
  function onClick(adjustment) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }
  function ProfileForm() {
    return (
      <form className="grid items-start gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" defaultValue="shadcn@example.com" />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="username">Username</Label>
          <Input id="username" defaultValue="@shadcn" />
        </div>
        <Button type="submit">Save changes</Button>
      </form>
    );
  }
  return (
    <>
      <p>Example 1</p>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>
                Set your daily activity goal.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <div className="flex items-center justify-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 shrink-0 rounded-full"
                  onClick={() => onClick(-10)}
                  disabled={goal <= 200}
                >
                  <Minus />
                  <span className="sr-only">Decrease</span>
                </Button>
                <div className="flex-1 text-center">
                  <div className="text-7xl font-bold tracking-tighter">
                    {goal}
                  </div>
                  <div className="text-muted-foreground text-[0.70rem] uppercase">
                    Calories/day
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 shrink-0 rounded-full"
                  onClick={() => onClick(10)}
                  disabled={goal >= 400}
                >
                  <Plus />
                  <span className="sr-only">Increase</span>
                </Button>
              </div>
              <div className="mt-3 h-[120px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <Bar
                      dataKey="goal"
                      style={{
                        fill: "hsl(var(--foreground))",
                        opacity: 0.9,
                      }}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
      <p>Example 2</p>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    </>
  );
}
