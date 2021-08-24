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
});