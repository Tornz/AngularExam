import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://localhost:7177/api/v1',  // Replace with your base URL
      timeout: 10000,
    });
  }

  postData(endpoint: string, data: any) {
    return this.axiosInstance.post(endpoint, data)
      .then(response => {
        debugger
        return response.data;
      }

      )
      .catch(error => {
        debugger
        console.error('There was an error making the POST request!', error);
        throw error;
      });
  }
}