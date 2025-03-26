import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Page() {


  const items = [
    {
      id: "item-1",
      question: "Is it accesible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern."
    },
    {
      id: "item-2",
      question: "How do I get started?",
      answer: "You can start by reading the documentation"
    },
    {
      id: "item-3",
      question: "Can I use it on multiple projects?",
      answer: "Yes. It's licensed under the MIT license"
    },
  ]

  return (
    // Type puede ser single o multiple
    // collapsible: permite cerrar el acordeon al darle click
    <Accordion type="single" collapsible className="w-full">
      {
        items.map(item => (
          <AccordionItem key={ item.id } value={ item.id }>
            <AccordionTrigger>{ item.question }</AccordionTrigger>
            <AccordionContent>
              { item.answer }
            </AccordionContent>
          </AccordionItem>

        ))}
    </Accordion>

  );
}