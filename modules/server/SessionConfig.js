export const SessionDomain = process.env.NODE_ENV === 'development' ? '.hum.local' : '.hum.io'
export const SessionSecret = process.env.NODE_ENV === 'development' ? 'development' : process.env.SESSION_SECRET
