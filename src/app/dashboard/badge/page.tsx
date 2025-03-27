import { Badge } from "@/components/ui/badge"

export default function Page() {
  return (
    <div className="flex gap-2">
      <Badge>Badge</Badge>
      <Badge variant={'destructive'}>Destructive</Badge>
      <Badge variant={'outline'}>Outline</Badge>
      <Badge variant={'secondary'}>Secondary</Badge>
      <Badge capitalize={ true } variant={'info'}>info</Badge>
      <Badge capitalize={ true } variant={'success'}>success</Badge>
    </div>
  );
}