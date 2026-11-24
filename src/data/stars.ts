import raw from './stars.json';
import type { StarsData } from './types.ts';

// stars.json is generated and count-checked by scripts/parse.ts; JSON inference can't express Record/union fields.
export const stars = raw as unknown as StarsData;
