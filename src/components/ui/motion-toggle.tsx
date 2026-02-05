 import { useMotionPreference } from '@/hooks/useMotionPreference';
 import { Switch } from '@/components/ui/switch';
 import { Label } from '@/components/ui/label';
 
 export function MotionToggle() {
   const { motionReduced, toggleMotion } = useMotionPreference();
 
   return (
     <div className="flex items-center gap-3">
       <Switch
         id="motion-toggle"
         checked={motionReduced}
         onCheckedChange={toggleMotion}
         aria-describedby="motion-description"
       />
       <Label 
         htmlFor="motion-toggle" 
         className="text-sm cursor-pointer"
       >
         Motion Off
       </Label>
       <span id="motion-description" className="sr-only">
         Toggle to reduce or disable animations and motion effects
       </span>
     </div>
   );
 }