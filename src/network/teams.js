import {request} from "./request";

export function showAllTeam() {
  return request({
    url:"/team",
  })
}

//名字Top和GroupTop不能重复
// export class Top{
//   constructor(GroupTop) {
//     this.GroupA =  GroupTop[0].GroupA;
//     this.GroupB  = GroupTop[1].GroupB;
//     this.GroupC =  GroupTop[2].GroupC;
//     this.GroupD =  GroupTop[3].GroupD;
//   }
// }
// export class Bottom{
//   constructor(GroupBottom) {
//     this.GroupE =  GroupBottom[0].GroupE;
//     this.GroupF  = GroupBottom[1].GroupF;
//     this.GroupG =  GroupBottom[2].GroupG;
//     this.GroupH =  GroupBottom[3].GroupH;
//   }
// }
