export interface TokenRepositoryImpl {
    save : (token:string) => void;
    get : ()=>string | null;
    remove : () =>void;
}

export class TokenRepository implements TokenRepositoryImpl{
    #TOKEN_KEY = "ACCESS_TOKEN";
  
    save(token:string) {
      localStorage.setItem(this.#TOKEN_KEY, token);
    }
  
    get() {
      return localStorage.getItem(this.#TOKEN_KEY);
    }
  
    remove() {
      localStorage.removeItem(this.#TOKEN_KEY);
    }
  }