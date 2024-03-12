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
              <span style="color: #d81e06;font-size: 25px;font-weight: 700;">{{ price }}</span>
              </div>
            </el-col>
            <el-col :span="5">
              <el-card style="width: 40px; height: 40px; background-color: rgb(240,240,240); cursor: pointer;" shadow="hover" @click="downPrice = true">
                <div style="font-size: 15px; margin-left: -15px; margin-top: -20px; margin-right: -15px; color: blue;">降价</div>
                <div style="font-size: 15px; margin-left: -15px; margin-right: -15px; color: blue;">通知</div>
              </el-card>
              
              </el-col>
          </el-row>

        </div>
        <div>2</div>
      </el-card>
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
</style>
<script lang="ts" setup>
import { ref } from 'vue';
import { ArrowRight } from '@element-plus/icons-vue'
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
const price = ref('10899')
const name = ref('联想(Lenovo)拯救者Y9000P 2024 16英寸电竞游戏本笔记本电脑')
const tip =ref("第14代智能英特尔®酷睿™ i9-14900HX/Windows 11 家庭中文版/16英寸/32G（16X2）/1T SSD/RTX™ 4060 8G独显/碳晶灰")
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
</script>