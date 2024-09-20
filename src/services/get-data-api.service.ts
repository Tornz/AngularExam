import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://localhost:7177/api/v1/',  // Replace with your base URL
      timeout: 10000,
    });
  }

  getData(endpoint: string, params?: any) {
    return this.axiosInstance.get(endpoint, { params })
      .then(response => response.data)
      .catch(error => {
        console.error('There was an error making the GET request!', error);
        throw error;
      });
  }
}