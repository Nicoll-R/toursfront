 /*import { Injectable } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import {ProductInterface} from '../interfaces/product.interface'


//EN PROCESO 25:31
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private apiUrl: string = 'http://127.0.0.1:8000/api/tour';

  constructor(private http: HttpClient) {}

  getAllProductos(): ProductInterface[]{
    return this.http.get(this.apiUrl)
        .pipe(
          map((data) => ({data} as ApiResponse=<ProductInterface[]>)),
          catchError(this.handleError)
        );
  }


}*/
