import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/constants";

export function Faq() {
  return (
    <section className="relative bg-mist py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" />
        <div className="mt-14">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
