<template> 
  <div style="height: 15px;"></div>
  <el-row>
    <el-col :span=2></el-col>
      <div>
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>商品详情</el-breadcrumb-item>
          <el-breadcrumb-item>{{ name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
  </el-row>
  <el-divider style="margin-top: 15px;border-color: black;"></el-divider>
  <el-row>
    <el-col :span=2></el-col>
    <el-col :span=9>
            <div class="image-gallery">
          <!-- 主图展示区 -->
          <div class="main-image">
            <img :src="selectedImage" alt="Selected" />
          </div>

          <!-- 缩略图列表 -->
          <div class="thumbnails">
            <div
              class="thumbnail"
              v-for="(image, index) in images"
              :key="index"
              :class="{ 'selected': image === selectedImage }"
              @mouseover="selectImage(image, index)"
            >
              <img :src="image" alt="" />
            </div>
          </div>
        </div>
    </el-col>
    <el-col :span=11>
      <div style="height: 20px;"></div>
      <div class="title">{{ name }}</div>
      <div style="height: 10px;"></div>
      <div class="tip">{{tip}}</div>
      <div style="margin-top: 20px;">
        <el-link :underline="false" @click="centerDialogVisible = true" style="color: red;">【京彩绿色消费券】京彩绿色消费，领券至高省0元！马上参与＞</el-link>
      </div>
      <el-card style="width: 100%;border: none;background-color: rgb(240,240,240);margin-top: 15px;" shadow="never" >
        <div>
          <el-row>
            <el-col :span='2'>
              <div style="font-size: 13px; color: red;">会员价</div>
            </el-col>
            <el-col :span="6" :offset="1">
              <div style="margin-top: -10px;">
                <svg t="1710142061897" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4817" width="16" height="16"><path d="M783.6119140625001 167.56542968750006L575.0254882812499 463.25761718749993H739.4169921875v65.36689453125H547.9103515625v90.02460937500001H739.4169921875v66.18427734375001H547.9103515625v131.08710937499998H449.38144531250003V684.8333984374999H250.86464843749997v-66.18427734375001h198.516796875V528.6245117187499H250.86464843749997v-65.36689453125h169.3740234375L213.64560546874998 167.56542968750006h111.08935546875c96.53642578125 146.85029296874998 155.141015625 240.00644531250003 175.921875 279.39638671875h1.9924804687499997c7.046191406249999-16.225488281249998 26.33115234375-48.89091796875 57.786328125000004-97.9962890625L678.5711914062499 167.56542968750006h105.04072265625001z" p-id="4818" fill="#d81e06"></path></svg>
              <span style="color: #d81e06;font-size: 25px;font-weight: 700;">{{ Nprice }}</span>
              </div>
            </el-col>
            <el-col :span="5" :offset="10">
              <el-card style="width: 40px; height: 40px; background-color: rgb(240,240,240); cursor: pointer;margin-top: -13px;margin-left: 100px;" shadow="hover" @click="downPrice = true">
                <div style="font-size: 15px; margin-left: -15px; margin-top: -20px; margin-right: -15px; color: #5b96df;">降价</div>
                <div style="font-size: 15px; margin-left: -15px; margin-right: -15px; color: #5b96df;">通知</div>
              </el-card>            
              </el-col>
          </el-row>
        </div>
        <div>
          <div style="height: 10px;"></div>
          <el-row>
            <el-col :span='2'>
              <div style="font-size: 13px;">优惠</div>
            </el-col>
            <el-col :span="12" :offset="1">
              <el-button type="danger"size="small" plain>最高返10899欢乐豆</el-button>
              <el-button type="danger"size="small" plain style="margin-left: 5px;">12期不免息</el-button>
              <el-button type="danger"size="small" style="margin-left: 5px;">优惠></el-button>
            </el-col>
          </el-row>
        </div>
        <div style="height: 20px;"></div>
      </el-card>
      <div style="height: 20px;"></div>
      <div>
        <el-row>
          <el-col :span="3"><div class="label" style="margin-top: 5px;">配送至</div></el-col>
          <el-col :span="7" :offset="1"> <el-cascader :options="options" clearable  placeholder="选择您的收货地址"/></el-col>
        </el-row>
        <div style="height: 20px;"></div>
        <el-row>
          <el-col :span="3"><div class="label" style="margin-top: 5px;">操作系统</div></el-col>
          <el-col :span="7" :offset="1">
              <el-button
                :size="'small'"
                class="Ebutton"
                :class="{ 'is-active': isActive }"
                @click="toggleActive">
                Windows 11 家庭中文版
              </el-button>
          </el-col>
        </el-row>
        <div style="height: 10px;"></div>
        <el-row>
          <el-col :span="3"><div class="label" style="margin-top: 5px;">处理器</div></el-col>
          <el-col :span="9" :offset="1">
      <el-button
        size="small"
        class="Ebutton"
        :class="{ 'active': selected=== 'i9-14900HX/碳晶灰' }"
        @click="selectCPU('i9-14900HX/碳晶灰')">
        i9-14900HX/碳晶灰
      </el-button>
    </el-col>
    <el-col :span="7">
      <el-button
        size="small"
        class="Ebutton"
        :class="{ 'active': selected === 'i9-14900HX/冰魄白' }"
        @click="selectCPU('i9-14900HX/冰魄白')">
        i9-14900HX/冰魄白
      </el-button>
    </el-col>
        </el-row>
        <div style="height: 10px;"></div>
        <el-row>
          <el-col :span="3"><div class="label" style="margin-top: 5px;"></div></el-col>
          <el-col :span="9" :offset="1">
      <el-button
        size="small"
        class="Ebutton"
        :class="{ 'active': selected=== '【至尊版】i9-14900HX/碳晶黑' }"
        @click="selectCPU('【至尊版】i9-14900HX/碳晶黑')">
        【至尊版】i9-14900HX/碳晶黑
      </el-button>
    </el-col>
    </el-row>
    <div style="height: 10px;"></div>
        <el-row>
          <el-col :span="3"><div class="label" style="margin-top: 5px;">存储</div></el-col>
          <el-col :span="9" :offset="1">
      <el-button
        size="small"
        class="Ebutton"
        :class="{ 'active': selectedRam=== '【官方标配】16G/1T SSD' }"
        @click="selectRam('【官方标配】16G/1T SSD')">
        【官方标配】16G/1T SSD
      </el-button>
    </el-col>
    <el-col :span="9">
      <el-button
        size="small"
        class="Ebutton"
        :class="{ 'active': selectedRam=== '【官方定制】16G/2T SSD(1Tx2)' }"
        @click="selectRam('【官方定制】16G/2T SSD(1Tx2)')">
        【官方定制】16G/2T SSD(1Tx2)
      </el-button>
    </el-col>
    </el-row>
    <div style="height: 10px;"></div>
        <el-row>
          <el-col :span="3"><div class="label" style="margin-top: 5px;"></div></el-col>
          <el-col :span="9" :offset="1">
      <el-button
        size="small"
        class="Ebutton"
        :class="{ 'active': selectedRam=== '【官方定制】32G(16Gx2)/1T SSD' }"
        @click="selectRam('【官方定制】32G(16Gx2)/1T SSD')">
        【官方定制】32G(16Gx2)/1T SSD
      </el-button>
    </el-col>
    <el-col :span="9">
      <el-button
        size="small"
        class="Ebutton"
        :class="{ 'active': selectedRam=== '【官方标配】32G（16+16）/1T SSD' }"
        @click="selectRam('【官方标配】32G（16+16）/1T SSD')">
        【官方标配】32G（16+16）/1T SSD
      </el-button>
      </el-col>
    </el-row>
    <div style="height: 10px;"></div>
        <el-row>
          <el-col :span="3"><div class="label" style="margin-top: 5px;">显卡</div></el-col>
          <el-col :span="9" :offset="1">
      <el-button
        size="small"
        class="Ebutton"
        :class="{ 'active': selectedGPU=== 'RTX™ 4060 8GB独显' }"
        @click="selectGPU('RTX™ 4060 8GB独显')">
        RTX™ 4060 8GB独显
      </el-button>
    </el-col>
    <el-col :span="9">
      <el-button
        size="small"
        class="Ebutton"
        :class="{ 'active': selectedGPU=== 'RTX™ 4090 16GB独显' }"
        @click="selectGPU('RTX™ 4090 16GB独显')">
        RTX™ 4090 16GB独显
      </el-button>
      </el-col>
    </el-row>
    <div style="height: 10px;"></div>
        <el-row>
          <el-col :span="3"><div class="label" style="margin-top: 5px;"></div></el-col>
    <el-col :span="9" :offset="1">
      <el-button
        size="small"
        class="Ebutton"
        :class="{ 'active': selectedGPU=== 'RTX™ 4070 8GB独显' }"
        @click="selectGPU('RTX™ 4070 8GB独显')">
        RTX™ 4070 8GB独显
      </el-button>
      </el-col>
    </el-row>
    <div style="height: 10px;"></div>
        <el-row>
          <el-col :span="3"><div class="label" style="margin-top: 5px;">选择服务</div></el-col>
    <el-col :span="9" :offset="1">
      <el-button
        size="small"
        class="Ebutton"
        :class="{ 'active': selectedSer=== '1年意外保+只换不修+清洁' }"
        @click="selectSer('1年意外保+只换不修+清洁')">
        1年意外保+只换不修+清洁
      </el-button>
      </el-col>
      <el-col :span="9">
      <el-button
        size="small"
        class="Ebutton"
        :class="{ 'active': selectedSer=== '1年延保+3次清洁' }"
        @click="selectSer('1年延保+3次清洁')">
        1年延保+3次清洁
      </el-button>
      </el-col>
    </el-row>
    <div style="height: 10px;"></div>
        <el-row>
          <el-col :span="3"><div class="label" style="margin-top: 5px;"></div></el-col>
    <el-col :span="9" :offset="1">
      <el-button
        size="small"
        class="Ebutton"
        :class="{ 'active': selectedSer=== '3年整机保修' }"
        @click="selectSer('3年整机保修')">
        3年整机保修
      </el-button>
      </el-col>
      <el-col :span="9">
      <el-button
        size="small"
        class="Ebutton"
        :class="{ 'active': selectedSer=== '2年单次意外保' }"
        @click="selectSer('2年单次意外保')">
        2年单次意外保
      </el-button>
      </el-col>
    </el-row>
    <div style="height: 20px;"></div>
        <el-row>
          <el-col :span="3"><div class="label" style="margin-top: 5px;"></div></el-col>
    <el-col :span="10" :offset="1">
      <el-button size="large" style="border-radius: 0;
      
        width: 120px;background-color: #d81e06;color: white;" @click="Purchase()">立刻购买</el-button>
        <div style="font-size: 12px;margin-top: 10px;color: #ccc4c8;"><span ><el-icon><CircleCheck /></el-icon>联想自营</span> <span style="margin-left: 20px;"><el-icon><CircleCheck /></el-icon>联想发货&售后</span> <span style="margin-left: 20px;"><el-icon><CircleCheck /></el-icon>14天无忧退换</span></div>
      </el-col>
     
    </el-row>
      </div>
    </el-col>
    <el-col :span=2></el-col>
  </el-row>
  <el-dialog v-model="centerDialogVisible" title="恭喜您！" width="500" center>
    <div style="font-size: 20px;text-align: center;">您获得了<span style="font-weight: bold; color: red;">最高</span>的<span style="font-weight: bold; color: red;"> 0 </span>元优惠券！</div>
    <template #footer>
      <div class="dialog-footer" style="margin-left: -40px;">
        <el-button type="primary" @click="centerDialogVisible = false">
          太棒了！
        </el-button>
      </div>
    </template>
  </el-dialog>
  <el-dialog v-model="downPrice" title="降价通知" width="500" center>
    
    <template #footer>
      
    </template>
  </el-dialog>
</template>
<style>
.image-gallery {
  text-align: center;
  position: fixed;
}

.main-image img {

  width: 550px;
  height: 500px;
  margin-bottom: 20px;
  object-fit: cover;
}

.thumbnails {
  display: flex;
  justify-content: center;
  gap: 5px;
  overflow-x: auto;
}

.thumbnail img {
  width: 100px;
  height: 80px;
  object-fit: cover;
  cursor: pointer;
}

.thumbnail {
  transition: transform 0.3s ease;
}

.selected {
  transform: scale(1.1);
}
.thumbnails {
  padding: 10px; /* 根据需要调整，确保有足够空间展示边框 */
  overflow: hidden;
}

.thumbnail {
  transition: transform 0.3s ease; /* 平滑过渡效果 */
  border: 2px solid #ddd; /* 普通边框样式 */
  box-sizing: border-box; /* 确保边框和内填充包含在尺寸内 */
}

.thumbnail.selected {
  border: 2px solid lightcoral; /* 选中时的边框样式 */
  transform: scale(1.1); /* 控制放大比例，根据需要调整 */
}
.title{
  font-family: 'YourFont', sans-serif; /* 设置字体，替换 'YourFont' 为实际字体 */
  font-size: 24px; /* 设置字体大小 */
  font-weight: 400; /* 设置字体粗细 */
}
.tip{
  color:rgb(143, 143, 143);
  font-size: 15px; /* 设置字体大小 */
}
.label{
  font-size: small;
  margin-left: 30px;
}
.Ebutton{
  border-radius: 0;
  width: 250px;
  background-color: white;
}
.is-active {
  /* 激活状态的样式，例如更深的背景颜色 */
  background-color: #409EFF; /* 蓝色 */
  color: white;
}
.active {
  background-color:#ecf5ff; /* 激活状态的背景颜色 */
  color: #5aa0e5; /* 激活状态的文字颜色 */
}
</style>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { ref, onMounted, reactive } from 'vue';
import axios from "axios";
import { ElMessage } from 'element-plus';
const price = ref(0)
const Nprice =ref(0)
const name = ref('')
const tip =ref('')
onMounted(() => {
// 获取存储在 localStorage 中的字符串
const storedData = localStorage.getItem('params') as string;
// 将存储的字符串转换为 JSON 对象
const parsedData = JSON.parse(storedData);
// 现在，parsedData 就是一个 JSON 对象，你可以使用它来访问存储的数据
  axios.post("http://localhost:9090/order/confirm",parsedData).
  then(res =>{
    Nprice.value = res.data.data.leaf
    price.value = res.data.data.leaf
    name.value = res.data.data.name
    tip.value = res.data.data.des
  })
});
const Purchase = () =>{
    const currentTimestamp = new Date().getTime();//当前时间戳
    const newList = {
    customerid: '1',
    customername: 'hxc',
    cid: '1',
    cname: null,
    ctime: currentTimestamp,
    vid: null,
    vname: null,
    vtime: null,
    status: '1',
    finish: '1',
    ftime: null,
    total:  price.value,
    remark: null
};
const BizSeelOrderToSend = [newList];
const NameToSend =[name.value]
axios.post('http://localhost:9090/order/commit', BizSeelOrderToSend)
 .then(response =>{
  ElMessage.success("购买成功")
 })
 axios.post('http://localhost:9090/order/commitsub', NameToSend)
 .then(response =>{
 })
  }
interface ImageGallery {
  images: string[];
  selectedImage: string;
}
const gallery: ImageGallery = {
  images: [
  '../../picture/a5AxH4oqosw9v4Vy7BVRm3d0J-1359.jpg',
    '../../picture/9Ef6jV4rnzEWlBRJHn4fPlWZ4-1144.jpg',
    '../../picture/Z98D8XA9rdpk6r7cJg1eG0gy0-0716.jpg',
    '../../picture/xZoCNBkQqxaz4YRvXNxcil26S-1013.jpg',
    '../../picture/OgdX2HlfXm7sW5R5OeprUC5kr-3617.jpg',
  ],
  selectedImage: '',
};
const images = ref<string[]>(gallery.images);
const selectedImage = ref<string>(images.value[0]);
const centerDialogVisible = ref(false);
const downPrice =ref(false)
const selectImage = (image: string, index: number): void => {
  selectedImage.value = image;
  const thumbnailContainer = document.querySelector('.thumbnails') as HTMLElement;
  const scrollPosition = index * 100 - (thumbnailContainer.offsetWidth / 2) + 50;
  thumbnailContainer.scrollLeft = scrollPosition;
}
const isActive = ref(false); // 初始状态为非激活
    // 切换激活状态
    function toggleActive() {
      isActive.value = !isActive.value; // 点击时反转激活状态
    }
    const selected = ref<string>('i9-14900HX/碳晶灰');

// 选择CPU
const selectCPU = (cpu: string) => {
  if (selected.value === cpu) {
    selected.value = 'null'; // 如果当前选中的是被点击的按钮，则取消选中
  } else {
    selected.value = cpu; // 否则，将被点击的按钮设为选中状态
  }
};
const selectedRam = ref<string>('【官方标配】16G/1T SSD');
const selectRam = (rom: string) => {
  if (selectedRam.value === rom) {
    selectedRam.value = 'null'; // 如果当前选中的是被点击的按钮，则取消选中
  } else {
    selectedRam.value = rom; // 否则，将被点击的按钮设为选中状态
  }
};
const selectedGPU = ref<string>('RTX™ 4060 8GB独显');
const selectGPU = (gpu: string) => {
  if (selectedGPU.value === gpu) {
    selectedGPU.value = 'null'; // 如果当前选中的是被点击的按钮，则取消选中
  } else {
    selectedGPU.value = gpu; // 否则，将被点击的按钮设为选中状态
    if(gpu=='RTX™ 4090 16GB独显')
     Nprice.value= price.value + 6000
     if(gpu=='RTX™ 4060 8GB独显')
     Nprice.value= price.value
     if(gpu=='RTX™ 4070 8GB独显')
     Nprice.value= price.value + 2000
  }
};
const selectedSer = ref<string>('1年意外保+只换不修+清洁');
const selectSer = (ser: string) => {
  if (selectedSer.value === ser) {
    selectedSer.value = 'null'; // 如果当前选中的是被点击的按钮，则取消选中
  } else {
    selectedSer.value = ser; // 否则，将被点击的按钮设为选中状态
  }
};
const options = [
  {
    value: 'guide',
    label: 'Guide',
    children: [
      {
        value: 'disciplines',
        label: 'Disciplines',
        children: [
          {
            value: 'consistency',
            label: 'Consistency',
          },
          {
            value: 'feedback',
            label: 'Feedback',
          },
          {
            value: 'efficiency',
            label: 'Efficiency',
          },
          {
            value: 'controllability',
            label: 'Controllability',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'side nav',
            label: 'Side Navigation',
          },
          {
            value: 'top nav',
            label: 'Top Navigation',
          },
        ],
      },
    ],
  },
  {
    value: 'component',
    label: 'Component',
    children: [
      {
        value: 'basic',
        label: 'Basic',
        children: [
          {
            value: 'layout',
            label: 'Layout',
          },
          {
            value: 'color',
            label: 'Color',
          },
          {
            value: 'typography',
            label: 'Typography',
          },
          {
            value: 'icon',
            label: 'Icon',
          },
          {
            value: 'button',
            label: 'Button',
          },
        ],
      },
      {
        value: 'form',
        label: 'Form',
        children: [
          {
            value: 'radio',
            label: 'Radio',
          },
          {
            value: 'checkbox',
            label: 'Checkbox',
          },
          {
            value: 'input',
            label: 'Input',
          },
          {
            value: 'input-number',
            label: 'InputNumber',
          },
          {
            value: 'select',
            label: 'Select',
          },
          {
            value: 'cascader',
            label: 'Cascader',
          },
          {
            value: 'switch',
            label: 'Switch',
          },
          {
            value: 'slider',
            label: 'Slider',
          },
          {
            value: 'time-picker',
            label: 'TimePicker',
          },
          {
            value: 'date-picker',
            label: 'DatePicker',
          },
          {
            value: 'datetime-picker',
            label: 'DateTimePicker',
          },
          {
            value: 'upload',
            label: 'Upload',
          },
          {
            value: 'rate',
            label: 'Rate',
          },
          {
            value: 'form',
            label: 'Form',
          },
        ],
      },
      {
        value: 'data',
        label: 'Data',
        children: [
          {
            value: 'table',
            label: 'Table',
          },
          {
            value: 'tag',
            label: 'Tag',
          },
          {
            value: 'progress',
            label: 'Progress',
          },
          {
            value: 'tree',
            label: 'Tree',
          },
          {
            value: 'pagination',
            label: 'Pagination',
          },
          {
            value: 'badge',
            label: 'Badge',
          },
        ],
      },
      {
        value: 'notice',
        label: 'Notice',
        children: [
          {
            value: 'alert',
            label: 'Alert',
          },
          {
            value: 'loading',
            label: 'Loading',
          },
          {
            value: 'message',
            label: 'Message',
          },
          {
            value: 'message-box',
            label: 'MessageBox',
          },
          {
            value: 'notification',
            label: 'Notification',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'menu',
            label: 'Menu',
          },
          {
            value: 'tabs',
            label: 'Tabs',
          },
          {
            value: 'breadcrumb',
            label: 'Breadcrumb',
          },
          {
            value: 'dropdown',
            label: 'Dropdown',
          },
          {
            value: 'steps',
            label: 'Steps',
          },
        ],
      },
      {
        value: 'others',
        label: 'Others',
        children: [
          {
            value: 'dialog',
            label: 'Dialog',
          },
          {
            value: 'tooltip',
            label: 'Tooltip',
          },
          {
            value: 'popover',
            label: 'Popover',
          },
          {
            value: 'card',
            label: 'Card',
          },
          {
            value: 'carousel',
            label: 'Carousel',
          },
          {
            value: 'collapse',
            label: 'Collapse',
          },
        ],
      },
    ],
  },
  {
    value: 'resource',
    label: 'Resource',
    children: [
      {
        value: 'axure',
        label: 'Axure Components',
      },
      {
        value: 'sketch',
        label: 'Sketch Templates',
      },
      {
        value: 'docs',
        label: 'Design Documentation',
      },
    ],
  },
]
</script>