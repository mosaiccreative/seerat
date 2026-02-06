import { useMotionPreference } from '@/hooks/useMotionPreference';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export function MotionToggle() {
  const { motionReduced, toggleMotion } = useMotionPreference();

  return (
    <div className="flex items-center gap-2.5">
      <Switch
        id="motion-toggle"
        checked={motionReduced}
        onCheckedChange={toggleMotion}
        aria-label="Toggle motion effects"
        aria-describedby="motion-description"
        className="data-[state=checked]:bg-gold data-[state=unchecked]:bg-muted focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      />
      <Label 
        htmlFor="motion-toggle" 
        className="font-ui text-[11px] tracking-wider uppercase cursor-pointer text-foreground/70 hover:text-foreground transition-colors"
      >
        Motion {motionReduced ? 'Off' : 'On'}
      </Label>
      <span id="motion-description" className="sr-only">
        Toggle to reduce or disable animations and motion effects
      </span>
    </div>
  );
}