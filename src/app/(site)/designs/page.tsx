import Button from '@/components/Button';
import { MoveLeft, Palette } from 'lucide-react';

export default function DesignsPage() {
  return (
    <div className="flex flex-col gap-8 py-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 min-h-screen px-4 max-w-3xl mx-auto">
      <div className="px-4">
        <Button variant="social" href="/" className="w-20 rounded-full">
          <MoveLeft size={14} />
          Back
        </Button>
      </div>

      <div className="flex flex-col items-center justify-center flex-1 text-center px-4 gap-6 pb-20">
        <div className="p-4 rounded-full bg-muted/50 outline-1 outline-border outline-offset-4 mb-4">
          <Palette className="text-muted-foreground animate-pulse" size={32} />
        </div>

        <div>
          <h1 className="font-serif text-4xl mb-3 tracking-tight">Design Gallery</h1>
          <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
            I&apos;m currently curating a collection of design works, motion graphics, and UI
            experiments. Come back soon to see what I&apos;ve been building.
          </p>
        </div>

        <div className="flex gap-4 items-center">
          <div className="h-px w-8 bg-border" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/40 font-fragment">
            Coming Soon
          </span>
          <div className="h-px w-8 bg-border" />
        </div>
      </div>
    </div>
  );
}
