import {request} from "./request";

export function findMatches(matchId) {
  return request({
    url:"/match",
    params:{
      matchId
    }
  })
}
