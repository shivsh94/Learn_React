import conf from "../conf/conf";

import {Client, Account, ID, Databases, Storage, Query} from "appwrite";


export class Service{
    client = new Client();
    Databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost ({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwritEDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite service:: createUser::error",error); 
        }
    }

    async updatePost (slug, {title, content, featuredImage, status, userId}){
        try {
            return await this.databases.updateDocument(
                conf.appwritEDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite service:: updateUser::error",error);
        }
    }
    async deletePost (slug){
        try {
            await this.databases.deleteDocument(
                conf.appwritEDatabaseId,
                conf.appwriteCollectionId,
                slug
                
            )
            return ture
        } catch (error) {
            console.log("Appwrite service:: deleteUser::error",error);
            return false
        }
    }
    async getPost(slug){
    try {
        return await this.databases.getDocument(
            conf.appwritEDatabaseId,
            conf.appwriteCollectionId,
            slug
        )
    } catch (error) {
        console.log("Appwrite service:: getCurrentUser::error",error);
        return false
    }
    }

    async getPosts(queries = [Query.equal("status","active")])
    {
        try {
            return await this.databases.listDocuments(
                conf.appwritEDatabaseId,
                conf.appwriteCollectionId,
                queries,
                
            )
        } catch (error) {
            console.log("Appwrite service:: deleteUser::error",error);
            return false
        }
    }

    async uploadFile(file){
        try {
            await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service:: deleteUser::error",error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite service:: deleteUser::error",error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}


const service = new Service();

export default service