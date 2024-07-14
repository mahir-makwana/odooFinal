const backendUrl = "http://localhost:5000";

const SummeryApi = {
  signup: {
    url: `${backendUrl}/api/signup`,
    method: "POST",
  },
  login: {
    url: `${backendUrl}/api/login`,
    method: "POST",
  },
};

export default SummeryApi;
