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
      v-model="value4"
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
            src="https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-wireless-gaming-mouse/pro-wireless-carbon-gallery-3.png?v=1"
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
                      <p>无线游戏鼠标电竞狗屁王二代 【￥919】</p>
                      <p>人体工学无线双模机械轻量化63g GPW2代</p>
                      <p>[规格]</p>
                      <p>高: 125 毫米</p>
                      <p>宽: 63.5 毫米</p>
                      <p>深: 40 毫米</p>
                      <p>重量: 80 克</p>
                      <p>线缆长度: 1.8 米</p>
                      <p>[技术规格]</p>
                      <P>追踪性能:</P>
                      <P>传感器: HERO 25K</P>
                      <P>分辨率: 100 – 25,600 dpi</P>
                      <P>零平滑/加速/滤波</P>
                      <P>最大加速: >40 G 1基于罗技 G240 游戏鼠标垫</P>
                      <P>最大速度: >400 IPS 2基于罗技 G240 游戏鼠标垫</P>
                      <P>响应性:</P>
                      <P>USB 数据格式: 16 位/轴</P>
                      <P>USB 报告速率: 1000Hz（1 毫秒）</P>
                      <P>无线技术: LIGHTSPEED 无线</P>
                      <P>微处理器: 32 位 ARM</P>
                      <P>耐用性:</P>
                      <P>PTFE 脚垫: >250 千米 3基于罗技 G240 游戏鼠标垫</P>
                      <P>电池续航:</P>
                      <P>默认灯光: 48 小时</P>
                      <P>关闭灯光: 60 小时</P>
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
            src="https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g502-hero-kda/g502-hero-kda-gallery-01.png?v=1"
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
                      <p>熊猫特典版SE电竞游戏有线鼠标 【￥269】</p>
                      <p> G502se熊猫版+中国蓝贴纸</p>
                      <p>[规格]</p>
                      <p>高: 290 毫米</p>
                      <p>宽: 75 毫米</p>
                      <p>深: 40 毫米</p>
                      <p>重量: 121 克（仅鼠标）</p>
                      <p>可选额外配重: 最多 18 克（5 x 3.6 克）</p>
                      <P>线缆长度: 约 2.1 米</P>
                      <p>[技术规格]</p>
                      <P>追踪性能:</P>
                      <P>传感器: HERO</P>
                      <P>分辨率: 100 – 25,600 dpi</P>
                      <P>零平滑/加速/滤波</P>
                      <P>最大加速: >40 G 1基于罗技 G240 游戏鼠标垫</P>
                      <P>最大速度: >400 IPS 2基于罗技 G240 游戏鼠标垫</P>
                      <P>响应性:</P>
                      <P>USB 数据格式: 16 位/轴</P>
                      <P>USB 报告速率: 1000Hz（1 毫秒）</P>
                      <P>无线技术: LIGHTSPEED 无线</P>
                      <P>微处理器: 32 位 ARM</P>
                      <P>耐用性:</P>
                      <P>PTFE 脚垫: >250 千米 3基于罗技 G240 游戏鼠标垫</P>
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
            src="https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g502x-corded/gallery/g502x-corded-gallery-2-black.png?v=1"
            class="mouse"
          />
          <div style="padding: 14px"  class="text-container">
            <p>罗技（G）G502 X</p>
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
                      <p>LIGHTSPEED无线游戏鼠标 g502进阶无线版  【￥549】</p>
                      <p>全新光学-机械混合微动 HERO引擎 电竞鼠标 黑色</p>
                      <p>[规格]</p>
                      <P>89 克</P>
                      <P>5 个板载内存配置文件</P>
                      <P>低摩擦 PTFE 脚垫</P>
                      <p>高: 131.4 毫米</p>
                      <p>宽: 41.1 毫米</p>
                      <p>深: 79.2 毫米</p>
                      <p>[技术规格]</p>
                      <p>13 个可编程控键</p>
                      <P>追踪性能:</P>
                      <P>零平滑/加速/滤波</P>
                      <P>新一代HERO 2传感器</P>
                      <P>分辨率: 100 – 25,600 dpi</P>
                      <P>最大加速: >40G2</P>
                      <P>最大速度: >400 IPS 2基于罗技 G240 游戏鼠标垫</P>
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
            src="https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/lol-pro-wireless-mouse/gallery/league-of-legends-pro-wireless-gaming-mouse-gallery-1.png?v=1"
            class="mouse"
          />
          <div style="padding: 14px"  class="text-container">
            <p>罗技（G） PRO X </p>
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
                      <p>Superlight-《英雄联盟》联名款 【￥899】</p>
                      <p>狗2无线鼠标 PROX二代特别版 无光</p>
                      <p>[规格]</p>
                      <p>高: 125 毫米</p>
                      <p>宽: 63.5 毫米</p>
                      <p>深: 40 毫米</p>
                      <p>重量: 80 克</p>
                      <p>线缆长度: 1.8 米</p>
                      <p>[技术规格]</p>
                      <P>追踪性能:</P>
                      <P>传感器: HERO 25K</P>
                      <P>分辨率: 100 – 25,600 dpi</P>
                      <P>零平滑/加速/滤波</P>
                      <P>最大加速: >40 G 1基于罗技 G240 游戏鼠标垫</P>
                      <P>最大速度: >400 IPS 2基于罗技 G240 游戏鼠标垫</P>
                      <P>响应性:</P>
                      <P>USB 数据格式: 16 位/轴</P>
                      <P>USB 报告速率: 1000Hz（1 毫秒）</P>
                      <P>无线技术: LIGHTSPEED 无线</P>
                      <P>微处理器: 32 位 ARM</P>
                      <P>耐用性:</P>
                      <P>PTFE 脚垫: >250 千米 3基于罗技 G240 游戏鼠标垫</P>
                      <P>电池续航:</P>
                      <P>默认灯光: 48 小时</P>
                      <P>关闭灯光: 60 小时</P>
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
            src="https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-superlight-2/gallery-1-pro-x-superlight-2-gaming-mouse-magenta.png?v=1"
            class="mouse"
          />
          <div style="padding: 14px"  class="text-container">
            <p>罗技 G PRO X SUPERLIGHT 2</p>
            <div class="bottom">
              <el-button type="primary"  size="small"  style="margin-left: 16px" @click="drawer5 = true">详情</el-button>
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

              <el-drawer  v-model="drawer5" title="I am the title" :with-header="false"> 
                      <p>罗技（G）PRO X SUPERLIGHT无线游戏鼠标 【￥699】</p>
                      <p>轻量化63g 电竞鼠标 职业选手推荐 猛男粉 粉色</p>
                      <p>[规格]</p>
                      <p>高: 125.0 毫米</p>
                      <p>宽: 63.5 毫米</p>
                      <p>深: 40.0 毫米</p>
                      <p>重量: 60 克</p>
                      <p>[技术规格]</p>
                      <P>LIGHTSPEED 无线技术</P>
                      <P>板载内存 1高级功能需要安装罗技 G HUB 软件</P>
                      <P>零添加 PTFE 脚垫</P>
                      <P>5 颗按键</P>
                      <P>追踪性能：</P>
                      <P>传感器: 新一代HERO 2传感器</P>
                      <P>分辨率: 100 - 32,000 dpi</P>
                      <P>零平滑/加速/滤波</P>
                      <P>最大加速: >40 G 3基于罗技 G240 游戏鼠标垫</P>
                      <P>最大速度: >500 ips 4基于罗技 G240 游戏鼠标垫</P>
                      <P>响应性:</P>
                      <P>最大报告速率: 4000Hz (0.25 ms)</P>
                      <P>微处理器: 32 位 ARM</P>
                      <P>连续运动: 95 小时</P>
                      <img src="../../../picture/鼠标13.png" class="drawer-image"/>
                      <p></p>
                      <img src="../../../picture/鼠标15.png" class="drawer-image"/>
                      <p></p>
                      <img src="../../../picture/鼠标16.png" class="drawer-image"/>
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
            src="https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g502x-plus/gallery/g502x-plus-gallery-1-black.png?v=1"
            class="mouse"
          />
          <div style="padding: 14px"  class="text-container">
            <p>罗技（G） G502 X PLUS</p>
            <div class="bottom">
              <el-button type="primary"  size="small"  style="margin-left: 16px" @click="drawer6 = true">详情</el-button>
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

              <el-drawer v-model="drawer6" title="I am the title" :with-header="false"> 
                      <p>罗技（G）G502 X PLUS LIGHTSPEED 【￥899】</p>
                      <p> 无线鼠标  RGB鼠标 全新流光灯效 Hero25K传感器 黑色</p>
                      <p>[主要规格]</p>
                      <P>USB-C 充电</P>
                      <P>106 克</P>
                      <P>低摩擦 PTFE 脚垫</P>
                      <P>[物理规格]</P>
                      <p>高: 131.4 毫米</p>
                      <p>宽: 41.1 毫米</p>
                      <p>深: 79.2 毫米</p>
                      <p>重量: 106 克</p>
                      <p>[技术规格]</p>
                      <P>线缆长度: 约 2.1 米</P>
                      <p>[技术规格]</p>
                      <P>LIGHTSPEED 无线技术</P>
                      <P>多达 5 个板载内存配置文件</P>
                      <P>PTFE 脚垫</P>
                      <P>13 个可编程控键</P>
                      <P>8 区 RGB 炫光</P>
                      <P>USB-C 充电端口</P>
                      <P>电池续航 2电池寿命依用户及计算条件而异</P>
                      <P>连续运动 130 小时（RGB 开启时为 37 小时）</P>
                      <P>[追踪性能]</P>
                      <P>传感器: 新一代HERO 2传感器</P>
                      <P>分辨率: 100 – 25,600 dpi</P>
                      <P>最大加速: >40G2</P>
                      <P>最大速度: >400 IPS 3基于罗技 G240 游戏鼠标垫</P>
                      <P>零平滑/加速/滤波</P>
                      <img src="../../../picture/鼠标17.png" class="drawer-image"/>
                      <p></p>
                      <img src="../../../picture/鼠标18.png" class="drawer-image"/>
                      <p></p>
                      <img src="../../../picture/鼠标19.png" class="drawer-image"/>
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
            src="https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/mouse/g705-wireless-mouse/gallery/g705-gallery-1.png?v=1"
            class="mouse"
          />
          <div style="padding: 14px"  class="text-container">
            <p>罗技（G）G705 </p>
            <div class="bottom">
              <el-button type="primary"  size="small"  style="margin-left: 16px" @click="drawer7 = true">详情</el-button>
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

              <el-drawer v-model="drawer7" title="I am the title" :with-header="false"> 
                      <p>罗技（G） G705极光系列无线蓝牙游戏鼠标  【￥439】</p>
                      <p>电竞机械充电双模 【G705】极光色</p>
                      <p>[物理规格]</p>
                      <P>高: 39.4 毫米</P>
                      <P>宽: 68.1 毫米</P>
                      <P>深: 105.8 毫米</P>
                      <p>高: 131.4 毫米</p>
                      <p>宽: 41.1 毫米</p>
                      <p>深: 79.2 毫米</p>
                      <p>重量: 85 克（仅鼠标）</p>
                      <p>[89 克]</p>
                      <P>轻量化设计</P>
                      <P>[40 小时游戏时长]</P>
                      <P>（RGB 灯光开启）</P>
                      <P>[六个按钮]</P>
                      <P>完全可编程</P>
                      <P>[技术规格]</P>
                      <P>LIGHTSYNC RGB 灯效（三区）</P>
                      <P>六个可编程按键</P>\
                      <P>分辨率: 100 – 8,200 dpi</P>
                      <P>40 小时电量（开启炫光）</P>
                      <img src="../../../picture/鼠标20.png" class="drawer-image"/>
                      <p></p>
                      <img src="../../../picture/鼠标21.png" class="drawer-image"/>
                      <p></p>
                      <img src="../../../picture/鼠标22.png" class="drawer-image"/>
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
            src="https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g903/g903-gallery-1.png?v=1"
            class="mouse"
          />
          <div style="padding: 14px"  class="text-container">
            <p>罗技（G）G903 </p>
            <div class="bottom">
              <el-button type="primary"  size="small"  style="margin-left: 16px" @click="drawer8 = true">详情</el-button>
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

              <el-drawer v-model="drawer8" title="I am the title" :with-header="false"> 
                      <p>罗技（G） G903HERO无线鼠标 【￥699】</p>
                      <p>编程宏 RGB 【鼠标+GHUB套装】G903 HERO</p>
                      <p>[规格]</p>
                      <p>长: 130 毫米</p>
                      <p>宽: 67 毫米</p>
                      <p>高: 40 毫米</p>
                      <p>重量: 110克</p>
                      <P>可选额外配重: 10 克</P>
                      <p>线缆长度: 1.8 米</p>
                      <p>[其他特色]</p>
                      <P>快速滚轮</P>
                      <P>兼容 POWERPLAY</P>
                      <P>LIGHTSYNC RGB</P>
                      <P>左右手通用设计</P>
                      <P>可拆卸侧键</P>
                      <P>7-11 个可编程按键</P>
                      <P>机械按键张力系统</P>
                      <P>[追踪性能]</P>
                      <P>传感器: 新一代HERO 2传感器</P>
                      <P>分辨率: 100-25,600 dpi</P>
                      <P>最大加速: >40 G</P>
                      <P>最大速度: >400 IPS</P>
                      <P>[响应性]</P>
                      <P>USB 数据格式: 16 位/轴</P>
                      <P>USB 报告速率: 1000Hz（1 毫秒）</P>
                      <P>无线报告速率: 1000Hz（1 毫秒）</P>
                      <P>无线技术: LIGHTSPEED 无线</P>
                      <P>微处理器: 32 位 ARM</P>
                      <P>[电池使用时间]</P>
                      <P>默认灯光: 最长 140 小时</P>
                      <P>关闭灯光: 最长 180 小时</P>
                      <img src="../../../picture/鼠标23.png" class="drawer-image"/>
                      <p></p>
                      <img src="../../../picture/鼠标24.png" class="drawer-image"/>
                      <p></p>
                      <img src="../../../picture/鼠标25.png" class="drawer-image"/>
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
const drawer5 = ref(false)
const drawer6 = ref(false)
const drawer7 = ref(false)
const drawer8 = ref(false)

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
