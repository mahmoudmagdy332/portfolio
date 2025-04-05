import image from "@/assets/images/trash/about-faq.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
const FAQ = () => {
  return (
    <div className="py-10">
    <div className="flex flex-col lg:flex-row gap-8"> 

        <div className="lg:w-1/2  ">
             <div className="flex flex-col gap-4 w-11/12 ms-auto">
             <h3 className="italic  text-[50px] xl:text-[80px] font-[300]">FAQs</h3>
             <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className="text-lg font-bold text-primary">How is priw is pricing determicing determined for each plan?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger className="text-xl font-bold text-primary">What payment methods are accepted for subscriptions?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3" >
    <AccordionTrigger className="text-xl font-bold text-primary">Are there any hidden fees in the pricing?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
            
             </div>
        </div>
        <div className="lg:w-1/2 h-full">
           <img src={image} className="w-full h-full object-cover"/>
        </div>
    </div>
</div>
  )
}

export default FAQ