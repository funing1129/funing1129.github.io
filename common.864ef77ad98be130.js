"use strict";(self.webpackChunkangular_ant=self.webpackChunkangular_ant||[]).push([[592],{3525:(i,p,n)=>{n.d(p,{J:()=>u});var h=n(2223),d=n(3144);let l=(()=>{class a{constructor(s){this.http=s}static handleQueryParams(s){let r=new d.LE;if(void 0!==s.params)for(const e in s.params)s.params.hasOwnProperty(e)&&(r=r.set(e,s.params[e]));return r}static handleHttpHeaders(s){let r=new d.WM;if(void 0!==s.httpHeader)for(const e in s.httpHeader)s.httpHeader.hasOwnProperty(e)&&(r=r.set(e,s.httpHeader[e]));return r}static handleSuccess(s,r){void 0!==s.successWithHeaderBlock&&s.successWithHeaderBlock(r.headers),void 0!==s.successWithBodyBlock&&s.successWithBodyBlock(r.body)}static handleError(s,r){r.error instanceof Error?console.log("\u62a5\u9519:",r.error.message):console.log(`\u540e\u53f0\u8fd4\u56de\u9519\u8bef\u7801 ${r.status}, body was: ${r.error}`),void 0!==s.errorBlock&&s.errorBlock(r)}get(s){const r=a.handleQueryParams(s),e=a.handleHttpHeaders(s);this.http.get(s.urlStr,{observe:"response",params:r,headers:e,[s.responseType?"responseType":""]:s.responseType}).subscribe(t=>{a.handleSuccess(s,t)},t=>{a.handleError(s,t)})}syncGet(s){const r=a.handleQueryParams(s),e=a.handleHttpHeaders(s);return this.http.get(s.urlStr,{observe:"response",params:r,headers:e})}post(s){const r=a.handleQueryParams(s),e=a.handleHttpHeaders(s);this.http.post(s.urlStr,s.body,{observe:"response",params:r,headers:e,[s.responseType?"responseType":""]:s.responseType}).subscribe(t=>{a.handleSuccess(s,t)},t=>{a.handleError(s,t)})}put(s){const r=a.handleQueryParams(s),e=a.handleHttpHeaders(s);this.http.put(s.urlStr,s.body,{observe:"response",params:r,headers:e}).subscribe(t=>{a.handleSuccess(s,t)},t=>{a.handleError(s,t)})}delete(s){const r=a.handleQueryParams(s),e=a.handleHttpHeaders(s);this.http.delete(s.urlStr,{observe:"response",params:r,headers:e}).subscribe(t=>{a.handleSuccess(s,t)},t=>{a.handleError(s,t)})}download(s){const r=a.handleQueryParams(s),e=a.handleHttpHeaders(s);return this.http.post(s.urlStr,s.body,{observe:"response",params:r,headers:e,responseType:"blob"})}}return a.\u0275fac=function(s){return new(s||a)(h.LFG(d.eN))},a.\u0275prov=h.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})(),u=(()=>{class a{constructor(s,r){this.httpClient=s,this.networkService=r}getShiCi(s,r){return this.networkService.get({urlStr:"https://v2.jinrishici.com/one.json",params:{client:"browser-sdk/1.2","X-User-Token":"G4H3CyOMhLh3JaW+wJxQ8whPhxsg7MTE"},successWithBodyBlock:r})}getShiCiToken(s){return this.networkService.get({urlStr:"https://v2.jinrishici.com/token",successWithBodyBlock:s})}}return a.\u0275fac=function(s){return new(s||a)(h.LFG(d.eN),h.LFG(l))},a.\u0275prov=h.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()}}]);