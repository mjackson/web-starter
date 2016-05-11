export const SessionDomain = process.env.SESSION_DOMAIN
export const SessionSecret = process.env.NODE_ENV === 'development' ? 'development' : process.env.SESSION_SECRET
