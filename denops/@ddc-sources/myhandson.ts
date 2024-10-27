import { BaseSource } from "jsr:@shougo/ddc-vim@^7.1.0/source";
import { Item } from "jsr:@shougo/ddc-vim@^7.1.0/types";

type Params = Record<never, never>;

export class Source extends BaseSource<Params> {
  override async gather(args: {}): Promise<Item[]> {
    return [
      { word: "alpha" },
      { word: "beta" },
      { word: "gamma" },
    ];
  }

  override params() {
    return {};
  }
}
