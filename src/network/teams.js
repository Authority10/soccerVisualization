import {request} from "./request";

export function showAllTeam() {
  return request({
    url:"/team",
  })
}

