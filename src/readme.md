
> 注：当前项目为 Serverless Devs 应用，由于应用中会存在需要初始化才可运行的变量（例如应用部署地区、服务名、函数名等等），所以**不推荐**直接 Clone 本仓库到本地进行部署或直接复制 s.yaml 使用，**强烈推荐**通过 `s init ` 的方法或应用中心进行初始化，详情可参考[部署 & 体验](#部署--体验) 。

# fc-qwen 帮助文档
<p align="center" class="flex justify-center">
    <a href="https://www.serverless-devs.com" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=fc-qwen&type=packageType">
  </a>
  <a href="http://www.devsapp.cn/details.html?name=fc-qwen" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=fc-qwen&type=packageVersion">
  </a>
  <a href="http://www.devsapp.cn/details.html?name=fc-qwen" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=fc-qwen&type=packageDownload">
  </a>
</p>

<description>

部署通义千问客户端

</description>

<codeUrl>



</codeUrl>
<preview>



</preview>


## 前期准备

使用该项目，您需要有开通以下服务：

<service>
</service>

推荐您拥有以下的产品权限 / 策略：
<auth>
</auth>

<remark>



</remark>

<disclaimers>



</disclaimers>

## 部署 & 体验

<appcenter>
   
- :fire: 通过 [Serverless 应用中心](https://fcnext.console.aliyun.com/applications/create?template=fc-qwen) ，
  [![Deploy with Severless Devs](https://img.alicdn.com/imgextra/i1/O1CN01w5RFbX1v45s8TIXPz_!!6000000006118-55-tps-95-28.svg)](https://fcnext.console.aliyun.com/applications/create?template=fc-qwen) 该应用。
   
</appcenter>
<deploy>
    
- 通过 [Serverless Devs Cli](https://www.serverless-devs.com/serverless-devs/install) 进行部署：
  - [安装 Serverless Devs Cli 开发者工具](https://www.serverless-devs.com/serverless-devs/install) ，并进行[授权信息配置](https://docs.serverless-devs.com/fc/config) ；
  - 初始化项目：`s init fc-qwen -d fc-qwen `
  - 进入项目，并进行项目部署：`cd fc-qwen && s deploy - y`
   
</deploy>

## 应用详情

<appdetail id="flushContent">

## **如何快速拥有个人专享的伴身AI助手？**
**_可以书写爆款文案_**
![](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/168324/1698051808799-b46f9c57-920c-4319-8bc9-a762f6e398e4.png#clientId=u6aa5c3c6-503d-4&from=paste&id=u45f53254&originHeight=1758&originWidth=3814&originalType=url&ratio=2&rotation=0&showTitle=false&status=done&style=none&taskId=u04a368f0-b643-4530-b94c-28e95a115c7&title=)
**_可以解析编写代码_**
![](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/168324/1698051809120-b2b12da8-5734-4656-839c-c1371d6c3c33.png#clientId=u6aa5c3c6-503d-4&from=paste&id=ufb365435&originHeight=1766&originWidth=3824&originalType=url&ratio=2&rotation=0&showTitle=false&status=done&style=none&taskId=uf60a2fc4-167b-4cc9-83db-154d2a1fa50&title=)

还有更多能力需要您自己去探索。接下来我们将花费5分钟来完成这个个人专享AI智能助手的部署，您需要做的就是拥有一个阿里云的账号

## 领取函数计算试用额度
首次开通函数计算，务必领取试用资源，您可以在**任务一**进行领取。
新开通函数计算用户可0元专享套餐，有效期3个月，总价值180元。套餐限购1次，内含四个试用包：50万vCPU*秒 + 200万GB*秒 + 800万次函数调用 + 100万GB*秒GPU。
## **教程实践**
打开函数计算控制台 应用->创建应用->人工智能->**通义千问 AI 助手->**立即创建
![截屏2023-10-23 17.09.04.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/168324/1698052177364-7fc269d4-d6e3-4e41-a56f-11a7c94e9bef.png#clientId=u6aa5c3c6-503d-4&from=ui&id=ud375628a&originHeight=489&originWidth=892&originalType=binary&ratio=2&rotation=0&showTitle=false&size=343127&status=done&style=none&taskId=ude997514-fe70-4521-983e-a38ef1911a0&title=)
点击“直接部署”
![截屏2023-10-23 17.10.32.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/168324/1698052252713-7c705eeb-63fe-438a-b764-78cbf1132878.png#clientId=u6aa5c3c6-503d-4&from=ui&id=u3375dd2c&originHeight=384&originWidth=745&originalType=binary&ratio=2&rotation=0&showTitle=false&size=231536&status=done&style=none&taskId=ucc2cbaa9-8dd3-439e-bdac-d5b32e3d446&title=)
高级配置部分，需要填写**通义千问的API-KEY**，根据指引进行创建。这里需要进入灵积平台 [https://dashscope.console.aliyun.com/overview](https://dashscope.console.aliyun.com/overview) 立即获取通义千问的API-KEY
![](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/168324/1698051814897-fdd83a0e-37e8-4c8f-946f-2f6158676851.png#clientId=u6aa5c3c6-503d-4&from=paste&id=uf49e403f&originHeight=1706&originWidth=3810&originalType=url&ratio=2&rotation=0&showTitle=false&status=done&style=none&taskId=uac78a8e9-ea01-4909-af81-1af1dd94d5e&title=)
灵积平台页面
![](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/168324/1698051814916-aecd53c9-b1bc-4332-a839-663948b92671.png#clientId=u6aa5c3c6-503d-4&from=paste&id=u2b96640f&originHeight=1754&originWidth=3810&originalType=url&ratio=2&rotation=0&showTitle=false&status=done&style=none&taskId=u1381ffd0-e15f-43ac-a610-94955bbb3fc&title=)
![](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/168324/1698051815357-363e0b0d-702a-4a94-accb-346496c834bb.png#clientId=u6aa5c3c6-503d-4&from=paste&id=u4e7a967c&originHeight=1666&originWidth=3824&originalType=url&ratio=2&rotation=0&showTitle=false&status=done&style=none&taskId=ua93ed45c-855b-48ed-a3dc-587cd5c88c4&title=)
开通灵积平台，并创建API-KEY，将创建的API-KEY复制到函数计算控制台的表单部分
![](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/168324/1698051815354-684e2482-bc02-4493-b6af-4f824620535a.png#clientId=u6aa5c3c6-503d-4&from=paste&id=u584f4394&originHeight=1630&originWidth=3750&originalType=url&ratio=2&rotation=0&showTitle=false&status=done&style=none&taskId=uf328dd7c-ea7d-4e95-b177-c4beffe6048&title=)
记住**客户端的访问密码，**访问的时候需要使用，也可以自己设定
![截屏2023-10-23 17.13.59.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/168324/1698052461231-b46de362-703f-4635-9330-878077f9ecbb.png#clientId=u6aa5c3c6-503d-4&from=ui&id=u5ca2b85d&originHeight=316&originWidth=665&originalType=binary&ratio=2&rotation=0&showTitle=false&size=168008&status=done&style=none&taskId=u3890f1a0-416f-4d48-b4a8-334d7b0d836&title=)

把授权处理一下，然后确定。接下来就静静等待服务的部署
![](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/168324/1698051815615-931d42f8-7cb3-4026-8d25-34ef67bc3d80.png#clientId=u6aa5c3c6-503d-4&from=paste&height=1104&id=uf4da0620&originHeight=1104&originWidth=3770&originalType=url&ratio=2&rotation=0&showTitle=false&status=done&style=none&taskId=ud567c6fa-2b4a-4a18-98ac-878ecd9e49f&title=&width=3770)
部署成功后可以直接访问 client开头的服务
## **操作问答**
访问client开头的地址您会得到一个页面
![](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/168324/1698051816790-91926404-5c48-4ca1-b5f7-0d6a70920f63.png#clientId=u6aa5c3c6-503d-4&from=paste&id=u01e50fdc&originHeight=1744&originWidth=3350&originalType=url&ratio=2&rotation=0&showTitle=false&status=done&style=none&taskId=u9d779054-2ad2-4ac5-9dd3-443c4a975f7&title=)
要求您输入密码，这里是为了保护服务不被其他人访问，在部署的时候大家可以自定设定这个密码
![](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/168324/1698051818380-269c6ab9-564e-48da-ae1d-283f3c25601a.png#clientId=u6aa5c3c6-503d-4&from=paste&id=u49073d8d&originHeight=1612&originWidth=3804&originalType=url&ratio=2&rotation=0&showTitle=false&status=done&style=none&taskId=ue3a7f282-c66d-4166-b4e8-cb7ff1bf5da&title=)
比如默认的密码 **fc-qwen**，那么我们输入即可
![](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/168324/1698051823018-e3770685-460e-4565-b6ec-f7fdc0811cf1.png#clientId=u6aa5c3c6-503d-4&from=paste&id=ub1ed867f&originHeight=1754&originWidth=2784&originalType=url&ratio=2&rotation=0&showTitle=false&status=done&style=none&taskId=u7c9c0a09-c93b-4784-a277-f1af5d8df7a&title=)
![截屏2023-10-23 17.16.27.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/168324/1698052599071-078d00a4-4d3a-4bc4-98eb-cba7c78f4ef1.png#clientId=u6aa5c3c6-503d-4&from=ui&id=udb29e593&originHeight=922&originWidth=1225&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1005451&status=done&style=none&taskId=u6b5f2821-bdcd-4be8-99d9-5994aa2c09f&title=)
成功！
## **说明**
函数计算X通义千问这个应用为大家展示了一个最小的使用大语言模型的功能集，我们基于开源的[ChatGPT-Next-Web](https://github.com/Yidadaa/ChatGPT-Next-Web) 作为客户端对接商业版本千问的服务能力，为了满足标准的流式响应，函数计算的服务中间层做了一个转换

基于函数计算构建链接大语言模型是我们目前看到的最快速有效的方案，如果您是一位开发者的化也可以尝试基于FC构建更多的大语言模型应用，欢迎多多交流。


</appdetail>

## 使用文档

<usedetail id="flushContent">
</usedetail>


<devgroup>


## 开发者社区

您如果有关于错误的反馈或者未来的期待，您可以在 [Serverless Devs repo Issues](https://github.com/serverless-devs/serverless-devs/issues) 中进行反馈和交流。如果您想要加入我们的讨论组或者了解 FC 组件的最新动态，您可以通过以下渠道进行：

<p align="center">  

| <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407298906_20211028074819117230.png" width="130px" > | <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407044136_20211028074404326599.png" width="130px" > | <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407252200_20211028074732517533.png" width="130px" > |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| <center>微信公众号：`serverless`</center>                                                                                         | <center>微信小助手：`xiaojiangwh`</center>                                                                                        | <center>钉钉交流群：`33947367`</center>                                                                                           |
</p>
</devgroup>
