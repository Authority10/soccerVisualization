import {request} from "./request";

export function findRounds(roundId) {
  return request({
    url:"/round",
    params:{
      roundId
    }
  })
}

