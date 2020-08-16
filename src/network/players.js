import {request} from "./request";

export function findTeam(teamID) {
  return request({
       url:"/player",
       params:{
         teamID
       }
  })
}

//类名Players 注意p的大小写
export class Players{
  constructor(players) {
    this.ForWard = players.ForWard;
    this.Center  = players.Center;
    this.Back = players.Back;
    this.GoalKeeper = players.GoalKeeper;
  }
}
