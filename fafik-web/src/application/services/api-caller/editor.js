import Axios from 'axios';

import { API_BASE_URL } from 'application/config';

const saveTextValue = request => Axios.put(`${API_BASE_URL}/editor/text`, request);

const saveTemporaryImage = request => {
  var formData = new FormData();
  formData.append('image', request.image);
  Axios.post(`${API_BASE_URL}/editor/image/temporary`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export default {
  saveTextValue,
  saveTemporaryImage,
};
