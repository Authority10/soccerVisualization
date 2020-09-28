import {request} from "./request";

export function findTeam(teamId) {
  return request({
    url:"/team",
    params:{
      teamId
    }
  })
}
