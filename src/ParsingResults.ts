import {Token} from './app/Token';
import {WordDependency} from './app/WordDependency';
import {ProductNamesComparison} from './app/ProductNamesComparison';



export class ParsingResults {
  originalPhrase: string;
  productTypeFound: string;
  expectedResult: ExpectedResult;
  restrictivelyCalculatedResult: CalculatedResults;
  permisivelyCalculatedResult: CalculatedResults;
  restrictivelyCalculatedResultForPhrase: CalculatedResults;
  permisivelyCalculatedResultForPhrase: CalculatedResults;


  originalConnotations: WordDependency[];
  correctedConnotations: WordDependency[];
  dependencyConotationsFound: WordDependency[];

  adjacentyConotationsFound: string[][];
  entities: string;
  entityLess: string;

  brand: string;
  brandless: string;
//  tokenString: string;
  tokens: Token[];
  correctedPhrase: string;
  correctedTokens: Token[];



  initialNames: ProductNamesComparison;
  finalNames: ProductNamesComparison;

}
// {"text": "2", "lemma": "2", "tag": "CD"}
