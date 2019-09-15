import {Token} from './app/Token';

export class ParsingResults {
  originalPhrase: string;
  entities: string;
  entityLess: string;
  tokenString: string;
  tokens: Token[];

}
// {"text": "2", "lemma": "2", "tag": "CD"}
