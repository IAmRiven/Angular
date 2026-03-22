import { Component, computed, inject } from '@angular/core';
import { GifList } from "../../components/gif-list/gif-list";
import { GifsService } from '@gifs/services/gifs.service';

@Component({
  selector: 'app-trending-page',
  templateUrl: './trending-page.html',
  imports: [GifList],
})
export default class TrendingPage {
  gifService = inject(GifsService);

}
