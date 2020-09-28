import {request} from "./request";

export function findSquad(teamId) {
  return request({
    url:"/teamplayer",
    params:{
      teamId
    }
  })
}
