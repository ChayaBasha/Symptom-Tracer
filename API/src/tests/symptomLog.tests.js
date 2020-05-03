// const chai = require('chai');
// const expect = chai.expect;
// const chaiHttp = require('chai-http');

// chai.use(chaiHttp);

// describe('Health Symptom Log API service', () => {

//     it('should add a new Symptom Log', (done) => {
//         const testSymptomLog = {
//             symptomLogName: 'Food',
//             user_id: '5ea63193a4c1590ee2dcf9e6',
//         };
//         const expected = testSymptomLog;

//         chai
//             .request('http://localhost:4000')
//             .post('/api/symptomLog')
//             .send(testSymptomLog)
//             .end((err, res) => {
//                 expect(err).to.be.null;
//                 expect(res).to.have.status(200);
//                 expect(res.body).to.eql(expected);
//                 done();
//             });
//     });
// });

//     it('should get Health Input Logs', (done) => {


//         chai
//             .request('http://localhost:4000')
//             .get('/api/healthInputLog')
//             .end((err, res) => {
//                 expect(err).to.be.null;
//                 expect(res).to.have.status(200);
//                 expect(res.body).to.be.a('array');
//                 expect(res.body.length).to.not.be.eql(0);
//                 done();
//             })
//     });

//     it('should GET a Health Input Log', (done) => {
//         const expected = [
//             {
//                 _id: '5ea634b1a4c1590ee3dcf9ef',
//                 healthInputLogName: 'Food',
//                 dateCreated: '2020-04-29T06:00:00Z',
//                 user_id: '5ea634b1a4c1590ee2dcf9ef',
//             },
//         ];

//         chai
//             .request('http://localhost:4000')
//             .get('/api/healthInputLog/5ea634b1a4c1590ee3dcf9ef')
//             .end(function (err, res) {
//                 expect(err).to, be.null;
//                 expect(res.status).to.be.eql(200);
//                 expect(res.body).to.be.a('array');
//                 expect(res.body.length).to.not.be.eql(0);
//                 expect(res.body).to.be.eql(expected);
//                 done();
//             });
//     });

//     it('should update a Health Input Log', (done) => {
//         const updatedTestHealthInputLog = {

//             _id: '5ea634b1a4c1590ee3dcf9ef',
//             healthInputLogName: 'Food and other consumables',
//             dateCreated: '2020-04-29T06:00:00Z',
//             user_id: '5ea634b1a4c1590ee2dcf9ef',

//         }
//         const expected = [
//             {
//                 _id: '5ea634b1a4c1590ee3dcf9ef',
//                 healthInputLogName: 'Food and other consumables',
//                 dateCreated: '2020-04-29T06:00:00Z',
//                 user_id: '5ea634b1a4c1590ee2dcf9ef',
//             },
//         ];

//         chai
//             .request('http://localhost:4000')
//             .put('/api/healthInputLog/5ea634b1a4c1590ee3dcf9ef')
//             .send(updatedTestHealthInputLog)
//             .end(function (err, res) {
//                 expect(err).to, be.null;
//                 expect(res.status).to.be.eql(200);
//                 expect(res.body).to.be.a('array');
//                 expect(res.body.length).to.not.be.eql(0);
//                 expect(res.body).to.be.eql(expected);
//                 done();
//             });
//     });

//     it('should delete a Health Input Log', (done) => {

//         chai
//             .request('http://localhost:4000')
//             .delete('/api/healthInputLog/5ea634b1a4c1590ee3dcf9ef')
//             .end(function (err, res) {
//                 expect(err).to, be.null;
//                 expect(res.status).to.be.eql(200);
//                 expect(res.body).to.be.a('array');
//                 done();
//             });
//     });
// });
