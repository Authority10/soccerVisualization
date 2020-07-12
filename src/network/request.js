import axios from "axios"

export function request(config){
  const instance = axios.create({
    baseURL:"http://localhost:3000",
    timeout:5000
  });
  // 请求拦截器
  instance.interceptors.request.use(
    config =>{
      // console.log(config);
      return config
    },
    err =>{
      console.log(err);
    }
  )

  instance.interceptors.response.use(
    res =>{
      return res.data
    },
    err =>{
      console.log(err);
    }
  );
  return instance(config)
}
