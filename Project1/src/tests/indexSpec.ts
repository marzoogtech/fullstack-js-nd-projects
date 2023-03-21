import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Testing Image Precessing API endpoints', async () => {
    it('create fjord 200x200', async () => {
        await request
            .get('/api/images?filename=fjord&width=200&height=200')
            .expect(200);
    });

    await it('not fourd for an image that is not in assets full', async () => {
        await request
            .get('/api/images?filename=marzoog&width=200&height=200')
            .expect(404);
    });

    await it('error 404 when the file name is not porvided', async () => {
        await request.get('/api/images').expect(404);
    });
});
