import{M as d}from"./bootstrap.esm-726e85d3.js";import{_ as l,o as i,d as n,e as t,t as r,i as e}from"./index-8fbcde8d.js";const c={props:["item"],data(){return{modal:""}},methods:{openModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new d(this.$refs.modal)}},m={id:"delModal",ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},_={class:"modal-dialog"},b={class:"modal-content border-0"},h={class:"modal-header bg-danger text-white"},p={class:"modal-title"},u=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),f=t("div",{class:"modal-body"},[e(" 是否刪除 "),t("strong",{class:"text-danger"}),e(" (刪除後將無法恢復)。 ")],-1),g={class:"modal-footer"},v=t("button",{type:"button",class:"btn btn-outline-primary","data-bs-dismiss":"modal"}," 取消 ",-1);function y(s,o,a,M,x,$){return i(),n("div",m,[t("div",_,[t("div",b,[t("div",h,[t("h5",p,[t("span",null,"刪除 "+r(a.item.title),1)]),u]),f,t("div",g,[v,t("button",{type:"button",onClick:o[0]||(o[0]=k=>s.$emit("del-item")),class:"btn btn-danger"}," 確認刪除 ")])])])],512)}const D=l(c,[["render",y]]);export{D};