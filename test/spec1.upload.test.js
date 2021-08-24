process.env.NODE_ENV = 'test';
const expect = require('chai').expect,
    supertest = require('supertest'),
    app = require('../app'),
    server = app.listen(),
    api = supertest(server);
    
describe('#Upload', () => {
    describe('GET', () => {
        it('Check get files return with success', (done) => {
            api.get('/files')
                .set('Accept', 'application/json; charset=utf-8')
                .expect(200)
                .end((err, res) => {
                    if (err) throw err;
                    expect(res.status).to.equal(200);
                    done();
                });
        });
    });
    describe('POST', () => {
        it('Check get files return with success', (done) => {
        api.post('/uploadfile')
                .set('Accept', 'application/json; charset=utf-8')
                .field('Content-Type', 'multipart/form-data')
                // .field("width",10)
                // .field("height",10)
                // .field("sequence", 1)
                .attach("image", 'test/tstimages/Snake_River_(5mb).jpg')
                .expect(201)
                .end(function(err, res) {
                    if (err) throw err;
                    expect(res.headers).to.have.property('location');
                    expect(res.headers.location).to.includes('uploads/')
                    expect(res.status).to.equal(201);
                    done();
                });
            });
    });
});