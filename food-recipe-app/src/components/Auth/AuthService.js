// AuthService.js
class AuthService {
  static signIn(email, password) {
    // Mock implementation for signing in
    return new Promise((resolve, reject) => {
      // Check credentials (you can replace this with an API call or any authentication logic)
      if (email === 'test@example.com' && password === 'password') {
        resolve({ userId: 1, email });
      } else {
        reject(new Error('Invalid credentials'));
      }
    });
  }

  static signUp(email, password) {
    // Mock implementation for signing up
    return new Promise((resolve) => {
      // Mock user creation (you can replace this with an API call or any user registration logic)
      resolve({ userId: 2, email });
    });
  }
}

export default AuthService;

