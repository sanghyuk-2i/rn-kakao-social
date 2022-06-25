import axios from 'axios';

const CheckSocial = (accessToken: string) => {
  axios({
    url: '/v1/api/talk/friends',
    method: 'get',
    baseURL: 'https://kapi.kakao.com',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      limit: 3,
    },
  }).then((res) => console.log(res.data));
};

export default CheckSocial;
