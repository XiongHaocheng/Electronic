<template>
    <el-row :gutter="0" style="height: 900px">
    <el-col :span="4">
        
    </el-col>
    <el-col :span="16">
        <el-carousel height="auto" autoplay>
     
      <el-carousel-item style="height: 650px">
        <div class="picture"><img src="../../../picture/屏幕截图 2024-02-28 153523.png"></div>
        
      </el-carousel-item>
      <el-carousel-item style="height: 650px">
        <div class="picture"><img src="../../../picture/屏幕截图 2024-02-28 153523.png"></div>
        
      </el-carousel-item>
    </el-carousel>
    </el-col>
    <el-col :span="4">

    </el-col>
  </el-row>
    
  </template>
  
  <style scoped>
 .picture img {
        max-width:100%; 
        max-height: 100%; 
       object-fit: cover;
    }

  .el-row {
  margin-bottom: 0px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}


  </style>
  