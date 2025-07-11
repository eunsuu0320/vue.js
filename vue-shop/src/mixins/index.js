// 공통으로 쓰이는 함수 모아놓는 곳

import axios from "axios";

export default {
  methods: {
    // 함수 이름 중복 방지용 $
    async $api(url, data) {
      let result = await axios({
        method: "post",
        url: url,
        data: data,
      });
      console.log(result);
      return result.data;
    },
    $base64(file) {
      return new Promise((resolve) => {
        let fn = new FileReader();
        fn.onload = (e) => {
          resolve(e.target.result); // ;base64,sakfdjsdfjlaskd
        };
        fn.readAsDataURL(file);
      });
    },
  },
};
