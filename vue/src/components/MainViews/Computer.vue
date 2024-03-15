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
        <div class="picture"><img src="../../../picture/computer1.png"></div>
        
      </el-carousel-item>
      <el-carousel-item style="height: 500px">
        <div class="picture"><img src="../../../picture/computer2.png"></div>
        
      </el-carousel-item>
      <el-carousel-item style="height: 500px">
        <div class="picture"><img src="../../../picture/computer3.png"></div>
        
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
      <div class="Picture3" style="margin-top: -60px;"><img src="../../../picture/computer4.jpg"></div>
      
      <el-button round style="background-color: black; color: white;width: 30px;margin-left: 45px;margin-top: -35px;">购买</el-button>
      <el-button round style="width: 30px;margin-left: 5px;margin-top: -35px;">收藏</el-button>
    </el-col>
    <el-col :span="7" :offset="2" >
        <div class="content">【140W桌面级性能】</div>
        <div class="content">i9-14900HX处理器</div>
        <div class="content">24核心32线程</div>
        <div class="content">5.8GHz理论单核睿频</div>
        <div class="content">【175W 满功耗】</div>
        <div class="content">NVIDIA GeForce</div>
        <div class="content">RTXTM 4090 16GB</div>
        <div class="content">【250W双满功耗性能释放】</div>
        <div class="content">霜刃UItra散热系统</div>
    </el-col>
    <el-col :span="7">
      <div class="content">【专业超竞屏】</div>
      <div class="content">DCI-P3广色域</div>
        <div class="content">240Hz超高刷新率</div>
        <div class="content">2560x1600分辨率</div>
        <div class="content">3ms响应时间</div>
        <div style="font-size: 33px;margin-top: 30px;margin-left: 50px;">联想拯救者Y9000P</div>
        <div style="font-size: 33px;margin-top: 30px;margin-left: 100px;margin-top: 10px;">2024至尊版</div>
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
      <div class="Picture2"><img src="../../../picture/computer5.png"></div>
    </el-col>
    <el-col :span="6">
      <div style="font-size: 20px;margin-top: 20px; font-weight: 700;">联想(Lenovo)拯救者Y9000X 2024</div>
      <div style="font-size: 18px;margin-top: 20px; font-weight: 700;">关于性能的一切想象</div>
      <div class="content">【GEFORCE RTXTM 4060】</div>
      <div class="content">NVIDIA GeForce RTXTM 4060采用全新Ada L ovelace架构</div>
      <div class="content">8GB GDDR6大显存，支持Dynamic Boost 2.0</div>
      <div class="content">支持实时光线追踪，模拟真实光线路径，游戏体验更好</div>
      <div class="content">【130W满性能】</div>
      <div class="content">支持Dynamic Boost</div>
      <div class="content">【RT Core】</div>
      <div class="content">光线追踪模拟真实光线路径</div>
      <div class="content">【3072】</div>
      <div class="content">CUDA流处理器</div>
      
    </el-col>
    <el-col :span="6" style="margin-left: 20px;margin-top: -8px;">
      <div style="height: 20px;"></div>
      <div class="content">【8GB】</div>
      <div class="content">128bit GDDR6显存</div>
      <div class="content">【Tensor Core】</div>
      <div class="content">强大的Al性能</div>
      <div style="height: 10px;"></div>
      <div class="content" style="font-weight: 700;">RTX AI大算力</div>
      <div class="content">至高可达686 TOPS</div>
      <div class="content">GeForce RTX 40系列笔记本电脑GPU</div>
      <div class="content">本地AI算力至高可达686 TOPS</div>
      <div class="content">搭载专用的Al Tensor Core</div>
      <div class="content">可为游戏、创作、日常工作等领域的AI提供强大性能和革新功能。</div>
      <div style="height: 10px;"></div>
      <div class="content" style="font-weight: 700;">一步式电源键指纹识别</div>
      <div class="content">关机状态下，一按实现开机十解锁</div>
      <div class="content">睡眠状态下，一触实现唤醒+解锁</div>

    </el-col>
  </el-row>
  <el-row>
<div class="P-box1" style="margin-top: -10px;margin-bottom: 10px;"> 
<div :class="{ 'dark': isDark }"> 
    <el-col :span="24">
      <el-card :body-style="{ padding: '0px' }" class="Pbox-card" shadow="always">

      <el-row>
    <el-col :span="14" :offset="2">
      <div style="font-size: 45px;margin-top: 50px;">联想(Lenovo)拯救者Y9000K 2024 </div>
      <div style="font-size: 13px;">第14代智能英特尔®酷睿™ i9-14900HX</div>
      <div style="font-size: 13px;">Windows 11 家庭中文版/16英寸/64G（32X2）/2T（2X1） SSD/RTX™ 4090 16G独显/碳晶灰</div>
      <div style="height: 70px;"></div>
            <el-button round style="background-color: black; color: white;">购买</el-button>
            <el-button round style="">收藏</el-button>
    </el-col>
    <el-col :span="4">
      <div class="Picture3" ><img src="../../../picture/computer6.jpg"></div>
      
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
      <div class="Picture3" style="margin-top: -30px;"><img src="https://p1.lefile.cn/product/adminweb/2024/02/19/QykugVicXO9d8m9wQapnNGbTE-7763.jpg"></div>
    </el-col>
    <el-col :span="12" :offset='1'>
      <div style="font-size: 30px;margin-top: 30px;">联想(Lenovo)小新14 2024</div>
      <div style="height: 20px;"></div>
      <div style="font-size: 18px;font-weight: 600;">14英寸轻薄笔记本电脑</div>
      <div style="height: 10px;"></div>
      <div style="font-size: 13px;">第13代智能英特尔 ® 酷睿™ i5-13420H</div>
      <div style="font-size: 13px;">Windows 11 家庭中文版/14英寸/32G/512G SSD/集成显卡</div>
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
      <div class="Picture3" style="margin-top: -30px;"><img src="https://p3.lefile.cn/product/adminweb/2024/02/19/LlRjWOujfuVMHa8lKsUOCKBTT-7902.jpg"></div>
    </el-col>
    <el-col :span="12" :offset='1'>
      <div style="font-size: 30px;margin-top: 30px;">联想(Lenovo)小新15 2024</div>
      <div style="height: 20px;"></div>
      <div style="font-size: 18px;font-weight: 600;">15.3英寸轻薄笔记本电脑</div>
      <div style="height: 10px;"></div>
      <div style="font-size: 13px;">第13代智能英特尔 ® 酷睿™ i5-13420H</div>
      <div style="font-size: 13px;">Windows 11 家庭中文版/15.3英寸/32G/512G SSD/集成显卡</div>
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
<p class="title">COMPUTERS</p>
<p class="tip">Newly Launched Flagship Device</p>
</div>
</el-col>
</el-row>
<el-row :gutter="20" style="margin-top: 80px;">
  <el-col :span="2"></el-col>
  <el-col :span="5">
    <el-card :body-style="{ padding: '0px' }" :class="{'dark-hover': isDark}" class="Pbox-card2" shadow="hover" >
    <div class="Picture4" style="margin-top: -40px;"><img src="../../../picture/computer7.jpg"></div>
    <div style="font-size: 20px;margin-top: -10px; text-align: center;">联想(Lenovo)小新Pro14</div>
      <div style="height: 20px;"></div>
    <div style="text-align: center;margin-top: 10px;">
      <el-button round style="background-color: black; color: white;width: 30px;margin-left: -2px;">购买</el-button>
      <el-button round style="width: 30px;margin-left: 5px;">收藏</el-button>
    </div>
    </el-card>
  </el-col>
  <el-col :span="5">
    <el-card :body-style="{ padding: '0px' }" :class="{'dark-hover': isDark}" class="Pbox-card2" shadow="hover" >
    <div class="Picture4" style="margin-top: -40px;"><img src="../../../picture/computer8.jpg"></div>
    <div style="font-size: 20px;margin-top: -10px; text-align: center;">联想小新16</div>
      <div style="height: 20px;"></div>
    <div style="text-align: center;margin-top: 10px;">
      <el-button round style="background-color: black; color: white;width: 30px;margin-left: -2px;">购买</el-button>
      <el-button round style="width: 30px;margin-left: 5px;">收藏</el-button>
    </div>
    </el-card>
</el-col>
<el-col :span="5">
  <el-card :body-style="{ padding: '0px' }" :class="{'dark-hover': isDark}" class="Pbox-card2" shadow="hover" >
    <div class="Picture4" style="margin-top: -40px;"><img src="../../../picture/computer9.jpg"></div>
    <div style="font-size: 20px;margin-top: -10px; text-align: center;">联想(Lenovo)拯救者R7000</div>
      <div style="height: 20px;"></div>
    <div style="text-align: center;margin-top: 10px;">
      <el-button round style="background-color: black; color: white;width: 30px;margin-left: -2px;">购买</el-button>
      <el-button round style="width: 30px;margin-left: 5px;">收藏</el-button>
    </div>
    </el-card>
</el-col>
<el-col :span="5">
  <el-card :body-style="{ padding: '0px' }" :class="{'dark-hover': isDark}" class="Pbox-card2" shadow="hover" >
    <div class="Picture4" style="margin-top: -40px;"><img src="../../../picture/computer10.jpg"style="width: auto; height:240px;margin-top: 70px;margin-left: 25px;"></div>
    <div style="font-size: 20px;margin-top: 18px; text-align: center;">联想(Lenovo)拯救者R9000P</div>
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
    <div class="Picture4" style="margin-top: -40px;"><img src="../../../picture/computer11.jpg"style="width: auto; height:240px;margin-top: 70px;margin-left: 25px;"></div>
    <div style="font-size: 20px;margin-top: 18px; text-align: center;">ThinkPad X1 Carbon AI 2024</div>
      <div style="height: 20px;"></div>
    <div style="text-align: center;margin-top: 10px;">
      <el-button round style="background-color: black; color: white;width: 30px;margin-left: -2px;">购买</el-button>
      <el-button round style="width: 30px;margin-left: 5px;">收藏</el-button>
    </div>
    </el-card>
  </el-col>
  <el-col :span="5">
    <el-card :body-style="{ padding: '0px' }" :class="{'dark-hover': isDark}" class="Pbox-card2" shadow="hover" >
    <div class="Picture4" style="margin-top: -40px;"><img src="../../../picture/computer12.jpg"style="width: auto; height:240px;margin-top: 70px;margin-left: 25px;"></div>
    <div style="font-size: 20px;margin-top: 18px; text-align: center;">ThinkBook 16 2024</div>
      <div style="height: 20px;"></div>
    <div style="text-align: center;margin-top: 10px;">
      <el-button round style="background-color: black; color: white;width: 30px;margin-left: -2px;">购买</el-button>
      <el-button round style="width: 30px;margin-left: 5px;">收藏</el-button>
    </div>
    </el-card>
</el-col>
<el-col :span="5">
  <el-card :body-style="{ padding: '0px' }" :class="{'dark-hover': isDark}" class="Pbox-card2" shadow="hover" >
    <div class="Picture4" style="margin-top: -40px;"><img src="../../../picture/computer13.jpg"style="width: auto; height:240px;margin-top: 70px;margin-left: 25px;"></div>
    <div style="font-size: 20px;margin-top: 18px; text-align: center;">ThinkBook 14+</div>
      <div style="height: 20px;"></div>
    <div style="text-align: center;margin-top: 10px;">
      <el-button round style="background-color: black; color: white;width: 30px;margin-left: -2px;">购买</el-button>
      <el-button round style="width: 30px;margin-left: 5px;">收藏</el-button>
    </div>
    </el-card>
</el-col>
<el-col :span="5">
  <el-card :body-style="{ padding: '0px' }" :class="{'dark-hover': isDark}" class="Pbox-card2" shadow="hover" >
    <div class="Picture4" style="margin-top: -40px;"><img src="../../../picture/computer14.jpg"style="width: auto; height:240px;margin-top: 70px;margin-left: 25px;"></div>
    <div style="font-size: 20px;margin-top: 18px; text-align: center;">ThinkBook 16p</div>
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
  width:600px; 
  height: 400px; 
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
  