import JournalCards from "@/components/sections/JournalCards";
import type { JournalEntryData } from "@/components/shared/JournalCard";

export default function JournalSection({
  entries,
}: {
  entries: JournalEntryData[];
}) {
  if (entries.length === 0) return null;

  return (
    <section className="relative isolate z-20 mt-20 overflow-hidden">
      <h2 data-reveal id="journal-heading" className="section-heading">
        Journal
      </h2>
      <JournalCards entries={entries} />
    </section>
  );
}
