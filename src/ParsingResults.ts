import {Token} from './app/Token';



export class ParsingResults {
  originalPhrase: string;
  expectedResult: ExpectedResult;
  calculatedResult: CalculatedResults;
  originalConnotations: Token[][]
  correctedConnotations: Token[][]

  entities: string;
  entityLess: string;
//  tokenString: string;
  tokens: Token[];
  correctedPhrase: string;
  correctedTokens: Token[];


}
// {"text": "2", "lemma": "2", "tag": "CD"}
