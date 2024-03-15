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
            src="https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-tkl/gallery-1-pro-x-tkl-black-lightspeed-gaming-keyboard.png.png?v=1"
            class="jan"
          />
          <div style="padding: 14px"  class="text-container">
            <p>罗技 PRO X TKL （GX-L机械轴）</p>
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
                      <p>无线机械键盘游戏蓝牙三模连接 【￥1499】</p>
                      <p>RGB灯效机械键盘电竞吃鸡键盘</p>
                      <p>[物理规格]</p>
                      <p>高: 34 毫米</p>
                      <p>宽: 米352 毫</p>
                      <p>深: 150 毫米</p>
                      <p>[技术规格]</p>
                      <P>受职业选手启发的 87 键紧凑设计</P>
                      <p>LIGHTSYNC RGB 智能炫光</p>
                      <p>板载灯光配置文件</p>
                      <P>6 英尺可拆卸充电/数据线</P>
                      <P>[无线]</P>
                      <P>电池续航（可充电）: 最长 50 小时</P>
                      <P>无线范围: 最远 10 米</P>
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
            src="https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/keyboards/g715-wireless-keyboard/gallery/g715-gallery-1.png?v=1"
            class="jan"
          />
          <div style="padding: 14px"  class="text-container">
            <p>罗技（G） G715</p>
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
                      <p>极光系列机械键盘无线蓝牙双模 【￥1199】</p>
                      <p>RGB G715 GX-Tactile（类茶轴）</p>
                      <p>[物理规格]</p>
                      <p>长: 370.6 毫米</p>
                      <p>宽: 157 毫米</p>
                      <p>高: 37.2 毫米</p>
                      <P>重量: 976 克</P>
                      <P>[30 小时游戏时长]</P>
                      <P>USB-C 充电端口，随附线缆</P>
                      <P>[87 键 TKL]</P>
                      <P>TKL 节省空间</P>
                      <P>[双色注塑 PBT]</P>
                      <P>耐用的纹理键帽</P>
                      <p>[技术规格]</p>
                      <P>87 键游戏键盘</P>
                      <p>职业级 LIGHTSPEED 无线和蓝牙连接</p>
                      <p>独立 RGB 机械键轴</p>
                      <P>双色注塑 PBT 键帽</P>
                      <P>媒体键，含音量滚轮</P>
                      <P>外壳下 16 个 LED 周边照明</P>
                      <P>可充电锂聚合物电池，30 小时的游戏时长</P>
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
            src="https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g913/g913-gallery-1.png?v=1"
            class="jan"
          />
          <div style="padding: 14px"  class="text-container">
            <p>罗技（G）G913</p>
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
                      <p>TKL无线机械键盘 无线蓝牙游戏键盘 【￥899】</p>
                      <p>三模连接 RGB背光超薄矮轴87键 GL T轴（类茶轴）</p>
                      <p>[物理规格]</p>
                      <p>长: 475 毫米</p>
                      <p>宽: 150 毫米</p>
                      <p>高: 22 毫米</p>
                      <P>重量: 1025 克</P>
                      <P>PC 线缆长度: 1.8 米</P>
                      <P>[技术规格]</P>
                      <P>疾速触发 GL 键轴:</P>
                      <P>触发键程: 1.5 毫米</P>
                      <P>触发力度: 50 克</P>
                      <P>总行程距离: 2.7 毫米</P>
                      <P>电池续航:</P>
                      <p>30 小时（亮度 100%）</p>
                      <P>板载内存:</P>
                      <p>2 个灯光配置文件</p>
                      <p>3 个 G 键宏配置文件</p>
                      <P>[其他特色]</P>
                      <P>LIGHTSPEED 无线</P>
                      <P>蓝牙™</P>
                      <P>LIGHTSYNC RGB，按键独立灯光</P>
                      <P>5 个专用 G 键</P>
                      <P>专用媒体控制和无边音量滚轮</P>
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
            src="https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-keyboard/pro-x-keyboard-gallery-1.png?v=1"
            class="jan"
          />
          <div style="padding: 14px"  class="text-container">
            <p>罗技（G）PRO X</p>
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
                      <p>游戏机械键盘GPX电竞RGB背光 【￥798】</p>
                      <p>紧凑式87键有线键盘 PRO 机械键盘 标准版 C轴 </p>
                      <p>[物理规格]</p>
                      <p>高: 34 毫米</p>
                      <p>宽: 361 毫米</p>
                      <p>深: 153 毫米</p>
                      <P>[其他特色]</P>
                      <P>受职业选手启发的 87 键紧凑设计</P>
                      <P>可自行替换的机械键轴</P>
                      <P>LIGHTSYNC RGB 智能炫光</P>
                      <P>板载灯光配置文件</P>
                      <P>1.8 米可拆卸线缆</P>
                      <P>12 个可编程 F 键</P>
                      <P>1 毫秒报告速率</P>
                      <p>[技术规格]</p>
                      <P>GX BLUE C 机械轴:</P>
                      <p>触发键程: 2 毫米</p>
                      <p>触发力度: 50 克</p>
                      <P>总行程距离: 3.7 毫米</P>
                      <P>GX BROWN T 机械轴:</P>
                      <P>触发键程: 2 毫米</P>
                      <P>触发力度: 50 克</P>
                      <P>总行程距离: 3.7 毫米</P>
                      <P>GX RED L 机械轴:</P>
                      <P>触发键程: 1.9 毫米</P>
                      <P>触发力度: 50 克</P>
                      <P>总行程距离: 4 毫米</P>
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
