import AsyncStorage from "@react-native-async-storage/async-storage";

const users = [
    {
        id: 1,
        email: "teste@gmail.com",
        password: '123',
        name: "Daniel",
    },
    {
        id: 2,
        email: "teste1@gmail.com",
        password: '123',
        name: "Marcos",
    },
    {
        id: 3,
        email: "teste2@gmail.com",
        password: '123',
        name: "Pituca",
    },
]


export function login(email: string, password: string) {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        return { success: true, message: "Login successful", user };
    } else {
        return { success: false, message: "Invalid email or password" };
    }
}

export async function getUserData(){
    try {
        const userData = await AsyncStorage.getItem('@user');
        if (userData !== null) {
            return JSON.parse(userData);
        } else {
            console.log('No user data found');
            return null;
        }
    } catch (error) {
        console.error('Failed to fetch user data', error);
        return null;
    }
}

export async function clearUserData() {
    try {
        await AsyncStorage.removeItem('@user');
        console.log('User data removed successfully');
    } catch (error) {
        console.error('Failed to remove user data', error);
    }
}
