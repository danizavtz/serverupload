process.env.NODE_ENV = 'test';
const fs = require('fs'),
    expect = require('chai').expect,
    supertest = require('supertest'),
    app = require('../app'),
    server = app.listen(),
    api = supertest(server),
    pg = require('../lib/postgres'),
    drop = fs.readFileSync(__dirname + '/../sql/drop.sql').toString(),
    create = fs.readFileSync(__dirname + '/../sql/create.sql').toString();
    
describe('#Upload', () => {
    before((done) => {
        pg.query(drop, (err) => {
            if (err){
                throw err;
            }
            pg.query(create, (err) => {
                if (err){
                    throw err;
                }
                done();
            });
        });
    });
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
        it('Check validation error', (done) => {
            api.post('/uploadfile')
                    .set('Accept', 'application/json; charset=utf-8')
                    .field('Content-Type', 'multipart/form-data')
                    .attach("image", 'test/tstimages/Snake_River_(5mb).jpg')
                    .expect(400)
                    .end(function(err, res) {
                        if (err) throw err;
                        expect(res.status).to.equal(400);
                        done();
                    });
                });
        it('Check upload file with success', (done) => {
        api.post('/uploadfile')
                .set('Accept', 'application/json; charset=utf-8')
                .field('Content-Type', 'multipart/form-data')
                .field("login","abc123")
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