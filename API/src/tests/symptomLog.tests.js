const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

//I need to log in first in order to get a token to use for testing these below

describe('Symptom Log API service', () => {
    const testUser = {
        userName: "testUser",
        password: "password"
    };
    let token = "";

    const testSymptomLog = {
        symptomLogName: 'Food',
        user_id: '5ea3679ff4263a1be32347da',
    };

    const updatedTestSymptomLog = {
        symptomLogName: "Food and Drink"
    };
    let symptomLogId = '';

    it('should test User Login and token grab', (done) => {
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


    it('should add a new Symptom Log', (done) => {
        chai
            .request('http://localhost:4000')
            .post('/api/symptomLog')
            .set('auth-token', 'Bearer ' + token)
            .send(testSymptomLog)
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body.symptomLogName).to.eql(testSymptomLog.symptomLogName);
                expect(res.body.user_id).to.be.eql(testSymptomLog.user_id);
                expect(res.body.dateCreated).to.not.be.null;
                expect(res.body._id).to.not.be.null;
                symptomLogId = res.body._id;
                done();
            });
    });

    it('should get the Symptom Logs for the user', (done) => {


        chai
            .request('http://localhost:4000')
            .get('/api/symptomLog')
            .set('auth-token', 'Bearer ' + token)
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('array');
                expect(res.body.length).to.not.be.eql(0);
                done();
            })
    });

    it('should GET a Symptom Log', (done) => {

        chai
            .request('http://localhost:4000')
            .get(`/api/symptomLog/${symptomLogId}`)
            .set('auth-token', 'Bearer ' + token)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body.symptomLogName).to.eql(testSymptomLog.symptomLogName);
                expect(res.body.user_id).to.be.eql(testSymptomLog.user_id);
                expect(res.body.dateCreated).to.not.be.null;
                expect(res.body._id).to.not.be.null;
                done();
            });
    });

    it('should update a symptom Log', (done) => {

        chai
            .request('http://localhost:4000')
            .put(`/api/symptomLog/${symptomLogId}`)
            .set('auth-token', 'Bearer ' + token)
            .send(updatedTestSymptomLog)
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    })

    it('should delete symptom log', (done) => {
        chai
            .request('http://localhost:4000')
            .delete(`/api/symptomLog/${symptomLogId}`)
            .set('auth-token', 'Bearer ' + token)
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    })

});

