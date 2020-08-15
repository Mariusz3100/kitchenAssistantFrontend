import {PhraseConsidered} from './PhraseConsidered';
import {PhraseConsideredMatch} from './PhraseConsideredMatch';

export class PhraseFindingResults {
  productPhrases: PhraseConsidered[];
  ingredientPhrases: PhraseConsidered[];
  extraProductPhrases: PhraseConsidered[];
  extraIngredientPhrases: PhraseConsidered[];
  matchedPhrases: PhraseConsideredMatch[];


}
