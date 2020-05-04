const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

//I need to log in first in order to get a token to use for testing these below

describe('Symptom Entry API service', () => {
    const testUser = {
        userName: "testUser",
        password: "password"
    };
    let token = "";

    const testSymptomEntry = {
        symptomOnset: "2020-05-02T00:00:00.000Z",
        symptomDescription: "Muscles Ache all Over",
        symptomDuration: 20,
        symptomSeverity: [6],
        symptomLog_id: "5ea36b3b972a861ec00b2cee"
    };

    const updatedTestSymptomEntry = {
        symptomSeverity: [4]
    };
    let symptomEntryId = '';

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


    it('should add a new Symptom Entry', (done) => {
        chai
            .request('http://localhost:4000')
            .post('/api/symptomLog/5ea36b3b972a861ec00b2cee/symptomEntry')
            .set('auth-token', 'Bearer ' + token)
            .send(testSymptomEntry)
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body.symptomOnset).to.eql(testSymptomEntry.symptomOnset);
                expect(res.body.symptomDescription).to.be.eql(testSymptomEntry.symptomDescription);
                expect(res.body.symptomDuration).to.be.eql(testSymptomEntry.symptomDuration);
                expect(res.body.symptomSeverity).to.be.eql(testSymptomEntry.symptomSeverity);
                expect(res.body._id).to.not.be.null;
                symptomEntryId = res.body._id;
                done();
            });
    });

    it('should get the Symptom Entries for the symptom log', (done) => {


        chai
            .request('http://localhost:4000')
            .get('/api/symptomLog/5ea36b3b972a861ec00b2cee/symptomEntry')
            .set('auth-token', 'Bearer ' + token)
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('array');
                expect(res.body.length).to.not.be.eql(0);
                done();
            })
    });

    it('should GET a Symptom Entry', (done) => {

        chai
            .request('http://localhost:4000')
            .get(`/api/symptomLog/5ea36b3b972a861ec00b2cee/symptomEntry/${symptomEntryId}`)
            .set('auth-token', 'Bearer ' + token)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body.symptomOnset).to.eql(testSymptomEntry.symptomOnset);
                expect(res.body.symptomDescription).to.be.eql(testSymptomEntry.symptomDescription);
                expect(res.body.symptomDuration).to.be.eql(testSymptomEntry.symptomDuration);
                expect(res.body.symptomSeverity).to.be.eql(testSymptomEntry.symptomSeverity);
                done();
            });
    });

    it('should update a symptom entry', (done) => {

        chai
            .request('http://localhost:4000')
            .put(`/api/symptomLog/5ea36b3b972a861ec00b2cee/symptomEntry/${symptomEntryId}`)
            .set('auth-token', 'Bearer ' + token)
            .send(updatedTestSymptomEntry)
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    })

    it('should delete symptom entry', (done) => {
        chai
            .request('http://localhost:4000')
            .delete(`/api/symptomLog/5ea36b3b972a861ec00b2cee/symptomEntry/${symptomEntryId}`)
            .set('auth-token', 'Bearer ' + token)
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    })

});

