'use client';

import type { Lang } from '@/components/state';
import { useAppState } from '@/components/state';
import { en } from './en';
import { cs } from './cs';

/** The canonical content shape — every locale must match the English dictionary. */
export type Dict = typeof en;

export const dictionaries: Record<Lang, Dict> = { en, cs };

/**
 * Active content + language controls. `t` is the dictionary for the current
 * language; `lang`/`setLang` come from the global AppProvider state.
 */
export function useI18n() {
  const { lang, setLang } = useAppState();
  return { t: dictionaries[lang], lang, setLang };
}
