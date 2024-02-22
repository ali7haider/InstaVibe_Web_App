import {Client,Account,Databases,Storage,Avatars} from 'appwrite';

export const appwriteConfig = {
    projectId:import.meta.env.VITE_APPWRITE_PROJECT_ID,
    url: import.meta.env.VITE_APPWRITE_URL,
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
    userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
    postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
    savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,


}

export const client= new Client();
client.setEndpoint('https://cloud.appwrite.io/v1');
client.setProject('65d4ce75a2731f7670bb');
export const account= new Account(client);
export const databases= new Databases(client);
export const storage= new Storage(client);
export const avatars= new Avatars(client);