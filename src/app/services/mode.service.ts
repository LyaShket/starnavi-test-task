import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mode } from '../types/mode.interface';

@Injectable({
  providedIn: 'root'
})
export class ModeService {
  constructor(
    private readonly http: HttpClient
  ) {
  }

  getModes() {
    return this.http.get<Mode[]>('https://60816d9073292b0017cdd833.mockapi.io/modes');
  }
}
