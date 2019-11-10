import {Token} from './app/Token';



export class ParsingResults {
  originalPhrase: string;
  expectedResult: ExpectedResult;
  entities: string;
  entityLess: string;
//  tokenString: string;
  tokens: Token[];
  correctedPhrase: string;
  correctedTokens: Token[];


}
// {"text": "2", "lemma": "2", "tag": "CD"}
