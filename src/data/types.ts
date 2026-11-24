export type Block = { type: 'text'; value: string } | { type: 'code'; lang: string; value: string };

export type Link = { label: string; url: string };

export type Repo = {
  slug: string;
  owner: string;
  name: string;
  url: string;
  links: Link[];
  oneLiner: string;
  what: string;
  howTo: Block[];
  reachFor: string;
  lang: string | null;
  stars: number;
  topics: string[];
  starredAt: string;
  categories: string[];
  primaryCategory: string;
  group: Record<string, string>;
  hasNotes: boolean;
};

export type Category = {
  slug: string;
  title: string;
  emoji: string;
  intro: string;
  section: string;
  groups: string[];
  count: number;
  order: number;
};

export type StarsData = { generatedAt: string; repos: Repo[]; categories: Category[] };
