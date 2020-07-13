import {ParsingResults} from './ParsingResults';


export class ProductMatchingResult {
  baseResult: ParsingResults;

  calculatedVerdict: boolean;
  expectedVerdict: boolean;


  wordsMatching: CalculatedResults;


}
// {"text": "2", "lemma": "2", "tag": "CD"}
