<script setup lang="ts">
import { isDark } from "../../composables/dark";


</script>
<template>
  <el-row>
    <el-col :span="24">
   <div :class="{ 'dark': isDark }">
  
  <div class="Pshow">
    <el-row>
      <el-col :span="24">
        <el-carousel :interval="4000" type="card" height="500px">
     
      <el-carousel-item style="height: 500px">
        <div class="picture"><img src="../../../picture/屏幕截图 2024-02-28 163434.png"></div>
        
      </el-carousel-item>
      <el-carousel-item style="height: 500px">
        <div class="picture"><img src="../../../picture/屏幕截图 2024-02-28 164510.png"></div>
        
      </el-carousel-item>
      <el-carousel-item style="height: 500px">
        <div class="picture"><img src="../../../picture/屏幕截图 2024-02-28 164741.png"></div>
        
      </el-carousel-item>
    </el-carousel>
  </el-col>
  </el-row>
  <el-row>
    <div class="P-box1">



      <div :class="{ 'dark': isDark }">
  <el-card :body-style="{ padding: '0px' }" class="Pbox-card" shadow="always">
    <el-row>
      <el-col :span='1'></el-col>
    <el-col :span="6" style="margin: 10px;">
      <div class="Picture3" style="margin-top: -60px;"><img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1708570856.00833194.png"></div>
      
      <el-button round style="background-color: black; color: white;width: 30px;margin-left: 45px;margin-top: -35px;">购买</el-button>
      <el-button round style="width: 30px;margin-left: 5px;margin-top: -35px;">收藏</el-button>
    </el-col>
    <el-col :span="7" :offset="2" >
        <div class="content">徕卡全明星四摄</div>
        <div class="content">徕卡光学 Summilux 镜头</div>
        <div class="content">小米龙铠架构｜小米龙晶玻璃</div>
        <div class="content">专业 2K 超视感屏｜全等深微曲屏</div>
        <div class="content">第三代骁龙®8移动平台｜动态性能调度 4.0</div>
        <div class="content">LPDDR5X + UFS 4.0 + FBO 焕新存储</div>
        <div class="content">5300mAh 小米金沙江电池</div>
        <div class="content">双路环形冷泵散热系统</div>
        <div class="content">90W 小米澎湃有线秒充</div>
        <div class="content">80W 小米澎湃无线秒充</div>
        
             
    </el-col>
    <el-col :span="7">
      <div class="content">双向卫星通信</div>
      <div class="content">立体声双扬声器</div>
        <div class="content">IP68级防尘防水*</div>
        <div class="content">运行内存：12GB / 16GB LPDDR5X 高速内存</div>
        <div class="content">机身存储：256GB / 512GB / 1TB UFS 4.0 高速存储   </div>
        <div style="font-size: 40px;margin-top: 60px;margin-left: 50px;">XIAOMI <span style="font-weight: 300;">14</span> ULTRA</div>
    </el-col>
  </el-row>
       
      </el-card>
      </div>




</div>
  </el-row>

</div>
   </div>
  </el-col>
  </el-row>

   <el-row>
    <el-col :span="10" :offset="1" style="margin-top: 50px;margin-bottom:-30px;height: 500px;">
      <div class="Picture2"><img src="../../../picture/pms_1708570847.01997341.png"></div>
    </el-col>
    <el-col :span="6">
      <div class="Picture3" style="margin-top: -20px;"><img src="../../../picture/屏幕截图 2024-03-13 093328.png"></div>
      <div style="font-size: 18px;margin-top: 20px; font-weight: 700;">6.73 英寸 2K AMOLED 超视感屏</div>
      <div class="content">类型：全等深微曲屏</div>
      <div class="content">分辨率： 3200 x 1440</div>
      <div class="content">显示帧率：最高 120Hz</div>
      <div class="content">触控采样率：最高 240Hz</div>
      <div class="content">瞬时触控采样率：最高2160Hz*</div>
      <div class="content">色域：支持 P3 广色域</div>
      <div class="content">峰值亮度：3000nit</div>
      <div style="height: 10px;"></div>
      <div class="content" style="font-size: 12px;margin-right: -10px;">* 2160Hz瞬时采样率仅在部分游戏中生效，具体请以实际系统支持为准。</div>
      <div class="content" style="font-size: 12px;">* 自适应超灵敏触控：戴手套后可触发，灵敏度较上一代提升130%。</div>
    </el-col>
    <el-col :span="6" style="margin-left: 20px;margin-top: -8px;">
      <div style="height: 20px;"></div>
      <div class="content">8K 视频拍摄：24 / 30fps</div>
      <div class="content">4K 视频拍摄：24 / 30 / 60 / 120fps</div>
      <div class="content">1080P 视频拍摄：30 / 60fps</div>
      <div class="content">720P 视频拍摄：30fps</div>
      <div style="height: 10px;"></div>
      <div class="content">4K 延时摄影：30fps</div>
      <div class="content">1080P 延时摄影：30fps</div>
      <div class="content">720P 延时摄影：30fps</div>
      <div style="height: 10px;"></div>
      <div class="content" style="font-weight: 700;">一英寸可变光圈主摄</div>
      <div class="content">1080P 慢动作视频拍摄：120 / 240 / 480 / 960 / 1920fps</div>
      <div class="content">720P 慢动作视频拍摄：120 / 240 / 480 / 960 / 1920fps</div>
      <div style="height: 10px;"></div>
      <div class="content" style="font-weight: 700;">徕卡浮动长焦/徕卡特写长焦/徕卡超低畸变广角</div>
      <div class="content">1080P 慢动作视频拍摄：120 / 240 / 960fps</div>
      <div class="content">720P 慢动作视频拍摄：120 / 240 / 960fps</div>

    </el-col>
  </el-row>
  <el-row>
<div class="P-box1" style="margin-top: -10px;margin-bottom: 10px;"> 
<div :class="{ 'dark': isDark }"> 
    <el-col :span="24">
      <el-card :body-style="{ padding: '0px' }" class="Pbox-card" shadow="always">

      <el-row>
    <el-col :span="14" :offset="2">
      <div style="font-size: 50px;margin-top: 50px;">HUAWEI Mate <span style="font-weight: 300;">60</span> RS</div>
      <div style="font-size: 13px;">引领美学风尚，追求极致工艺，
            不断创新，成就顶尖科技。</div>
      <div style="font-size: 13px;">ULTIMATE DESIGN 非凡大师，
            极致美学、极致工艺、极致创新的集大成者。</div>
      <div style="height: 70px;"></div>
            <el-button round style="background-color: black; color: white;">购买</el-button>
            <el-button round style="">收藏</el-button>
    </el-col>
    <el-col :span="4">
      <div class="Picture3"><img src="../../../picture/428_428_1A74BDFD458465D67C4BEB51DE38CEE3.png"></div>
      
    </el-col>
    <el-col :span="4">
    </el-col>
  </el-row>
      </el-card>
<el-row :gutter="20">
  <el-col :span="12" style="margin-top: 10px;">
    <el-card :body-style="{ padding: '0px' }" :class="{'dark-hover': isDark}" class="Pbox-card1" shadow="hover">
      <el-row>
      <el-col :span="9">
      <div class="Picture3" style="margin-top: -30px;"><img src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202403/gbom/6942103109560/428_428_9D3B788CDF5A83F6820BCA9411A6899Dmp.png"></div>
    </el-col>
    <el-col :span="12" :offset='1'>
      <div style="font-size: 30px;margin-top: 30px;">HUAWEI Mate <span style="font-weight: 300;">60</span> PRO+</div>
      <div style="height: 20px;"></div>
      <div style="font-size: 18px;font-weight: 600;">一笔丹青，时代之作</div>
      <div style="height: 10px;"></div>
      <div style="font-size: 13px;">丹青弧，一笔浓墨重彩，开启时代之作。纳米级金属双染之作。</div>
      <div style="font-size: 13px;">高端精致，浑然天成。</div>
      <div style="height: 70px;margin-top: 20px;"></div>
            <el-button round style="background-color: black; color: white;">购买</el-button>
            <el-button round style="">收藏</el-button>
    </el-col>
    </el-row>

    </el-card>
  </el-col>
  <el-col :span="12" style="margin-top: 10px;">
    <el-card :body-style="{ padding: '0px' }" :class="{'dark-hover': isDark}" class="Pbox-card1" shadow="hover">
      <el-row>
      <el-col :span="9">
      <div class="Picture3" style="margin-top: -30px;"><img src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202403/gbom/6942103109515/428_428_19ECD6872775C58CFFD28C2827D7CA5Amp.png"></div>
    </el-col>
    <el-col :span="12" :offset='1'>
      <div style="font-size: 30px;margin-top: 30px;">HUAWEI Mate <span style="font-weight: 300;">60</span> PRO</div>
      <div style="height: 20px;"></div>
      <div style="font-size: 18px;font-weight: 600;">自然色彩，自然出彩</div>
      <div style="height: 10px;"></div>
      <div style="font-size: 13px;">色彩灵感源自大地色卡，指掌间再现多彩江山。</div>
      <div style="font-size: 13px;">锦纤材质，立体纹理，更显层次感;质感素皮，温润触手可及。</div>
      <div style="height: 70px;margin-top: 20px;"></div>
            <el-button round style="background-color: black; color: white;">购买</el-button>
            <el-button round style="">收藏</el-button>
    </el-col>
    </el-row>

    </el-card>
  </el-col>
</el-row>
<el-row>
  <el-col :span="4" :offset="10">
  <div class="Logo-text">
<p class="title">SMARTPHONES</p>
<p class="tip">Newly Launched Flagship Device</p>
</div>
</el-col>
</el-row>
<el-row :gutter="20" style="margin-top: 80px;">
  <el-col :span="2"></el-col>
  <el-col :span="5">
    <el-card :body-style="{ padding: '0px' }" :class="{'dark-hover': isDark}" class="Pbox-card2" shadow="hover" >
    <div class="Picture4" style="margin-top: -40px;"><img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1698307639.33065010.png"></div>
    <div style="font-size: 20px;margin-top: -10px; text-align: center;">XIAOMI <span style="font-weight: 300;">14</span></div>
      <div style="height: 20px;"></div>
    <div style="text-align: center;margin-top: 10px;">
      <el-button round style="background-color: black; color: white;width: 30px;margin-left: -2px;">购买</el-button>
      <el-button round style="width: 30px;margin-left: 5px;">收藏</el-button>
    </div>
    </el-card>
  </el-col>
  <el-col :span="5">
    <el-card :body-style="{ padding: '0px' }" :class="{'dark-hover': isDark}" class="Pbox-card2" shadow="hover" >
    <div class="Picture4" style="margin-top: -40px;"><img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1698307414.07034827.png"></div>
    <div style="font-size: 20px;margin-top: -10px; text-align: center;">XIAOMI <span style="font-weight: 300;">14</span> PRO</div>
      <div style="height: 20px;"></div>
    <div style="text-align: center;margin-top: 10px;">
      <el-button round style="background-color: black; color: white;width: 30px;margin-left: -2px;">购买</el-button>
      <el-button round style="width: 30px;margin-left: 5px;">收藏</el-button>
    </div>
    </el-card>
</el-col>
<el-col :span="5">
  <el-card :body-style="{ padding: '0px' }" :class="{'dark-hover': isDark}" class="Pbox-card2" shadow="hover" >
    <div class="Picture4" style="margin-top: -40px;"><img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1681805071.89555963.png"></div>
    <div style="font-size: 20px;margin-top: -10px; text-align: center;">XIAOMI <span style="font-weight: 300;">13</span> ULTRA</div>
      <div style="height: 20px;"></div>
    <div style="text-align: center;margin-top: 10px;">
      <el-button round style="background-color: black; color: white;width: 30px;margin-left: -2px;">购买</el-button>
      <el-button round style="width: 30px;margin-left: 5px;">收藏</el-button>
    </div>
    </el-card>
</el-col>
<el-col :span="5">
  <el-card :body-style="{ padding: '0px' }" :class="{'dark-hover': isDark}" class="Pbox-card2" shadow="hover" >
    <div class="Picture4" style="margin-top: -40px;"><img src="https://hshop.honorfile.com/pimages//product/6936520837519/800_800_86D43A327B66F7686091F2725AF650D7CB4AB97613CB9638mp.png"style="width: auto; height:240px;margin-top: 70px;margin-left: 25px;"></div>
    <div style="font-size: 20px;margin-top: 18px; text-align: center;">HONOR MAGIC <span style="font-weight: 300;">6</span> PRO</div>
      <div style="height: 20px;"></div>
    <div style="text-align: center;margin-top: 10px;">
      <el-button round style="background-color: black; color: white;width: 30px;margin-left: -2px;">购买</el-button>
      <el-button round style="width: 30px;margin-left: 5px;">收藏</el-button>
    </div>
    </el-card>
</el-col>
  <el-col :span="2"></el-col>
</el-row>
<el-row :gutter="20" style="margin-top: 20px;">
  <el-col :span="2"></el-col>
  <el-col :span="5">
    <el-card :body-style="{ padding: '0px' }" :class="{'dark-hover': isDark}" class="Pbox-card2" shadow="hover" >
    <div class="Picture4" style="margin-top: -40px;"><img src="https://hshop.honorfile.com/pimages//product/6936520836666/800_800_5B87257C94FA792CFC673B27DC5AFD9DAF18BC7594A963D7mp.png"style="width: auto; height:240px;margin-top: 70px;margin-left: 25px;"></div>
    <div style="font-size: 20px;margin-top: 18px; text-align: center;">HONOR MAGIC <span style="font-weight: 300;">6</span></div>
      <div style="height: 20px;"></div>
    <div style="text-align: center;margin-top: 10px;">
      <el-button round style="background-color: black; color: white;width: 30px;margin-left: -2px;">购买</el-button>
      <el-button round style="width: 30px;margin-left: 5px;">收藏</el-button>
    </div>
    </el-card>
  </el-col>
  <el-col :span="5">
    <el-card :body-style="{ padding: '0px' }" :class="{'dark-hover': isDark}" class="Pbox-card2" shadow="hover" >
    <div class="Picture4" style="margin-top: -40px;"><img src="https://hshop.honorfile.com/pimages//product/6936520834440/800_800_079A68FA1B328C45A8C583C56AB197D80EADFF0594202F91mp.png"style="width: auto; height:240px;margin-top: 70px;margin-left: 25px;"></div>
    <div style="font-size: 20px;margin-top: 18px; text-align: center;">HONOR <span style="font-weight: 300;">100</span> PRO</div>
      <div style="height: 20px;"></div>
    <div style="text-align: center;margin-top: 10px;">
      <el-button round style="background-color: black; color: white;width: 30px;margin-left: -2px;">购买</el-button>
      <el-button round style="width: 30px;margin-left: 5px;">收藏</el-button>
    </div>
    </el-card>
</el-col>
<el-col :span="5">
  <el-card :body-style="{ padding: '0px' }" :class="{'dark-hover': isDark}" class="Pbox-card2" shadow="hover" >
    <div class="Picture4" style="margin-top: -40px;"><img src="https://hshop.honorfile.com/pimages//product/6936520833887/800_800_629F3196D9996D3F1BD6666DDCFE0A5C55FC9A7DECA19804mp.png"style="width: auto; height:240px;margin-top: 70px;margin-left: 25px;"></div>
    <div style="font-size: 20px;margin-top: 18px; text-align: center;">HONOR X <span style="font-weight: 300;">50</span> GT</div>
      <div style="height: 20px;"></div>
    <div style="text-align: center;margin-top: 10px;">
      <el-button round style="background-color: black; color: white;width: 30px;margin-left: -2px;">购买</el-button>
      <el-button round style="width: 30px;margin-left: 5px;">收藏</el-button>
    </div>
    </el-card>
</el-col>
<el-col :span="5">
  <el-card :body-style="{ padding: '0px' }" :class="{'dark-hover': isDark}" class="Pbox-card2" shadow="hover" >
    <div class="Picture4" style="margin-top: -40px;"><img src="https://hshop.honorfile.com/pimages//product/6936520822478/800_800_3D16D7E20E2F8C0FD0BC02FC6F3E52E33342897EF78B039Cmp.png"style="width: auto; height:240px;margin-top: 70px;margin-left: 25px;"></div>
    <div style="font-size: 20px;margin-top: 18px; text-align: center;">HONOR MAGIC <span style="font-weight: 300;">5</span> 至臻版</div>
      <div style="height: 20px;"></div>
    <div style="text-align: center;margin-top: 10px;">
      <el-button round style="background-color: black; color: white;width: 30px;margin-left: -2px;">购买</el-button>
      <el-button round style="width: 30px;margin-left: 5px;">收藏</el-button>
    </div>
    </el-card>
</el-col>
  <el-col :span="2"></el-col>
</el-row>   
    </el-col>
  </div>
</div>
  </el-row>

  </template>
  
  <style scoped>
 .picture img {
        max-width:100%; 
        max-height: 100%; 
       object-fit: cover;
    }

.Picture2 img{
  max-width:550px; 
  max-height: 550px; 
  object-fit: cover;
}

.Picture4 img{
  margin-top: 40px;
  max-width:300px; 
  max-height: 300px; 
  object-fit: cover;
}
.Pbox-card img{
  max-width: 200px;
  max-height: 200px;
  object-fit: cover;
}
.dark .Pbox-card{
  background-color: rgb(52, 50, 50);
}
.Pbox-card{
  background-color: rgb(233, 233, 233);
  width: 96vw;
  height: 320px;
  
}
.Pshow{
  height: 840px;
  width: 100vw;
  background-color: rgb(222, 222, 222);
}
.dark .Pshow{
  background-color: rgba(76, 13, 1, 0.337);
}

.P-box1{
  margin-left: 2%; margin-right: 2%;margin-top: 10px;

}
.Picture3 img{
  margin-top: 40px;
  max-width:300px; 
  max-height: 300px; 
  object-fit: cover;
}
.Pbox-card1{
  transition: box-shadow 0.3s ease-in-out;
}
.dark-hover.Pbox-card1:hover {
  box-shadow: 0 0 8px 2px rgba(205, 205, 205, 0.6);
}
.Pbox-card1:hover{
  box-shadow: 0 0 8px 2px rgba(151, 148, 148, 0.6);
  
}
.Logo-text{
  height: 400px;
  display: flex; /* 使用 Flexbox 布局 */
  justify-content: center; /* 在主轴上水平居中 */
  align-items: center; /* 在交叉轴上垂直居中 */
  flex-direction: column; /* 设置主轴方向为垂直方向 */
}
.Logo-text .title {
  font-family: 'YourFont', sans-serif; /* 设置字体，替换 'YourFont' 为实际字体 */
  font-size: 100px; /* 设置字体大小 */
  font-weight: bold; /* 设置字体粗细 */

}
.Logo-text .tip{
  margin-top: -100px;
  font-family: 'YourFont', sans-serif;
  font-size: 15px; /* 设置字体大小 */
}
.Pbox-card2{
  background-color: rgb(233, 233, 233);
  transition: box-shadow 0.3s ease-in-out;
  height: 400px;
}
.dark-hover.Pbox-card2:hover {
  box-shadow: 0 0 8px 2px rgba(205, 205, 205, 0.6);
}
.Pbox-card2:hover{
  box-shadow: 0 0 8px 2px rgba(151, 148, 148, 0.6);
}
.dark-hover.Pbox-card2{
  background-color: rgb(43, 43, 43);
}
.content{
  margin-top: 10px;
}
  </style>
  