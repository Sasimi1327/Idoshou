import{S as d}from"./sweetalert2.all-0d055531.js";import{_ as m,o as u,d as p,e as s,C as h,bu as l,bl as c}from"./index-8fbcde8d.js";const{VITE_URL:_}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"sasimi1327",BASE_URL:"/Idoshou/",MODE:"production",DEV:!1,PROD:!0},f={data(){return{user:{username:"",password:""}}},methods:{signIn(){const n=`${_}/admin/signin`;this.$http.post(n,this.user).then(e=>{const{token:i,expired:r}=e.data;document.cookie=`hexToken=${i};expires=${new Date(r)};`,d.fire({position:"top-end",icon:"success",text:"登入成功",color:"#C0362D",toast:!0,width:300,showConfirmButton:!1,timer:1500,showClass:{popup:"animate__animated animate__fadeInRight"},hideClass:{popup:"animate__animated animate__fadeOutRight"}}),this.$router.push("/admin/products")}).catch(e=>{d.fire({position:"top-end",icon:"error",title:e.response.data.message,showConfirmButton:!1,timer:1500})})}}},w={class:"container mt-5",style:{height:"calc( 100vh - 460px)"}},g={class:"row justify-content-center align-items-center"},b={class:"col-8"},x=s("h1",{class:"h2 mb-4 font-weight-normal"}," 請先登入 ",-1),v={class:"form-floating mb-3"},E=s("label",{for:"username"},"Email address",-1),I={class:"form-floating"},V=s("label",{for:"password"},"Password",-1),k=s("div",{class:"text-end mt-4"},[s("button",{class:"btn btn-lg btn-primary btn-block w-100 mt-3",type:"submit"}," 登入 ")],-1),y=s("p",{class:"mt-5 mb-3 text-muted text-center"}," © 2023~∞ - 六角學院 ",-1);function B(n,e,i,r,o,a){return u(),p("div",w,[s("div",g,[s("div",b,[x,s("form",{id:"form",class:"form-signin",onSubmit:e[2]||(e[2]=h((...t)=>a.signIn&&a.signIn(...t),["prevent"]))},[s("div",v,[l(s("input",{type:"email",class:"form-control",id:"username","onUpdate:modelValue":e[0]||(e[0]=t=>o.user.username=t),placeholder:"name@example.com",required:"",autofocus:""},null,512),[[c,o.user.username]]),E]),s("div",I,[l(s("input",{type:"password",class:"form-control",id:"password","onUpdate:modelValue":e[1]||(e[1]=t=>o.user.password=t),placeholder:"Password",required:""},null,512),[[c,o.user.password]]),V]),k],32)])]),y])}const R=m(f,[["render",B]]);export{R as default};