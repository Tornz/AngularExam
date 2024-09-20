import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PutDataService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://localhost:7177/api/v1',  // Replace with your base URL
      timeout: 10000,
    });
  }

  putData(endpoint: string, data: any) {
    return this.axiosInstance.put(endpoint, data)
      .then(response => {
        debugger
        return response.data;
      }

      )
      .catch(error => {
        debugger
        return error;
      });
  }
}