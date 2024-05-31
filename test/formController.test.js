
const app = require('../server');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Form API', () => {

    describe('/POST /submit', () => {
        it('should submit form data and return success message', (done) => {
            chai.request(app)
                .post('/submit')
                .send({
                    name: 'hari',
                    email: 'hari@gmail.com',
                    car: 'car4'
                })
                .end((err, res) => {
                    if (err) {
                        console.error('Error submitting form:', err);
                        done(err); 
                        return;
                    }
                    expect(res).to.have.status(200);
                    expect(res.text).to.equal('Form submitted successfully');
                    done();
                });
        });
    });
    
    describe('/GET /forms', () => {
        it('should get forms data', (done) => {
            chai.request(app)
                .get('/forms')
                .end((err, res) => {
                    if (err) {
                        console.error('Error retrieving forms:', err);
                        done(err); 
                        return;
                    }
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('array');
                    done();
                });
        });
    });

});
