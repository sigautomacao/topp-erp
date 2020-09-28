import { Injectable } from "@angular/core";
import { HttpClient, HttpBackend } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	public url = environment.url;

	constructor(
		public http: HttpClient
	) { }

	getList(queryParams: any): Observable<any[]> {
		return this.http.get<any[]>(`${this.url}/product`, { params: queryParams });
	}

	create(data: any): Observable<any[]> {
		return this.http.post<any[]>(`${this.url}/product`, data);
	}

	update(data: any, id: number): Observable<any[]> {
		return this.http.put<any[]>(`${this.url}/product/${id}`, data);
	}

	getById(id: number): Observable<any[]> {
		return this.http.get<any[]>(`${this.url}/product/${id}`);
	}

	delete(id: number): Observable<any[]> {
		return this.http.delete<any[]>(`${this.url}/product/${id}`);
	}

	mov_estoque(data: any) {
		return this.http.post<any[]>(`${this.url}/product/mov_estoque`, data);
	}

	//variações

	getVariations(queryParams: any): Observable<any[]> {
		return this.http.get<any[]>(`${this.url}/product/variation`, { params: queryParams });
	}

	createVariation(data: any): Observable<any[]> {
		return this.http.post<any[]>(`${this.url}/product/variation`, data);
	}

	updateVariation(data: any, id: number): Observable<any[]> {
		return this.http.put<any[]>(`${this.url}/product/variation/${id}`, data);
	}

	getVariation(id: number): Observable<any[]> {
		return this.http.get<any[]>(`${this.url}/product/variation/${id}`);
	}

	deleteVariation(id: number): Observable<any[]> {
		return this.http.delete<any[]>(`${this.url}/product/variation/${id}`);
	}
}
