<template>
  <div class="flex flex-wrap gap-4 items-center">
    <el-select
      v-model="value1"
      filterable
      placeholder="连接方式"
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
      placeholder="鼠标尺寸"
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
      v-model="value1"
      filterable
      placeholder="拔插方式"
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
            src="https://img10.360buyimg.com/n1/jfs/t1/227013/24/12269/15103/65a8b342F08043fc7/6bc8548143147b50.jpg.avif"
            class="mouse"
          />
          <div style="padding: 14px"  class="text-container">
            <p>罗技gpw二代</p>
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

              <el-drawer  v-model="drawer1" title="I am the title" :with-header="false"> 
                      <p>无线游戏鼠标电竞狗屁王二代 ￥919</p>
                      <p>人体工学无线双模机械轻量化63g GPW2代猛男粉</p>
                      <img src="../../../picture/鼠标1.png" class="drawer-image"/>
                      <p></p>
                      <img src="../../../picture/鼠标2.png" class="drawer-image"/>
                      <p></p>
                      <img src="../../../picture/鼠标3.png" class="drawer-image"/>
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
            src="https://img11.360buyimg.com/n1/jfs/t1/26405/12/16986/222023/62a044bbE74c214a6/ed403a8e0749bd11.jpg.avif"
            class="mouse"
          />
          <div style="padding: 14px"  class="text-container">
            <p>罗技（G） G502HERO</p>
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
                      <p>熊猫特典版SE电竞游戏有线鼠标 ￥269</p>
                      <p> G502se熊猫版+中国蓝贴纸</p>
                      <img src="../../../picture/鼠标4.png" class="drawer-image"/>
                      <p></p>
                      <img src="../../../picture/鼠标5.png" class="drawer-image"/>
                      <p></p>
                      <img src="../../../picture/鼠标6.png" class="drawer-image"/>
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
            src="https://img10.360buyimg.com/n1/jfs/t1/214193/25/5270/58101/619c6417E2d6d46ae/ee5144ebc307788f.jpg.avif"
            class="mouse"
          />
          <div style="padding: 14px"  class="text-container">
            <p>雷蛇（Razer）</p>
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
                      <p>鼠标炼狱蝰蛇标准版有线游戏机械黑色 ￥107</p>
                      <p>  黑色炼狱蝰蛇标准版(6400DPI 双侧键)</p>
                      <img src="../../../picture/鼠标7.png" class="drawer-image"/>
                      <p></p>
                      <img src="../../../picture/鼠标8.png" class="drawer-image"/>
                      <p></p>
                      <img src="../../../picture/鼠标9.png" class="drawer-image"/>
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
            src="https://img11.360buyimg.com/n1/jfs/t1/41735/3/19807/18064/63562a07E887da662/85c298aa58893f87.jpg.avif"
            class="mouse"
          />
          <div style="padding: 14px"  class="text-container">
            <p>华硕天选游戏无线鼠标</p>
            <div class="bottom">
              <el-button type="primary"  size="small"  style="margin-left: 16px" @click="drawer4 = true">详情</el-button>
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
                      <p>蓝牙双模连接 轻质便携 ￥229</p>
                      <p>  12000DPI 日蚀灰 62g轻量化</p>
                      <img src="../../../picture/鼠标10.png" class="drawer-image"/>
                      <p></p>
                      <img src="../../../picture/鼠标11.png" class="drawer-image"/>
                      <p></p>
                      <img src="../../../picture/鼠标12.png" class="drawer-image"/>
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

const options1 = [
  {
    value1: '无线2.4G',
    label1: '无线2.4G',
  },
  {
    value1: '无线4K',
    label1: '无线4K',
  },
  {
    value1: '蓝牙',
    label1: '蓝牙',
  },
  {
    value1: '有线',
    label1: '有线',
  },
]

const options2 = [
  {
    value2: '小手适用型',
    label2: '小手适用型',
  },
  {
    value2: '中手适用型',
    label2: '中手适用型',
  },
  {
    value2: '大手适用型',
    label2: '大手适用型',
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
  
  .mouse {
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
