import { UserContext } from './UserContext';

const user = {
    id:123,
    name: 'Emerson González',
    email: 'emerson@google.com'
}

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{  hola: 'Mundo', user: user }}>
        { children }
    </UserContext.Provider>
  )
}
