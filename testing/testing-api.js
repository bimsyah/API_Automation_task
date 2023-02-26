const chai = require('chai');
chai.use(require('chai-json-schema'));

const expect = require('chai').expect;
const apiUnderTest = require('../api/api-test.js');
const dataTest = require('../data/data-test.js')
const { testcases } = require('../testcases/testcase-scenario.js')
const jsonDataTest = require('../file/respone-cuser.json')
const schemaRespone = require('../schema/respon-getuser')

describe(testcases.feature_createUser.description, async () => {
  before(async() => {
    const data = dataTest.dataCreateUser();
    const respone = await apiUnderTest.createUser(data)
    console.log('AKU COBA DULU YAH');
  })
  after(async() => {
    const removeData = await request(jsonDataTest).delete(dataTest);
    console.log('NI AKU COBA LAGI')
  })
    it(testcases.feature_createUser.positive.case1, async () => {
        let data = dataTest.dataCreateUser();
        // data.hobbies = ['bola']
          const respone = await apiUnderTest.createUser(data);
          // console.log(respone.body);
        //   const response = await apiUnderTest.getUser();
        // // console.log(response.status);
        // // console.log(response.body);
    });
  
    // it(testcases.feature_createUser.positive.case2, async () => {
    //   const data = dataTest.dataCreateUser();
    //   // data.hobbies = ['tennis']
    //     const respone = await apiUnderTest.createUser(data);
    //     // console.log(respone.body);
    // });
    
    it(testcases.feature_getUser.positive.case1, async () => {
      const data = jsonDataTest;
      let respone = await apiUnderTest.createUser(data);
      respone = await apiUnderTest.getUser(data.firstName);
      // console.log(respone.body)

      // Assertion status code
      expect(respone.status).to.equal(200);

      // //Assertion response data id
      expect(respone.body.data).to.have.property("id");

      // Assertion JSON Schema
      for (let index = 0; index < respone.body.data.length; index++) {
        expect(respone.body.data[index]).to.have.jsonSchema(schemaRespone.getUserSchemaRespon)
      }
      
    });


    it(testcases.feature_getUser.negative.case1, async () => {
      const data = jsonDataTest;
      // let respone = await apiUnderTest.createUser(data);
      let respone = await apiUnderTest.getUser(data.firstName);
      console.log(respone.body)
      expect(respone.statusCode).to.equal(404);
      expect(respone.body).to.have.property('errorCode', 'DATA_NOT_FOUND');
      // for (let index = 0; index < respone.body.data.length; index++) {
      //   expect(respone.body.data[index]).to.have.jsonSchema(schemaRespone.getUserSchemaRespon)
      // }
      // expect(response.body).to.have.jsonSchema(schemaRespone.getUserSchemaRespon)
    });
})    
