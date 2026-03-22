import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Gif } from '@gifs/interfaces/gif.interface';
import { GiphyResponse } from '@gifs/interfaces/giphy.interfaces';
import { GifMapper } from '@gifs/mapper/gif.mapper';
import { map, Observable, tap } from 'rxjs';

const loadFromLocalStorage = () => {
  const gifsFromLocalStorage = localStorage.getItem('gifs') ?? '{}' // Record<string, gifs[]>
  const gifs = JSON.parse(gifsFromLocalStorage)

  console.log(gifs)
  return gifs

}


@Injectable({ providedIn: 'root' })
export class GifsService {
  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGirfsLoading = signal(true);

  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
  searchHistoryKeys = computed( () => Object.keys(this.searchHistory()) )

  constructor() {
    this.loadTrendingGifs();
  }

  saveGifsToLocalStorage = effect( () => {
    const historyString = JSON.stringify(this.searchHistory())
    localStorage.setItem('gifs', historyString)
  })

  loadTrendingGifs() {
    this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
        params: {
          api_key: environment.gyphyApiKey,
          limit: 20,
        },
      })
      .subscribe((resp) => {
        const gifs = GifMapper.mapGiphyItemsToGifs(resp.data);
        this.trendingGifs.set(gifs);
        this.trendingGirfsLoading.set(false);
      });
  }

  searchGifs(query: string): Observable<Gif[]> {
    return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
      params: {
        api_key: environment.gyphyApiKey,
        limit: 20,
        q: query,
      },
    }).pipe(
      map(({data}) => data),
      map((items) => GifMapper.mapGiphyItemsToGifs(items)),

      tap((items) => {
        this.searchHistory.update((history) => ({
          ...history, [query.toLowerCase()]: items,
        }));
      })
    )
  }

  getHistoryGifs(key: string): Gif[]{
    return this.searchHistory()[key] ?? [];
  }
}
