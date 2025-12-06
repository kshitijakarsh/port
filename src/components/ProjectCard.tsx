import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ProjectCard() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <a
          className="px-1.5 sm:px-2.5 py-0.5 text-[10px] sm:text-xs font-light whitespace-nowrap"
          style={{
            color: "var(--text-primary)",
            backgroundColor: "var(--bg-button)",
            borderRadius: "var(--outer-radius)",
            border: "var(--thin-border)",
          }}
        >
          Know More
        </a>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
