import {SavedToken} from './SavedToken';
import {PhraseConsidered} from './PhraseConsidered';

export class PhraseConsideredMatch {
  ingredientPhraseMatched: PhraseConsidered[];
  match: PhraseConsidered;
  productPhraseMatched: PhraseConsidered[];
  wordAssociacions: WordAssociacion[];
  relatedUsdaPhrases: string[];
}

