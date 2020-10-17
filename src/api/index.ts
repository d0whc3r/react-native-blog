import { API_URL } from '@env';
import { Platform } from 'react-native';

export interface ApiCall {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: RequestInit['body'];
  params?: { [key: string]: any };
  headers?: RequestInit['headers'];
}

export type RequestCall = Exclude<ApiCall, 'method'>;

export class Api {
  private static readonly baseUrl = API_URL;
  private static readonly corsUrl = 'https://cors-anywhere.herokuapp.com/';
  private static readonly headers: RequestInit['headers'] = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };

  private static getUrl(path: string, params?: object) {
    const cors = Platform.OS === 'web' ? this.corsUrl : '';
    const url = cors + (this.baseUrl + path).replace(new RegExp('//', 'g'), '/');
    let par = '';
    if (params) {
      par =
        '?' +
        Object.entries(params)
          .map(([key, value]) => `${key}=${value}`)
          .join('&');
    }
    return url + par;
  }

  private static call<T>(path: string, { method = 'GET', headers, params, body }: ApiCall = {}) {
    return fetch(this.getUrl(path, params), {
      method,
      headers: { ...headers, ...this.headers },
      mode: 'cors',
      body
    })
      .then(async (response) => {
        if (response.ok) {
          return response;
        } else {
          throw await response.json();
        }
      })
      .then<T>((response) => response.json());
  }

  public static get<T>(path: string, info?: RequestCall) {
    return this.call<T>(path, { ...info, method: 'GET' });
  }

  public static post<T>(path: string, info: RequestCall) {
    return this.call<T>(path, { ...info, method: 'POST' });
  }

  public static put<T>(path: string, info: RequestCall) {
    return this.call<T>(path, { ...info, method: 'PUT' });
  }

  public static delete<T>(path: string, info?: RequestCall) {
    return this.call<T>(path, { ...info, method: 'DELETE' });
  }
}
