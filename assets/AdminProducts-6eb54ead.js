import{M as x}from"./bootstrap.esm-726e85d3.js";import{_ as U,o as i,d as n,e as t,bu as u,bl as m,i as C,Y as w,F as y,B as V,bh as L,r as _,f,t as b}from"./index-6cda0ccb.js";import{D}from"./DeleteModal-5a36f836.js";import{P as I}from"./PaginationView-6356c80f.js";import{S as g}from"./sweetalert2.all-44a0333f.js";const{VITE_APP_URL:E,VITE_APP_PATH:T}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"sasimi1327",BASE_URL:"/Idoshou/",MODE:"production",DEV:!1,PROD:!0},R={props:["isNew","product"],data(){return{status:{},modal:"",selectProduct:{}}},watch:{product(){this.selectProduct=this.product,this.selectProduct.imagesUrl||(this.selectProduct.imagesUrl=[]),this.selectProduct.imageUrl||(this.selectProduct.imageUrl="")}},methods:{uploadFile(){const l=this.$refs.fileInput.files[0],e=new FormData;e.append("file-to-upload",l);const d=`${E}/api/${T}/admin/upload`;this.status.fileUploading=!0,this.$http.post(d,e,{headers:{"Content-Type":"multipart/form-data"}}).then(r=>{this.status.fileUploading=!1,r.data.success&&(this.selectProduct.imageUrl=r.data.imageUrl,this.$refs.fileInput.value="")}).catch(r=>{this.status.fileUploading=!1,console.log(r)})},updateProduct(){this.$emit("update-product",this.selectProduct)}},mounted(){this.modal=new x(document.querySelector("#productModal"),{backdrop:"static",keyboard:!1})}},N={id:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true",ref:"modal"},A={class:"modal-dialog modal-xl"},B={class:"modal-content border-0"},F={class:"modal-header bg-dark text-white"},S={id:"productModalLabel",class:"modal-title"},O={key:0},H={key:1},$=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),q={class:"modal-body"},Y={class:"row"},j={class:"col-sm-4"},z={class:"mb-3"},G=t("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),J={class:"mb-3"},K={for:"customFile",class:"form-label"},Q={key:0,class:"fas fa-spinner fa-spin"},W=["src"],X={key:0,class:"mt-5"},Z={class:"mb-3"},tt=t("label",{for:"imgUrl",class:"form-label"},"圖片網址",-1),et=["onUpdate:modelValue"],st=["src"],ot=["onClick"],lt={key:0},it={class:"col-sm-8"},nt={class:"mb-3"},dt=t("label",{for:"title",class:"form-label"},"標題",-1),at={class:"row"},ct={class:"mb-3 col-md-6"},rt=t("label",{for:"category",class:"form-label"},"分類",-1),ut={class:"mb-3 col-md-6"},mt=t("label",{for:"price",class:"form-label"},"單位",-1),pt={class:"row"},ht={class:"mb-3 col-md-6"},_t=t("label",{for:"origin_price",class:"form-label"},"原價",-1),ft={class:"mb-3 col-md-6"},bt=t("label",{for:"price",class:"form-label"},"售價",-1),gt=t("hr",null,null,-1),Pt={class:"mb-3"},vt=t("label",{for:"description",class:"form-label"},"產品描述",-1),wt={class:"mb-3"},yt=t("label",{for:"content",class:"form-label"},"說明內容",-1),Ut={class:"mb-3"},Vt={class:"form-check"},Mt=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),kt={class:"modal-footer"},xt=t("button",{type:"button",class:"btn btn-outline-primary","data-bs-dismiss":"modal"}," 取消 ",-1);function Ct(l,e,d,r,s,a){return i(),n("div",N,[t("div",A,[t("div",B,[t("div",F,[t("h5",S,[d.isNew?(i(),n("span",O,"新增產品")):(i(),n("span",H,"編輯產品"))]),$]),t("div",q,[t("div",Y,[t("div",j,[t("div",z,[G,u(t("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":e[0]||(e[0]=o=>s.selectProduct.imageUrl=o),placeholder:"請輸入圖片連結"},null,512),[[m,s.selectProduct.imageUrl]])]),t("div",J,[t("label",K,[C("或 上傳圖片 "),s.status.fileUploading?(i(),n("i",Q)):w("",!0)]),t("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[1]||(e[1]=(...o)=>a.uploadFile&&a.uploadFile(...o))},null,544)]),t("img",{class:"img-fluid",src:s.selectProduct.imageUrl},null,8,W),Array.isArray(s.selectProduct.imagesUrl)?(i(),n("div",X,[(i(!0),n(y,null,V(s.selectProduct.imagesUrl,(o,p)=>(i(),n("div",{class:"mb-3",key:p},[t("div",Z,[tt,u(t("input",{type:"url",class:"form-control mb-2",placeholder:"請輸入圖片連結","onUpdate:modelValue":h=>s.selectProduct.imagesUrl[p]=h},null,8,et),[[m,s.selectProduct.imagesUrl[p]]])]),t("img",{class:"img-fluid",src:o},null,8,st),t("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:h=>s.selectProduct.imagesUrl.splice(p,1)}," 刪除圖片 ",8,ot)]))),128)),!s.selectProduct.imagesUrl.length||s.selectProduct.imagesUrl.at(-1)?(i(),n("div",lt,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=o=>s.selectProduct.imagesUrl.push(""))}," 新增圖片 ")])):w("",!0)])):w("",!0)]),t("div",it,[t("div",nt,[dt,u(t("input",{id:"title",type:"text",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=o=>s.selectProduct.title=o),placeholder:"請輸入標題"},null,512),[[m,s.selectProduct.title]])]),t("div",at,[t("div",ct,[rt,u(t("input",{id:"category",type:"text",class:"form-control","onUpdate:modelValue":e[4]||(e[4]=o=>s.selectProduct.category=o),placeholder:"請輸入分類"},null,512),[[m,s.selectProduct.category]])]),t("div",ut,[mt,u(t("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":e[5]||(e[5]=o=>s.selectProduct.unit=o),placeholder:"請輸入單位"},null,512),[[m,s.selectProduct.unit]])])]),t("div",pt,[t("div",ht,[_t,u(t("input",{type:"number",class:"form-control",id:"origin_price",min:"0","onUpdate:modelValue":e[6]||(e[6]=o=>s.selectProduct.origin_price=o),placeholder:"請輸入原價"},null,512),[[m,s.selectProduct.origin_price,void 0,{number:!0}]])]),t("div",ft,[bt,u(t("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[7]||(e[7]=o=>s.selectProduct.price=o),min:"0",placeholder:"請輸入售價"},null,512),[[m,s.selectProduct.price,void 0,{number:!0}]])])]),gt,t("div",Pt,[vt,u(t("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[8]||(e[8]=o=>s.selectProduct.description=o),placeholder:"請輸入產品描述"},null,512),[[m,s.selectProduct.description]])]),t("div",wt,[yt,u(t("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":e[9]||(e[9]=o=>s.selectProduct.content=o),placeholder:"請輸入說明內容"},null,512),[[m,s.selectProduct.content]])]),t("div",Ut,[t("div",Vt,[u(t("input",{class:"form-check-input",type:"checkbox",id:"is_enabled","onUpdate:modelValue":e[10]||(e[10]=o=>s.selectProduct.is_enabled=o),"true-value":1,"false-value":0},null,512),[[L,s.selectProduct.is_enabled]]),Mt])])])])]),t("div",kt,[xt,t("button",{type:"button",class:"btn btn-primary",onClick:e[11]||(e[11]=(...o)=>a.updateProduct&&a.updateProduct(...o))}," 確認 ")])])])],512)}const Lt=U(R,[["render",Ct]]),{VITE_URL:P,VITE_PATH:v}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"sasimi1327",BASE_URL:"/Idoshou/",MODE:"production",DEV:!1,PROD:!0},Dt={data(){return{products:[],selectProduct:{},isNew:!1,pagination:{},currentPage:1,isLoading:!1}},components:{ProductModal:Lt,DeleteModal:D,PaginationView:I},methods:{getProducts(l=1){const e=`${P}/api/${v}/admin/products?page=${l}`;this.isLoading=!0,this.$http.get(e).then(d=>{this.products=d.data.products,this.pagination=d.data.pagination,this.isLoading=!1}).catch(d=>{this.isLoading=!1,g.fire({position:"top-end",icon:"error",title:d.response.data.message,showConfirmButton:!1,timer:1500,showClass:{popup:"animate__animated animate__fadeInRight"}})})},updateProduct(l){this.selectProduct=l;let e=`${P}/api/${v}/admin/product`,d="post";this.isLoading=!0,this.isNew||(e=`${P}/api/${v}/admin/product/${this.selectProduct.id}`,d="put"),this.$http[d](e,{data:this.selectProduct}).then(r=>{this.isLoading=!1,this.getProducts(this.currentPage),this.$refs.productModal.modal.hide(),this.isNew||g.fire({position:"top-end",icon:"success",text:r.data.message,color:"#C0362D",toast:!0,width:300,showConfirmButton:!1,timer:1500,showClass:{popup:"animate__animated animate__fadeInRight"},hideClass:{popup:"animate__animated animate__fadeOutRight"}})}).catch(r=>{this.isLoading=!1,g.fire({position:"top-end",icon:"error",title:r.response.data.message,showConfirmButton:!1,timer:1500,showClass:{popup:"animate__animated animate__fadeInRight"}})})},deleteProduct(){const l=`${P}/api/${v}/admin/product/${this.selectProduct.id}`;this.isLoading=!0,this.$http.delete(l).then(e=>{this.isLoading=!1,this.$refs.delModal.modal.hide(),this.getProducts(this.currentPage)}).catch(e=>{this.isLoading=!1,g.fire({position:"top-end",icon:"error",title:e.response.data.message,showConfirmButton:!1,timer:1500,showClass:{popup:"animate__animated animate__fadeInRight"}})})},openModal(l){l?(this.isNew=!1,this.selectProduct={...l}):(this.isNew=!0,this.selectProduct={}),this.$refs.productModal.modal.show()},openDelModal(l){this.selectProduct={...l},this.$refs.delModal.modal.show()}},mounted(){this.getProducts()}},It={class:"container"},Et={class:"text-end mt-4"},Tt={class:"table mt-4"},Rt=t("thead",null,[t("tr",null,[t("th",{width:"120"}," 分類 "),t("th",null,"產品名稱"),t("th",{width:"120"}," 原價 "),t("th",{width:"120"}," 售價 "),t("th",{width:"100"}," 是否啟用 "),t("th",{width:"120"}," 編輯 ")])],-1),Nt={class:"text-center"},At={class:"text-center"},Bt={key:0,class:"text-success"},Ft={key:1},St={class:"btn-group"},Ot=["onClick"],Ht=["onClick"];function $t(l,e,d,r,s,a){const o=_("LoadingView"),p=_("PaginationView"),h=_("ProductModal"),M=_("DeleteModal");return i(),n(y,null,[t("div",It,[f(o,{active:s.isLoading,"onUpdate:active":e[0]||(e[0]=c=>s.isLoading=c)},null,8,["active"]),t("div",Et,[t("button",{type:"button",onClick:e[1]||(e[1]=c=>a.openModal("")),class:"btn btn-primary"}," 建立新的產品 ")]),t("table",Tt,[Rt,t("tbody",null,[(i(!0),n(y,null,V(s.products,c=>(i(),n("tr",{key:c.id},[t("td",null,b(c.category),1),t("td",null,b(c.title),1),t("td",Nt,b(c.origin_price),1),t("td",At,b(c.price),1),t("td",null,[c.is_enabled?(i(),n("span",Bt,"啟用")):(i(),n("span",Ft,"未啟用"))]),t("td",null,[t("div",St,[t("button",{type:"button",onClick:k=>a.openModal(c),class:"btn btn-outline-primary btn-sm"}," 編輯 ",8,Ot),t("button",{type:"button",onClick:k=>a.openDelModal(c),class:"btn btn-outline-danger btn-sm"}," 刪除 ",8,Ht)])])]))),128))])]),f(p,{pages:s.pagination,onEmitPage:a.getProducts},null,8,["pages","onEmitPage"])]),f(h,{ref:"productModal","is-new":s.isNew,product:s.selectProduct,onUpdateProduct:a.updateProduct},null,8,["is-new","product","onUpdateProduct"]),f(M,{ref:"delModal",item:s.selectProduct,onDelItem:a.deleteProduct},null,8,["item","onDelItem"])],64)}const Jt=U(Dt,[["render",$t]]);export{Jt as default};