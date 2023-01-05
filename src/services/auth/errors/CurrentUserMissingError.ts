export class CurrentUserMissingError extends Error {
    constructor(functionName?: string) {
        super(
            `Trying to access auth.currentUser while it is null. Context: ${
                functionName ?? "(no function name)"
            }`
        );
    }
}
