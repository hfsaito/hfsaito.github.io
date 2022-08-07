import { clientCredentials } from "./client-credentials";
import { Token } from "./token";

export class AuthManager {
  private static generatingToken: Promise<void> | null = null;

  static async getToken() {
    if (Token.isExpired()) {
      if (!AuthManager.generatingToken) {
        AuthManager.generatingToken = clientCredentials()
          .then(response => {
            Token.set(response.access_token, response.expires_in);
            AuthManager.generatingToken = null;
          })
          .catch(() => {
            alert('Auth error');
            Token.clear();
            AuthManager.generatingToken = null;
          });
      }
      await AuthManager.generatingToken;
    }
    return Token.get();
  }
}