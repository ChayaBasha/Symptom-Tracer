const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('User API service', () => {
    const testUser = {
        userName: "TestFrog1",
        password: "lillypads"
    };

    const updatedTestUser = {
        userName: "TestFrog"
    }
    const anotherTestUser = {
        ...testUser,
        ...updatedTestUser
    }

    let token = '';

    it('should add a new User', (done) => {

        chai
            .request('http://localhost:4000')
            .post('/api/user')
            .send(testUser)
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.have.header('access_token');
                done();
            });
    });

    it('should login user', (done) => {

        chai
            .request('http://localhost:4000')
            .post('/api/user/login')
            .send(testUser)
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.have.header('access_token');
                token = res.header.access_token;
                done();
            });
    });

    it('should update user', (done) => {

        chai
        .request('http://localhost:4000')
        .put('/api/user/update')
        .set('auth-token', 'Bearer ' + token)
        .send(updatedTestUser)
        .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
        }); 
    })
//This is for testing only 
    it('should delete user', (done) => {
        chai
        .request('http://localhost:4000')
        .delete('/api/user')
        .set('auth-token', 'Bearer ' + token)
        .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
        }); 
    })

});
