import axios from 'axios';

const createWooCommerceAPI = () => {
  const instance = axios.create({
    baseURL: 'https://centralmidi.codesdevs.com/wp-json/wc/v3',
    params: {
      consumer_key: 'ck_3e67a533446630f62b61ae550f91745a91a12123',
      consumer_secret: 'cs_16b38fec166c8f6812b97c945f79d30a1bc83d0e',
    },
  });

  return instance;
};

export default createWooCommerceAPI;
