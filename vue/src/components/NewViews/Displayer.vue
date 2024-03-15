<template>
  <div class="flex flex-wrap gap-4 items-center">

    <el-select
      v-model="value1"
      filterable
      placeholder="屏幕尺寸"
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
      placeholder="屏幕刷新率"
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
      placeholder="分辨率"
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
      placeholder="接口"
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
  <el-col style="height: 10px;">
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
            src="https://img10.360buyimg.com/n1/s450x450_jfs/t1/227344/31/10411/151794/6588e4cbFd354b83e/6298def98b26ac70.jpg.avif"
            class="player"
          />
          <div style="padding: 14px"  class="text-container">
            <p>HKC 27英寸2K</p>
            <div class="bottom">
              <el-button type="primary"  size="small"  style="margin-left: 16px" @click="drawer1 = true">详情</el-button>
                <el-button-group class="ml-4 ">
            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="收藏"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="StarFilled" />
            </template>
            </el-popover>

            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="加入购物车"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="ShoppingCart" />
            </template>
            </el-popover>

            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="购买"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="Money" />
            </template>
            </el-popover>

          </el-button-group>

              <el-drawer v-model="drawer1" title="I am the title" :with-header="false"> 
                      <p>170Hz高清FastIPS屏游戏屏幕 ￥1049</p>
                      <p>1ms响应家用电竞外接笔记本电脑显示器 IG27Q</p>
                      <img src="../../../picture/显1.png" class="drawer-image"/>
                      <p></p>
                      <img src="../../../picture/显2.png" class="drawer-image"/>
                      <p></p>
                      <img src="../../../picture/显3.png" class="drawer-image"/>
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
            src="https://img14.360buyimg.com/n1/s450x450_jfs/t1/216543/19/28711/28877/6443fb0cF1f5a4559/e16e683a0401b0ae.jpg.avif"
            class="player"
          />
          <div style="padding: 14px"  class="text-container">
            <p>小米Redmi</p>
            <div class="bottom">
              <el-button type="primary"  size="small"  style="margin-left: 16px" @click="drawer2 = true">详情</el-button>
                <el-button-group class="ml-4 ">
            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="收藏"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="StarFilled" />
            </template>
            </el-popover>

            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="加入购物车"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="ShoppingCart" />
            </template>
            </el-popover>

            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="购买"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="Money" />
            </template>
            </el-popover>

          </el-button-group>

              <el-drawer v-model="drawer2" title="I am the title" :with-header="false"> 
                      <p>21.45英寸显示器A22 75Hz 8Bit色深 ￥379</p>
                      <p>全高清微边框广视角低蓝光 电脑办公显示器显示屏</p>
                      <img src="../../../picture/显4.png" class="drawer-image"/>
                      <p></p>
                      <img src="../../../picture/显5.png" class="drawer-image"/>
                      <p></p>
                      <img src="../../../picture/显6.png" class="drawer-image"/>
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
            src="https://img14.360buyimg.com/n1/s450x450_jfs/t1/167413/34/41872/103474/65deb20fF5233bd8a/a7e3cc2a15806e58.jpg.avif"
            class="player"
          />
          <div style="padding: 14px"  class="text-container">
            <p>SANC 24.5英寸180Hz</p>
            <div class="bottom">
              <el-button type="primary"  size="small"  style="margin-left: 16px" @click="drawer3 = true">详情</el-button>
                <el-button-group class="ml-4 ">
            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="收藏"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="StarFilled" />
            </template>
            </el-popover>

            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="加入购物车"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="ShoppingCart" />
            </template>
            </el-popover>

            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="购买"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="Money" />
            </template>
            </el-popover>

          </el-button-group>

              <el-drawer v-model="drawer3" title="I am the title" :with-header="false"> 
                      <p>Fast IPS电竞屏1ms 广色域130%sRGB 低蓝光 ￥699</p>
                      <p>游戏电竞电脑显示器屏幕 N50Pro 4代</p>
                      <img src="../../../picture/显7.png" class="drawer-image"/>
                      <p></p>
                      <img src="../../../picture/显8.png" class="drawer-image"/>
                      <p></p>
                      <img src="../../../picture/显9.png" class="drawer-image"/>
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
            src="https://img14.360buyimg.com/n1/s450x450_jfs/t1/173754/20/5894/194240/608120f0Eab6de83e/acc7375a2c4c3d6d.jpg.avif"
            class="player"
          />
          <div style="padding: 14px"  class="text-container">
            <p>AOC 27英寸 2K</p>
            <div class="bottom">
              <el-button type="primary"  size="small"  style="margin-left: 16px" @click="drawer4= true">详情</el-button>
                <el-button-group class="ml-4 ">
            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="收藏"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="StarFilled" />
            </template>
            </el-popover>

            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="加入购物车"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="ShoppingCart" />
            </template>
            </el-popover>

            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="购买"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="Money" />
            </template>
            </el-popover>

          </el-button-group>

              <el-drawer v-model="drawer4" title="I am the title" :with-header="false"> 
                      <p>HDR400 IPS 原生180Hz 1ms 10Bit  ￥1699</p>
                      <p>满血小金刚MAX 旋转升降 游戏电竞显示器 Q27G2S/D</p>
                      <img src="../../../picture/显10.png" class="drawer-image"/>
                      <p></p>
                      <img src="../../../picture/显11.png" class="drawer-image"/>
                      <p></p>
                      <img src="../../../picture/显12.png" class="drawer-image"/>
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

const visible = ref(false)

import {
  ShoppingCart,
  Money,
  StarFilled,
} from '@element-plus/icons-vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')

const options1 = [
  {
    value1: '24英寸',
    label1: '24英寸',
  },
  {
    value1: '27英寸',
    label1: '27英寸',
  },
]

const options2 = [
  {
    value2: '120HZ',
    label2: '120HZ',
  },
  {
    value2: '144HZ',
    label2: '144HZ',
  },
  {
    value2: '180HZ',
    label2: '180HZ',
  },
  {
    value2: '240HZ',
    label2: '240HZ',
  },
]

const options3 = [
  {
    value3: '1920*1080',
    label3: '1920*1080',
  },
  {
    value3: '3840*2160',
    label3: '3840*2160',
  },
  {
    value3: '5120*1440',
    label3: '5120*1440',
  },
  {
    value3: '5120*2160',
    label3: '5120*2160',
  },
]

const options4 = [
  {
    value4: 'HDMI',
    label4: 'HDMI',
  },
  {
    value4: 'DP',
    label4: 'DP',
  },
  {
    value4: 'type-c',
    label4: 'type-c',
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
  
  .player {
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
