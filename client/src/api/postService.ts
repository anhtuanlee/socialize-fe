import { post } from '@/types/data';
import * as httpRequest from '../utils/httpRequest';
import axios from 'axios';

class PostService {
    route: string;
    user: string;
    KEY_GET: string;
    KEY_CREATE: string;
    KEY_DELETE: string;
    KEY_UPDATE: string;

    constructor() {
        this.route = '/posts';
        this.user = '';
        this.KEY_GET = `${this.route}?`;
        this.KEY_CREATE = `${this.route}/create`;
        this.KEY_DELETE = `${this.route}/delete`;
        this.KEY_UPDATE = `${this.route}/update`;
    }

    async getPost({
        path,
        query = { limit: 10, offset: 1 },
    }: {
        path: string;
        query?: post.TQueryGet;
    }) {
        const result = await httpRequest.get(path, {
            params: query,
        });
        return result.data;
    }
    async createPost(path: string, args: post.TDataPost, config: any) {
        const result = await httpRequest.postTest(path, args, config);
        return result;
    }

    async deletePost(path: string) {
        await httpRequest.remove(path);
    }
}

export const postService = new PostService();
