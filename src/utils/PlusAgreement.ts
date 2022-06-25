import axios from 'axios';

const PlusAgreement = (accessToken: string) => {
  axios({
    url: '/oauth/authorize',
    method: 'get',
    baseURL: 'https://kapi.kakao.com',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      client_id: 'ce9152602d80b914c1c949be01c523e2',
      redirect_uri: 'http://localhost:3000/oauth/callback/kakao',
      response_type: 'code',
      scope: 'birthday',
    },
  }).then((res) => console.log(res.data));
};

export default PlusAgreement;
