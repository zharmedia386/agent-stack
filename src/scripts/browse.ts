import { countByCat, matches, type CardMeta, type FilterState } from '../lib/filter.ts';

const search = document.querySelector<HTMLInputElement>('#q');
const cards = [...document.querySelectorAll<HTMLElement>('[data-card]')];
const chips = [...document.querySelectorAll<HTMLButtonElement>('[data-chip]')];
const empty = document.querySelector<HTMLElement>('#empty');
const openList = document.querySelector<HTMLAnchorElement>('[data-open-list]');

const metas: CardMeta[] = cards.map((card) => ({
  cats: (card.dataset.cats ?? '').split(','),
  group: card.dataset.group ?? '',
  text: card.dataset.text ?? '',
}));

const params = new URLSearchParams(location.search);
const state: FilterState = { q: params.get('q') ?? '', cat: params.get('c'), group: params.get('g') };
// Category pages expose sub-group chips; the home page exposes category chips.
const chipKind = chips[0]?.dataset.chipKind === 'group' ? 'group' : 'cat';

function render() {
  let shown = 0;
  cards.forEach((card, index) => {
    const visible = matches(metas[index], state);
    card.hidden = !visible;
    if (visible) shown++;
  });
  if (empty) empty.hidden = shown > 0;

  const counts =
    chipKind === 'cat'
      ? countByCat(metas, state.q)
      : metas.reduce<Record<string, number>>(
          (acc, meta) => {
            if (!matches(meta, { ...state, group: null })) return acc;
            acc.all++;
            acc[meta.group] = (acc[meta.group] ?? 0) + 1;
            return acc;
          },
          { all: 0 },
        );

  const active = chipKind === 'cat' ? state.cat : state.group;
  chips.forEach((chip) => {
    const key = chip.dataset.chip ?? 'all';
    chip.setAttribute('aria-pressed', String(key === (active ?? 'all')));
    const badge = chip.querySelector('[data-count]');
    if (badge) badge.textContent = String(counts[key] ?? 0);
  });

  if (openList) {
    openList.hidden = !state.cat || state.cat === 'all';
    if (state.cat) openList.href = `/c/${state.cat}/`;
  }

  const next = new URLSearchParams();
  if (state.q.trim()) next.set('q', state.q.trim());
  if (state.cat) next.set('c', state.cat);
  if (state.group) next.set('g', state.group);
  const query = next.toString();
  history.replaceState(null, '', query ? `?${query}` : location.pathname);
}

search?.addEventListener('input', () => {
  state.q = search.value;
  render();
});

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    const key = chip.dataset.chip === 'all' ? null : (chip.dataset.chip ?? null);
    if (chipKind === 'cat') state.cat = key;
    else state.group = key;
    render();
  });
});

document.querySelector('#clear-filters')?.addEventListener('click', () => {
  state.q = '';
  state.cat = null;
  state.group = null;
  if (search) search.value = '';
  render();
});

if (search) search.value = state.q;
render();
