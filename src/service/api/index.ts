import axios from "axios";
axios.defaults.baseURL = "http://localhost:8082";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

// Registration
export const apiUserRegister = (body: any) => {
  return new Promise(function (resolve, reject) {
    axios
      .post("/api/v1/user/register", body)
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
// Add Shipping Address
export const apiAddShippingAddress = (body: any) => {
  return new Promise(function (resolve, reject) {
    axios
      .post("/api/v1/user/saveAddress", body)
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// Update about me
export const apiUpdateAboutMe = (body: any) => {
  return new Promise(function (resolve, reject) {
    axios
      .post("/api/v1/user/updateAboutMe", body)
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// search allergies
export const apiSearchAllergies = (param: string) => {
  return new Promise(function (resolve, reject) {
    axios
      .get(`/api/v1/allergies/search?searchTerm=${param}`)
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
// search conditions
export const apiSearchConditions = (param: string) => {
  return new Promise(function (resolve, reject) {
    axios
      .get(`/api/v1/conditions/search?searchTerm=${param}`)
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
// search doctors
export const apiSearchDoctors = (param: string) => {
  return new Promise(function (resolve, reject) {
    axios
      .get(`/api/v1/doctors/search?searchTerm=${param}`)
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// search insurances
export const apiSearchInsurances = (param: string) => {
  return new Promise(function (resolve, reject) {
    axios
      .get(`/api/v1/insurances/search?searchTerm=${param}`)
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
