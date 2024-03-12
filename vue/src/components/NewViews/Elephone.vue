<template>

<el-carousel indicator-position="outside"  height="400px" >
    <el-carousel-item >
     <div style="width: 100%; height: 400px;"><img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20240229/20240229171037852715_original.jpg" style="width: 100%; height: 100%;"></div>
    </el-carousel-item>
    <el-carousel-item >
      <div style="width: 100%; height: 400px"><img src="../../../picture/手机1.png" style="width: 100%; height: 100%;"></div>
    </el-carousel-item>
    <el-carousel-item >
      <div style="width: 100%; height: 400px;"><img src="../../../picture/手机2.png" style="width: 100%; height: 100%;"></div>
    </el-carousel-item>
    <el-carousel-item >
      <div style="width: 100%; height: 400px;"><img src="../../../picture/手机3.png" style="width: 100%; height: 100%;"></div>
    </el-carousel-item>
  </el-carousel>

  
   <el-row :gutter="5">
  <!-- 第二行 -->
  <el-col>
    <!-- 第二行的内容放在这里 -->
  </el-col>
</el-row>

   <el-row>
     <el-col
     v-for="(o, index) in 1"
     :key="o"
     :span="24"
     :offset="index > 0 ? 1 : 0"
   >
   <el-card :body-style="{ padding: '0px' }" shadow="hover">
       <img
         src="../../../picture/手机4.png"
         class="phone"
       />
     </el-card>
   </el-col>
   </el-row>



   <el-row :gutter="5">
  <!-- 第二行 -->
  <el-col>
    <!-- 第二行的内容放在这里 -->
  </el-col>
</el-row>


<el-row :gutter="20">
    <el-col :span="3"></el-col>
    <el-col :span="6">
      <el-card :body-style="{ padding: '0px' }" shadow="hover">
       <img
         src="https://img10.360buyimg.com/n1/s450x450_jfs/t1/231763/26/1252/44086/653f563eF1188df2b/728402117e2c5c71.png.avif"
         class="phone"
       />
       <div style="padding: 14px">
         <p>HUAWEI Mate X5 典藏版 16GB+1TB 青山黛</p>
         <p>质感素皮，如悠扬远山，生机盎然。</p>
         <p>轻薄四曲机身，温润流转掌心.四曲折叠机身设计，均衡柔和，握持手感服帖温润，“轻'新姿态，展翼翩跃于掌上。</p>
         <p>内外双屏亮度提升2，画面对比分明;双LTPO屏幕3，动态显示细腻流畅，帧帧超清明晰;获得德国莱茵TUV色准和准确色彩投射双认证，无论开合，由内而外精彩悦目，画面真实，栩栩如生，呈现别无二致的视觉盛宴。</p>
         <p>灵犀Al算法，自学习，选择更优网络;灵犀天线，超灵敏，提升信号感知，随时随地，带来更流畅的网络体验。</p>
         <div class="bottom">
           <el-button text class="button">加入购物车</el-button>
           <el-button text class="button">¥16999</el-button>
           <el-button text class="button">购买</el-button>
         </div>
       </div>
     </el-card>
    </el-col>
    <el-col :span="6">
      <el-card :body-style="{ padding: '0px' }" shadow="hover">
       <img
         src="https://img12.360buyimg.com/n1/s450x450_jfs/t1/166170/28/32740/31828/658bf304Fbb1b0820/e67e8e62ee4540c0.jpg.avif"
         class="phone"
       />
       <div style="padding: 14px">
         <p>HUAWEI nova 12 Ultra 512GB （曜金黑）</p>
         <p>黑与金，神秘与闪耀交织,引人探索，延伸无尽想象空间。</p>
         <p>等深四微曲设计，给你曲屏的舒适握感，又带来开阔- -致的直屏观感。6.76英寸3动态臻彩屏,搭载Display Turbo动态显示增强技术，让你尽情体会明亮通透、栩栩如生的感官盛宴。</p>
         <p>第二代昆仑玻璃，可靠性再胜一筹。整机耐摔能力提升1倍8，更为抗跌耐摔。</p>
         <p>全新人像美颜主题，自拍真实好看。搭载达芬奇人像引擎,拍出通透皮肤和立体轮廓。素颜或带妆,怎么拍都好看,现在就来按下快门，收获充满呼吸感的原生自拍照。</p>
         <div class="bottom">
          <el-button text class="button">加入购物车</el-button>
           <el-button text class="button">¥4699</el-button>
           <el-button text class="button">购买</el-button>
         </div>
       </div>
     </el-card>
    </el-col>
    <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
       <img
         src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1698307639.35431958.png"
         class="phone"
       />
       <div style="padding: 14px">
         <p>小米14 徕卡光学镜头 光影猎人900 徕卡75mm浮动长焦 骁龙8Gen3 16+512 黑色 </p>
         <P>小米手机 6.36″黄金尺寸，极窄视觉四等边屏幕。</P>
         <P>搭载全新C8屏幕发光材料，拥有1.5K分辨率和高达460PPI显示精度，每一处细节都展现得尤为细腻。惊人的3000nit峰值亮度和超色准技术，为你带来更加生动逼真的显示效果。</P>
         <P>第三代骁龙8移动平台，全新架构，能效大飞跃。</P>
         <p>更搭载全新小米澎湃OS，以人为中心，打造「人车家全生态」操作系统，将体验推进到全新高度；原生低蓝光设计，有害蓝光降低50%，让你的浏览体验更佳。</p>
         <div class="bottom">
          <el-button text class="button">加入购物车</el-button>
           <el-button text class="button">¥4599</el-button>
           <el-button text class="button">购买</el-button>
         </div>
       </div>
     </el-card>
        </el-col>

    <el-col :span="3"></el-col>
  </el-row>

  <el-row :gutter="5">
  <!-- 第二行 -->
  <el-col>
    <!-- 第二行的内容放在这里 -->
  </el-col>
</el-row>

   <el-row :gutter="5">
    <el-col
     v-for="(o, index) in 1"
     :key="o"
     :span="12"
     :offset="index > 0 ? 1 : 0"
   >
   <el-card :body-style="{ padding: '0px' }" shadow="hover">
       <img
         src="../../../picture/手机5.png"
         class="phone"
       />
       <div style="padding: 14px">
         <p>HUAWEI nova 12 Ultra 16+512GB </p>
         <p>一体化素皮压花设计，精工细作，呈现生动立体感压纹，入手轻薄舒适。标志性nova压花图案，以先锋姿态，演绎无限可能。超级星耀环衔接流畅，观感浑然天成。</p>
         <div class="bottom">
           <el-button text class="button">加入购物车</el-button>
           <el-button text class="button">¥4699 </el-button>
           <el-button text class="button">购买</el-button>
         </div>
       </div>
     </el-card>
   </el-col>
   <el-col
     v-for="(o, index) in 1"
     :key="o"
     :span="12"
     :offset="index > 0 ? 1 : 0"
   >
   <el-card :body-style="{ padding: '0px' }" shadow="hover">
       <img
         src="../../../picture/手机6.png"
         class="phone"
         style="width: 100%; height: 280px;"
       />
       <div style="padding: 14px">
         <p>Xiaomi 14 Ultra 16+512GB</p>
         <p>新一代专业影像旗舰,以光为始，不断向前探索时代审美,融合先进技术，让移动影像进入全新层次</p>
         <div class="bottom">
          <el-button text class="button">加入购物车</el-button>
           <el-button text class="button">¥6999 </el-button>
           <el-button text class="button">购买</el-button>
         </div>
       </div>
     </el-card>
   </el-col> 
   </el-row>
   
 </template>
 


 <style lang="scss" scoped>
 .el-row {
   margin-bottom: 50px;
 }
 .el-row:last-child {
   margin-bottom: 0;
 }
 .el-col {
   border-radius: 4px;
 }
 
 .bottom {
 margin-top: 13px;
 line-height: 12px;
 display: flex;
 justify-content: space-between;
 align-items: center;
}

.button {
 padding: 0;
 min-height: auto;
}

.phone {
 width: 100%;
 display: block;
}

 </style>