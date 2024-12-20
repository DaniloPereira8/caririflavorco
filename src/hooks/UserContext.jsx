import { createContext, useContext, useState, useEffect } from 'react'

//import PropTypes from 'prop-types'

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});

    const putUserData = userInfo => {
        setUserInfo(userInfo)

        localStorage.setItem('deuburger:userData', JSON.stringify(userInfo))
    }


const logout = () => {
    setUserInfo({});
     localStorage.removeItem('deuburger:userData')
    };

    useEffect(() => {

            const UserInfoLocalStorage = localStorage.getItem('deuburger:userData')

            if (UserInfoLocalStorage) {
                setUserInfo(JSON.parse(UserInfoLocalStorage))
            }

    }, []);

    return (
        <UserContext.Provider value={{ userInfo, putUserData, logout }}>
            {children}
        </UserContext.Provider>
    )
}

 export const useUser = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error('useUser must be used with UserContext')
    }

    return context;
};

// UserProvider.propTypes = {
//     children: PropTypes.node
// }