export type CardMeta = { cats: string[]; group: string; text: string };
export type FilterState = { q: string; cat: string | null; group: string | null };

const textMatches = (card: CardMeta, q: string) => {
  const needle = q.trim().toLowerCase();
  return !needle || card.text.includes(needle);
};

export function matches(card: CardMeta, state: FilterState): boolean {
  if (state.cat && !card.cats.includes(state.cat)) return false;
  if (state.group && card.group !== state.group) return false;
  return textMatches(card, state.q);
}

export function countByCat(cards: CardMeta[], q: string): Record<string, number> {
  const counts: Record<string, number> = { all: 0 };
  for (const card of cards) {
    if (!textMatches(card, q)) continue;
    counts.all++;
    for (const cat of card.cats) counts[cat] = (counts[cat] ?? 0) + 1;
  }
  return counts;
}
