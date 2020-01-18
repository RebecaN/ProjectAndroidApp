import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    //return this.http.get(`${environment.apiUrl}/product`);
    return this.http.get<ProductApi[]>(`${environment.apiUrl}/product`);
  }
}

interface ProductApi {
  name: string;
  description: string;
  id: string;
}