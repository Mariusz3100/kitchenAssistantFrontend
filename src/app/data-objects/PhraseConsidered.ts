import {SavedToken} from './SavedToken';

export class PhraseConsidered {

}


export class AdjacencyPhraseConsidered{
  phrase: string;
}
export class DependencyPhraseConsidered{
  head: SavedToken;
  child: SavedToken;
}
