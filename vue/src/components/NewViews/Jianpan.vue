<template>
  <div class="flex flex-wrap gap-4 items-center">

    <el-select
      v-model="value1"
      filterable
      placeholder="轴体类型"
      size="large"
      style="width: 240px"
    >
      <el-option
        v-for="item in options1"
        :key="item.value1"
        :label="item.label1"
        :value="item.value1"
      />
    </el-select>

    <el-select
      v-model="value2"
      filterable
      placeholder="连接方式"
      size="large"
      style="width: 240px"
    >
      <el-option
        v-for="item in options2"
        :key="item.value2"
        :label="item.label2"
        :value="item.value2"
      />
    </el-select>

    <el-select
      v-model="value3"
      filterable
      placeholder="背光灯效"
      size="large"
      style="width: 240px"
    >
      <el-option
        v-for="item in options3"
        :key="item.value3"
        :label="item.label3"
        :value="item.value3"
      />
    </el-select>

    <el-select
      v-model="value4"
      filterable
      placeholder="拔插类型"
      size="large"
      style="width: 240px"
    >
      <el-option
        v-for="item in options4"
        :key="item.value4"
        :label="item.label4"
        :value="item.value4"
      />
    </el-select>

  </div>

  <el-row :gutter="5">
  <!-- 第二行 -->
  <el-col>
    <!-- 第二行的内容放在这里 -->
  </el-col>
</el-row>

  <el-row :gutter="20" >
        <div class = "ep-row">
      <el-col 
        v-for="(o, index) in 1"
        :key="o"
        :span="6"
        :offset="index > 0 ? 1 : 0"
      >
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://img14.360buyimg.com/n1/s450x450_jfs/t1/133240/21/38411/51483/650c18b9Fc0a30acd/cb58e1b283d1321a.jpg.avif"
            class="jan"
          />
          <div style="padding: 14px"  class="text-container">
            <p>科大讯飞AI智能键盘</p>
            <div class="bottom">
                <el-button text class="button">加入购物车</el-button>
                <el-button text class="button" style="margin-left: 16px" @click="drawer1 = true">详情</el-button>
                <el-button text class="button">购买</el-button>

              <el-drawer v-model="drawer1" title="I am the title" :with-header="false"> 
                      <p>机械键盘 T8星火版红轴 ￥799</p>
                      <p>无线蓝牙 AI写作问答智能PPT 全键无冲 三模连接</p>
                      <img src="../../../picture/键盘1.png" class="drawer-image"/>
                      <p></p>
                      <img src="../../../picture/键盘2.png" class="drawer-image"/>
                      <p></p>
                      <img src="../../../picture/键盘3.png" class="drawer-image"/>
              </el-drawer>

            </div>
          </div>
        </el-card>
      </el-col>

      <el-col 
        v-for="(o, index) in 1"
        :key="o"
        :span="6"
        :offset="index > 0 ? 1 : 0"
      >
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://img13.360buyimg.com/n1/s450x450_jfs/t1/95280/35/3296/201717/5ddf705eEa541afa5/face35fe57cfc669.jpg.avif"
            class="jan"
          />
          <div style="padding: 14px"  class="text-container">
            <p>雷柏（Rapoo） V500PRO</p>
            <div class="bottom">
                <el-button text class="button">加入购物车</el-button>
                <el-button text class="button" style="margin-left: 16px" @click="drawer2 = true">详情</el-button>
                <el-button text class="button">购买</el-button>

              <el-drawer v-model="drawer2" title="I am the title" :with-header="false"> 
                      <p>有线背光机械键盘 104键全尺寸 ￥99</p>
                      <p> 全键无冲键盘 青轴</p>
                      <img src="../../../picture/键盘4.png" class="drawer-image"/>
                      <p></p>
                      <img src="../../../picture/键盘5.png" class="drawer-image"/>
                      <p></p>
                      <img src="../../../picture/键盘6.png" class="drawer-image"/>
              </el-drawer>

            </div>
          </div>
        </el-card>
      </el-col>


      <el-col 
        v-for="(o, index) in 1"
        :key="o"
        :span="6"
        :offset="index > 0 ? 1 : 0"
      >
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://img14.360buyimg.com/n1/jfs/t1/206060/20/13132/79704/617b922bEbbcd9fef/0a155fc311e7e7fd.jpg.avif"
            class="jan"
          />
          <div style="padding: 14px"  class="text-container">
            <p>前行者GX30Z</p>
            <div class="bottom">
                <el-button text class="button">加入购物车</el-button>
                <el-button text class="button" style="margin-left: 16px" @click="drawer3 = true">详情</el-button>
                <el-button text class="button">购买</el-button>

              <el-drawer v-model="drawer3" title="I am the title" :with-header="false"> 
                      <p>真机械手感游戏键盘 ￥39.9</p>
                      <p> 背光USB外接外设 黑色彩虹背光单键盘</p>
                      <img src="../../../picture/键盘7.png" class="drawer-image"/>
                      <p></p>
                      <img src="../../../picture/键盘8.png" class="drawer-image"/>
                      <p></p>
                      <img src="../../../picture/键盘9.png" class="drawer-image"/>
              </el-drawer>

            </div>
          </div>
        </el-card>
      </el-col>

      <el-col 
        v-for="(o, index) in 1"
        :key="o"
        :span="6"
        :offset="index > 0 ? 1 : 0"
      >
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://img10.360buyimg.com/n1/s450x450_jfs/t1/166058/2/5525/121028/601cae3dEcfb4482f/30bb0a7e37c4fae3.jpg.avif"
            class="jan"
          />
          <div style="padding: 14px"  class="text-container">
            <p>雷神（ThundeRobot）</p>
            <div class="bottom">
                <el-button text class="button">加入购物车</el-button>
                <el-button text class="button" style="margin-left: 16px" @click="drawer4 = true">详情</el-button>
                <el-button text class="button">购买</el-button>

              <el-drawer v-model="drawer4" title="I am the title" :with-header="false"> 
                      <p>有线游戏机械键盘KG3089R红轴 幻彩版 ￥98</p>
                      <p>电竞89键全键无冲 炫酷混光L型RGB灯带 </p>
                      <img src="../../../picture/键盘10.png" class="drawer-image"/>
                      <p></p>
                      <img src="../../../picture/键盘11.png" class="drawer-image"/>
                      <p></p>
                      <img src="../../../picture/键盘12.png" class="drawer-image"/>
              </el-drawer>

            </div>
          </div>
        </el-card>
      </el-col>
    </div>
    </el-row>



</template>

<script lang="ts" setup scoped>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')

const options1 = [
  {
    value1: '线性轴',
    label1: '线性轴',
  },
  {
    value1: '海空轴',
    label1: '海空轴',
  },
  {
    value1: '无轴体',
    label1: '无轴体',
  },
  {
    value1: '段落轴',
    label1: '段落轴',
  },
]

const options2 = [
  {
    value2: '蓝牙',
    label2: '蓝牙',
  },
  {
    value2: '星闪',
    label2: '星闪',
  },
  {
    value2: '有线',
    label2: '有线',
  },
  {
    value2: '无线',
    label2: '无线',
  },
]

const options3 = [
  {
    value3: 'RGB',
    label3: 'RGB',
  },
  {
    value3: '混光',
    label3: '混光',
  },
  {
    value3: '单光',
    label3: '单光',
  },
  {
    value3: '无光',
    label3: '无光',
  },
]

const options4 = [
  {
    value4: '全键热插拔',
    label4: '全键热插拔',
  },
  {
    value4: '部分键热插拔',
    label4: '部分键热插拔',
  },
  {
    value4: '不支持热插拔',
    label4: '不支持热插拔',
  },
]

const drawer1 = ref(false)
const drawer2 = ref(false)
const drawer3 = ref(false)
const drawer4 = ref(false)

</script>

<style scoped>

  .ep-row{
    margin-left: 15px; 
    margin-right: 15px;
  }

  .el-row {
    margin-bottom: 200px;
  }

  .el-row:last-child {
    margin-bottom: 10;
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
  
  .jan {
    width: 100%;
    display: block;
  }

  .drawer-image {
  max-width: 100%; /* 图片最大宽度为100% */
  max-height: 100%; /* 图片最大高度为100% */
  display: block; /* 确保图片作为块级元素，以便应用最大宽度和高度 */
  margin: auto; /* 居中显示图片 */
}
  

  </style>
