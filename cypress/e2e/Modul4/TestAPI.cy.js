/// <reference types= "cypress" />

describe('HTTPBin API Tests', () => {
    
    it('should make a GET request with standard headers', () => {
        cy.request({
            method: 'GET',
            url: 'https://httpbin.org/get',
            headers: {
                'User-Agent': 'test'
            }
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.headers['User-Agent']).to.eq('test');
        });
    });

    it('should make a POST request with form data', () => {
        cy.request({
            method: 'POST',
            url: 'https://httpbin.org/post',
            form: true,
            body: {
                key1: 'value1',
                key2: 'value2'
            }
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.form).to.deep.equal({ key1: 'value1', key2: 'value2' });
        });
    });

    it('should make a PUT request with JSON data', () => {
        cy.request({
            method: 'PUT',
            url: 'https://httpbin.org/put',
            body: {
                key1: 'value1',
                key2: 'value2'
            }
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.json).to.deep.equal({ key1: 'value1', key2: 'value2' });
        });
    });

    it('should make a DELETE request', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://httpbin.org/delete'
        }).then(response => {
            expect(response.status).to.eq(200);
        });
    });

    it('should send a request with custom headers', () => {
        cy.request({
            method: 'GET',
            url: 'https://httpbin.org/headers',
            headers: {
                'Custom-Header': 'CustomValue'
            }
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.headers['Custom-Header']).to.eq('CustomValue');
        });
    });

    it('should send a request with random query parameters', () => {
        cy.request({
            method: 'GET',
            url: 'https://httpbin.org/get',
            qs: {
                'param1': 'value1',
                'param2': 'value2'
            }
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.args).to.deep.equal({ param1: 'value1', param2: 'value2' });
        });
    });

    it('should validate the response body for a GET request', () => {
        cy.request({
            method: 'GET',
            url: 'https://httpbin.org/get',
            qs: {
                'testParam': 'testValue'
            }
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.args).to.have.property('testParam', 'testValue');
        });
    });

    it('should validate the response body for a POST request', () => {
        cy.request({
            method: 'POST',
            url: 'https://httpbin.org/post',
            body: {
                'testKey': 'testValue'
            }
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.json).to.deep.equal({ 'testKey': 'testValue' });
        });
    });

    it('should measure the request duration for a GET request', () => {
    const startTime = performance.now();

    cy.request('https://httpbin.org/get').then(response => {
        expect(response.status).to.eq(200);
        const duration = performance.now() - startTime;
        console.log(`Request duration: ${duration} milliseconds`);
        });
    });

    it('should measure the request duration for a POST request', () => {
        const startTime = performance.now();

        cy.request({
            method: 'POST',
            url: 'https://httpbin.org/post',
            body: {
                'testKey': 'testValue'
        }
        }).then(response => {
            expect(response.status).to.eq(200);
            const duration = performance.now() - startTime;
            console.log(`Request duration: ${duration} milliseconds`);
         });
    });
}); 