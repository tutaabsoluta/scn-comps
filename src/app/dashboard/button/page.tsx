'use client';

import { Button } from "@/components/ui/button";
import { ChevronRight, Loader2, MailOpen } from "lucide-react";

export default function Page() {
  return (
    <div className="flex gap-2">
      <Button variant={'default'}>Default</Button>
      <Button variant={'destructive'}>Destructive</Button>
      <Button variant={'ghost'}>Ghost</Button>
      <Button variant={'link'}>Link</Button>
      <Button variant={'outline'}>Outline</Button>
      <Button variant={'secondary'}>secondary</Button>
      <Button variant={'secondary'} disabled >Disabled</Button>
      <Button variant={'success'}>success</Button>
      <Button onClick={() => { console.log('Click') }}>Click me</Button>
      <Button capitalize={false}>capitalize false</Button>

      <Button variant="outline" size="icon">
        <ChevronRight />
      </Button>

      <Button>
        <MailOpen /> Login with Email
      </Button>

      <Button disabled>
        <Loader2 className="animate-spin" />
        Please wait
      </Button>

    </div>

  );
}