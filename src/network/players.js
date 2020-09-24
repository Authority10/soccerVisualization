import {request} from "./request";

export function findPerson(personId) {
  return request({
       url:"/player",
       params:{
         personId
       }
  })
}

//类名Players 注意p的大小写
// export class Players{
//   constructor(currentPlayers) {
//     this.ForWard = currentPlayers.ForWard;
//     this.Center  = currentPlayers.Center;
//     this.Back = currentPlayers.Back;
//     this.GoalKeeper = currentPlayers.GoalKeeper;
//   }
// }
