const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const { expect } = chai;

describe('Integration Test', function () {
    it('should return a 200 status for the homepage', function (done) {
        chai.request('http://localhost:8080') // Make sure this URL is properly formatted
            .get('/')
            .end((err, res) => {
                if (err) return done(err);
                expect(res).to.have.status(200);
                done();
            });
    });
});
