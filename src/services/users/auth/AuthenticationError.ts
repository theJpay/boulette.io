export class AuthenticationError extends Error {
    constructor() {
        super(
            "authentication_error: do not call useAuthState outside of authenticated routes"
        );
    }
}
