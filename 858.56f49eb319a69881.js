"use strict";(self.webpackChunkangular_ant=self.webpackChunkangular_ant||[]).push([[858],{7858:(f,p,e)=>{e.r(p),e.d(p,{CpModule:()=>A});var i=e(4755),g=e(1982),t=e(2223),d=e(3144),Z=e(4259),m=e(2242),h=e(4247),u=e(2714);const c=function(o){return{xhx:o}};function y(o,a){if(1&o&&(t.TgZ(0,"tr",7)(1,"td",4),t._uU(2),t.qZA(),t.TgZ(3,"td",4),t._uU(4),t.qZA(),t.TgZ(5,"td",4),t._uU(6),t.qZA(),t.TgZ(7,"td",4),t._uU(8),t.qZA(),t.TgZ(9,"td",4),t._uU(10),t.qZA()()),2&o){const n=a.$implicit;t.Q6J("ngClass",t.VKq(6,c,n.lotteryDrawNum%4==0)),t.xp6(2),t.Oqu(n.lotteryDrawNum),t.xp6(2),t.Oqu(n.lotteryDrawResult.split(" ")[0]),t.xp6(2),t.Oqu(n.lotteryDrawResult.split(" ")[1]),t.xp6(2),t.Oqu(n.lotteryDrawResult.split(" ")[2]),t.xp6(2),t.Oqu(n.lotteryDrawResult.split(" ")[3])}}function C(o,a){if(1&o&&(t.TgZ(0,"tr",7)(1,"td",4),t._uU(2),t.qZA(),t.TgZ(3,"td",4),t._uU(4),t.qZA(),t.TgZ(5,"td",4),t._uU(6),t.qZA(),t.TgZ(7,"td",4),t._uU(8),t.qZA(),t.TgZ(9,"td",4),t._uU(10),t.qZA()()),2&o){const n=a.$implicit;t.Q6J("ngClass",t.VKq(6,c,n.lotteryDrawNum%4==0)),t.xp6(2),t.Oqu(n.lotteryDrawNum),t.xp6(2),t.Oqu(n.lotteryDrawResult.split(" ")[0]),t.xp6(2),t.Oqu(n.lotteryDrawResult.split(" ")[1]),t.xp6(2),t.Oqu(n.lotteryDrawResult.split(" ")[2]),t.xp6(2),t.Oqu(n.lotteryDrawResult.split(" ")[3])}}const q=[{path:"",component:(()=>{class o{constructor(n){this.http=n,this.listDataplw=[],this.listDataqxc=[]}ngOnInit(){this.getDataplw(),this.getDataqxc()}getDataplw(){this.http.get("https://webapi.sporttery.cn/gateway/lottery/getHistoryPageListV1.qry?gameNo=350133&provinceId=0&isVerify=1&termLimits=50",{headers:{Authorization:"*"}}).subscribe(r=>{this.listDataplw=r.value.list.sort((l,s)=>l.lotteryDrawNum-s.lotteryDrawNum)})}getDataqxc(){this.http.get("https://webapi.sporttery.cn/gateway/lottery/getHistoryPageListV1.qry?gameNo=04&provinceId=0&pageSize=50&isVerify=1&pageNo=1",{headers:{Authorization:"*"}}).subscribe(r=>{this.listDataqxc=r.value.list.sort((l,s)=>l.lotteryDrawNum-s.lotteryDrawNum)})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(d.eN))},o.\u0275cmp=t.Xpm({type:o,selectors:[["cp"]],decls:40,vars:6,consts:[[1,"cp"],["nz-button","","nzType","primary",3,"click"],[2,"display","flex"],["nzSize","small","nzBordered","",3,"nzData","nzFrontPagination"],["nzAlign","center"],[3,"ngClass",4,"ngFor","ngForOf"],[2,"width","50px","font-size","0"],[3,"ngClass"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return r.getDataplw()}),t._uU(2," get\u8bf7\u6c42\u6570\u636e\u4e94\u5b50 "),t.qZA(),t.TgZ(3,"button",1),t.NdJ("click",function(){return r.getDataqxc()}),t._uU(4," get\u8bf7\u6c42\u6570\u636e\u4e03\u5b50 "),t.qZA(),t.TgZ(5,"div",2)(6,"div")(7,"nz-table",3)(8,"thead")(9,"tr")(10,"th",4),t._uU(11,"\u4e94\u671f"),t.qZA(),t.TgZ(12,"th",4),t._uU(13,"\u4e07"),t.qZA(),t.TgZ(14,"th",4),t._uU(15,"\u5343"),t.qZA(),t.TgZ(16,"th",4),t._uU(17,"\u767e"),t.qZA(),t.TgZ(18,"th",4),t._uU(19,"\u5341"),t.qZA()()(),t.TgZ(20,"tbody"),t.YNc(21,y,11,8,"tr",5),t.qZA()()(),t.TgZ(22,"div",6),t._uU(23,"ss"),t.qZA(),t.TgZ(24,"div")(25,"nz-table",3)(26,"thead")(27,"tr")(28,"th",4),t._uU(29,"\u4e03\u671f"),t.qZA(),t.TgZ(30,"th",4),t._uU(31,"\u4e07"),t.qZA(),t.TgZ(32,"th",4),t._uU(33,"\u5343"),t.qZA(),t.TgZ(34,"th",4),t._uU(35,"\u767e"),t.qZA(),t.TgZ(36,"th",4),t._uU(37,"\u5341"),t.qZA()()(),t.TgZ(38,"tbody"),t.YNc(39,C,11,8,"tr",5),t.qZA()()()()()),2&n&&(t.xp6(7),t.Q6J("nzData",r.listDataplw)("nzFrontPagination",!1),t.xp6(14),t.Q6J("ngForOf",r.listDataplw),t.xp6(4),t.Q6J("nzData",r.listDataqxc)("nzFrontPagination",!1),t.xp6(14),t.Q6J("ngForOf",r.listDataqxc))},dependencies:[i.mk,i.sg,Z.ix,m.w,h.dQ,u.N8,u.Uo,u._C,u.Om,u.p0,u.$Z,u.UX],styles:[".cp[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin-right:10px;margin-bottom:10px}.cp[_ngcontent-%COMP%]   .xhx[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-top:1px solid #f40}"]}),o})()}];let D=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.Bz.forChild(q),g.Bz]}),o})();var T=e(6861);let A=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[i.ez,D,T.b]}),o})()}}]);