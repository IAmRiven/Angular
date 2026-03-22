import { Component, inject, signal } from '@angular/core';
import { GifList } from "@gifs/components/gif-list/gif-list";
import { GifsService } from '../../services/gifs.service';
import { Gif } from '@gifs/interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [GifList],
  templateUrl: './search-page.html',
})
export default class SearchPage {

  GifsService = inject(GifsService);
  gifs = signal<Gif[]>([]);

  onSearch(query: string) {
    this.GifsService.searchGifs(query).subscribe((resp) => {
      this.gifs.set(resp);
      console.log({ gifs: this.gifs() });
    });
  }
}
