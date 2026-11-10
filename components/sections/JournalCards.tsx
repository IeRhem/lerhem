import JournalCard from "@/components/shared/JournalCard";
import type { JournalEntryData } from "@/components/shared/JournalCard";

export default function JournalCards({
  entries,
}: {
  entries?: JournalEntryData[];
}) {
  if (!entries?.length) return null;

  return (
    <div className="mt-10 flex w-full flex-col gap-3">
      {entries.map((entry) => (
        <JournalCard key={entry.id} {...entry} />
      ))}
    </div>
  );
}
