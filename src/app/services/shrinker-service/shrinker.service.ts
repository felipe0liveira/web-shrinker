import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShrinkerService {

  constructor(private http: HttpClient) { }

  shrink(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http.post(environment.shrink, { url })
        .subscribe((response: any) => {
          resolve(response.short);
        }, (err) => reject(err));
    });
  }
}
