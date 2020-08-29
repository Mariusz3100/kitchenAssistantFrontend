
import {ParsingResults} from './ParsingResults';
import {ProductMatchingResult} from './ProductMatchingResult';



export class MatchingProcessResult {
  ingredientParsingDetails: ParsingResults;
  productsConsideredParsingResults: ProductMatchingResult[];
  incorrectProductsConsideredParsingResults: ProductMatchingResult[];
  productNamesNotFound: string[];

}
// {"text": "2", "lemma": "2", "tag": "CD"}
