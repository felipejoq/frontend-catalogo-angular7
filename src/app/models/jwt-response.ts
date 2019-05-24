export interface JwtResponseI {
    ok: boolean,
    user: {
        role: string,
        status: boolean,
        verify: boolean,
        _id: string,
        name: string,
        email: string,
        __v: number
    },
    token: string,
    expires_at: number
}
