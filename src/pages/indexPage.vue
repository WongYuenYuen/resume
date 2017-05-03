<template>
    <div>
        <!-- <div class="output" @click="outputPDF()">导出</div> -->

        <div class="container">
            <div class="lft-section">
                <div class="name-box">
                    <div class="avatar"></div>
                    <h3 class="name">黄婉婉</h3>
                    <p class="job">前端工程师</p>
                </div>
                <div class="info-box">
                    <i class="glyphicon glyphicon-phone icon"></i>
                    <div class="msg">
                        13060659981
                    </div>
                </div> 
                <div class="info-box">
                    <i class="glyphicon glyphicon-envelope icon"></i>
                    <div class="msg">
                        308956466@qq.com
                    </div>
                </div> 

                <div class="info-box">
                    <i class="glyphicon glyphicon-map-marker icon"></i>
                    <div class="msg">
                        广州
                    </div>
                </div> 

                <div class="info-box">
                    <i class="glyphicon glyphicon-education icon"></i>
                    <div class="msg">
                        华南农业大学
                        <br/>软件工程
                        <br/>2015届本科
                    </div>
                </div> 

                <div class="info-box">
                    <i class="glyphicon glyphicon-stats icon"></i>
                    <div class="msg">
                        技术职级 T1-3
                    </div>
                </div> 
                <div class="info-box">
                    <i class="glyphicon glyphicon-wrench icon"></i>
                    <div class="msg">
                        AngularJS,VUE<br/>HTML5,ES6<br/>Sass,JavaScript
                    </div>
                </div> 
                <div class="info-box">
                    <i class="glyphicon glyphicon-star icon"></i>
                    <div class="msg">
                        工作时认真负责，能快速学习，解决问题
                        <br/>乐于学习，思路清晰，具备良好的沟通能力和团队协作精神
                        <br/>闲时喜欢撸猫、看书、游泳、种花
                    </div>
                </div> 


            </div>
            <div class="right-section">
                <div class="right-box experience-box">
                    <div class="title-box">
                        <i class="glyphicon glyphicon-briefcase icon"></i>
                        <h3 class="name">工作经验</h3>
                    </div>
                    <div class="module" v-for="item in experience">
                        <div class="company-logo" :style="{background: 'url('+item.companyLogo+') no-repeat center', backgroundSize: 'cover'}"></div>
                        <span class="date">{{item.time}}</span>
                        <p class="name">{{item.company}}</p>
                        <p class="msg">{{item.info}}</p>
                    </div>
                </div>
                <div class="right-box project-box">
                    <div class="title-box">
                        <i class="glyphicon glyphicon-tasks icon"></i>
                        <h3 class="name">项目经验</h3>
                    </div>
                    <div class="module" v-for="item in project">
                        <span class="date">{{item.time}}</span>

                        <p class="name">{{item.name}}</p>
                        <p class="msg">{{item.des}}</p>
                        <p class="skill">技术：{{item.skill}}</p>



                    </div>
                </div>
            </div>
        </div>
        
    </div>

</template>
<script>
    import '../sass/resume.scss';
    export default {
        data() {
            return {
                experience:[{
                    time:'2017-至今',
                    skill:'前端工程师',
                    info:'跟产品、设计沟通交流，进行Web前端开发。',
                    company:'广州华多网络科技有限公司',
                    companyLogo:'../images/huanju.jpg'
                },{
                    time:'2015.11月-2016.1月',
                    skill:'前端工程师',
                    info:'根据功能需要进行前端开发。',
                    company:'广州图普网络科技有限公司',
                    companyLogo:'../images/tupu.png'
                }],
                project:[{
                    time:'2016.11 - 2017.02',
                    name:'专题活动页',
                    job:'跟产品、设计沟通交流，进行Web前端开发。',
                    skill:'VUE、VUEX、RequireJS、ES6、Sass、Webpack',
                    des:'一个可配置的活动专题模版网站和CBA专题页。该系统是提供给运营同学根据设计的稿子进行配置活动页面，模块都是按需加载请求对应的静态文件。前期使用RequireJS开发，后来用VUE2重构成单页面应用。'
                },{
                    time:'2016.07 - 2016.09',
                    name:'喵警APP',
                    job:'设计和前端开发',
                    skill:'Angular、Sass、FIS',
                    des:'这个是一个收集警报后分发给相应同事的单页面应用。我在此项目负责了设计和前端的开发。首次做设计和开发单应用APP，从构建手脚架到最后上线，遇到困难就Google和咨询有相关经验的同事解决，从中快速学习。'
                },{
                    time:'2015.11 - 2016.02',
                    name:'音乐拍APP',
                    job:'IOS和Android开发',
                    skill:'Android、IOS',
                    des:'一个短视频和直播功能的APP里的部分功能开发，在开发过程中快速学习ios和Android的开发。'
                },{
                    time:'2014.11 - 2015.02',
                    name:'最美搜衣管理平台',
                    job:'前端开发',
                    skill:'Handlebars、NodeJS',
                    des:'图普科技是一家专注于图像人工智能识别的技术公司,产品有最美搜衣、图片/视频鉴黄服务接口、图像识别开放平台等。我在其中负责最美搜的部分移动端 web 页面的重构,和图像识别开放平台的前后功能实现,逐步优化和添加完善功能。 '
                }]
            }
        },
        methods:{
            outputPDF(){
                html2canvas(document.getElementsByClassName('container')[0], {
                    onrendered: function(canvas) {

                        //通过html2canvas将html渲染成canvas，然后获取图片数据
                        var imgData = canvas.toDataURL('image/jpeg');

                        //初始化pdf，设置相应格式
                        var doc = new jsPDF("p", "mm", "a4");

                        //这里设置的是a4纸张尺寸
                        doc.addImage(imgData, 'JPEG', 0, 0,210,297);

                        //输出保存命名为content的pdf
                        doc.save('黄婉婉－前端工程师.pdf');
                    }
                });
            }
        }
    }
</script>