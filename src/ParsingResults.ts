import {Token} from './app/Token';
import {WordDependency} from './app/WordDependency';



export class ParsingResults {
  originalPhrase: string;
  productTypeFound: string;
  expectedResult: ExpectedResult;
  restrictivelyCalculatedResult: CalculatedResults;
  permisivelyCalculatedResult: CalculatedResults;
  originalConnotations: WordDependency[];
  correctedConnotations: WordDependency[];
  dependencyConotationsFound: WordDependency[];

  adjacentyConotationsFound: string[][];
  entities: string;
  entityLess: string;
//  tokenString: string;
  tokens: Token[];
  correctedPhrase: string;
  correctedTokens: Token[];


}
// {"text": "2", "lemma": "2", "tag": "CD"}
