<template>

  <div>
    <el-row>
      <el-col :span="12" :offset="4"><ELogo/></el-col>
      
    <el-col :span="6">
      <el-autocomplete
      v-model="search"
      :fetch-suggestions="querySearchAsync"
      placeholder="搜索"
      @select="handleSelect"
      :clearable="true"
      style="width: 290px;"
    >
      <template #loading>
        <svg class="circular" viewBox="0 0 50 50">
          <circle class="path" cx="25" cy="25" r="20" fill="none" />
        </svg>
      </template>
    </el-autocomplete>
<el-row>
  <div class="m-4">
    <p style="margin-left: -10px;">配送至：</p>
    <el-cascader
      placeholder="选择您的地址"
      :options="options"
      filterable
      style="width: 290px;margin-left: -15px;"
      clearable
    />
  </div>
</el-row>
  </el-col>
  </el-row>

    <el-table
      :data="filterTableData"
      style="width: 70%;margin-left: 15%;"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="图片">
        <template v-slot="scope">
          <img :src="scope.row.imageurl" style="width: 100px; height: 100px;" alt="table image" />
        </template>
      </el-table-column>
      <el-table-column label="入车时间" prop="time"></el-table-column>
      <el-table-column label="商品" prop="date"></el-table-column>
      <el-table-column label="价格" prop="price"></el-table-column>
      
     
    <el-table-column>    
      <template v-slot="scope">
        <el-button
          link
          type="primary"
          size="small"
          @click.prevent="showDeleteDialog(scope.$index)"
          plain @click="dialogVisible = true"
        >
        <el-icon size="20"><Delete /></el-icon>
        </el-button>
        </template>
      </el-table-column>
      
    </el-table>
    <el-dialog
  v-model="dialogVisible"
  title="Tips"
  width="500"
>
  <span>确定要删除吗</span>
  <template #footer>
    <div class="dialog-footer">
      <el-button @click="dialogVisible = false">取消</el-button>
      <el-button type="primary" @click="confirmDelete">确定</el-button>
    </div>
  </template>
</el-dialog>
    <!-- 显示选中商品的总价格 -->
    
  </div>
  <el-affix position="bottom" :offset="10">
    <el-card :class="{'Sdark-Card': isDark}" class="BottomMenu">
      <el-row>
    <el-col :span="2" :offset="18">
      
      <div>已选择<span style="color: red;">{{ selectedRows.length }}</span>件商品</div>
    </el-col>
    <el-col :span="2">
      <div style="margin-top: -13px;">总价:<span style="color: red;font-size: 30px;margin-left: 10px;">{{ totalPrice }}</span></div>
    </el-col>
    <el-col :span="2">
      <el-button type="danger" style="width: 130px;height: 60px;margin-top: -9px;margin-bottom: -9px;" @click="cartPurchase">购买</el-button>
    </el-col>
  </el-row>
  
  </el-card>
  </el-affix>
</template>

<script lang="ts" setup>
import { ElMessage } from "element-plus";
import axios from 'axios';
import { computed, ref, onMounted } from 'vue'
import { isDark } from "../../composables/dark";
interface User {
    date: string,
    imageurl:string,
    price:string,
    time:string,
    name:string
}
import { reactive } from 'vue'
import ELogo from '../ELogo.vue';
const search = ref('')
const selectedRows = ref<User[]>([])
const tableData = reactive<User[]>([]); // 声明购物车数据
const dialogVisible = ref(false);
const deleteRowIndex = ref(-1);
const showDeleteDialog = (index:number) => {
  deleteRowIndex.value = index;
  dialogVisible.value = true;
};
const confirmDelete = () => {
  if (deleteRowIndex.value !== -1) {
    deleteRow(deleteRowIndex.value);
    deleteRowIndex.value = -1; // 重置索引
  }
  dialogVisible.value = false; // 关闭对话框
};
// 发送请求获取购物车数据
const fetchCartData = async () => {
  try {
    const response = await axios.post('http://localhost:9090/cart/display');
    tableData.values = response.data; // 将返回的购物车数据赋值给tableData
    tableData.splice(0, tableData.length, ...response.data.data); 
  } catch (error) {
    console.error('Error fetching cart data:', error);
  }
};

const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value || data.name.toLowerCase().includes(search.value.toLowerCase())
  )
);

const totalPrice = computed(() => {
  return selectedRows.value.reduce((sum, row) => sum + parseFloat(row.price), 0)
})

const handleSelectionChange = (rows: User[]) => {
  selectedRows.value = rows
}

const links = ref<{ value: string }[]>([])

const loadAll = () => {
  return tableData.map((user) => ({
    value: user.name,
  }))
}

let timeout: NodeJS.Timeout
const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
  const results = queryString
    ? links.value.filter((link) => link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
    : links.value

  clearTimeout(timeout)
  timeout = setTimeout(() => {
    cb(results)
  }, 1000)
}

const handleSelect = (item: Record<string, any>) => {
  //console.log(item)
}

onMounted(() => {
  fetchCartData();
  links.value = loadAll()
})

const deleteRow = async (index: number) => {
  const deletedRow = tableData[index]; // 获取要删除的行数据
  // 从tableData中删除行
  tableData.splice(index, 1);
  try {
    // 发送删除请求至后端
    await axios.delete('http://localhost:9090/cart/delete', { data: deletedRow });
    console.log('Deleted row from backend successfully');
  } catch (error) {
    console.error('Error deleting row from backend:', error);
  }
}
const cartPurchase = () => {
  // 获取已选择的商品信息
  const selectedProducts = selectedRows.value;
  // 构造要发送到后端的数据对象
  const dataToSend = {
    selectedProducts: selectedProducts,
    totalPrice: totalPrice.value
  };
  
  axios.post('http://localhost:9090/cart/purchase', selectedProducts)
  .then(response => {
    for (let i = 0; i < selectedProducts.length; i++) {
    tableData.splice(deleteRowIndex.value, 1);
}
    ElMessage.success("购买成功")
    // 处理后端返回的响应数据
    console.log('Success:', response.data);
    // 可能有其他操作，如重置已选商品列表等
  })
  .catch(error => {
    // 处理错误情况
    console.error('Error:', error);
  });

const currentTimestamp = new Date().getTime();// 获取当前时间的时间戳
const newList = selectedProducts.map(product => ({
    customer_id: '1',
    customer_name: 'hxc',
    cid: '1',
    cname: null,
    ctime: currentTimestamp,
    vid: null,
    vname: null,
    vtime: null,
    status: '1',
    finish: '1',
    ftime: null,
    total:  product.price,
    remark: null
}));
// 
const list = selectedProducts.map(product => ({
    date:product.date,
    price:product.
}));

console.log(newList);
console.log(list);
 axios.post('http://localhost:9090/order/commit', newList)
 .then(response =>{
 })
 axios.post('http://localhost:9090/order/commit', list)
 .then(response =>{
 })
};


const props = {
  multiple: true,
}

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

<style>
  /* SVG loading style */
  .circular {
    display: inline;
    height: 30px;
    width: 30px;
    animation: loading-rotate 2s linear infinite;
  }
  .path {
    animation: loading-dash 1.5s ease-in-out infinite;
    stroke-dasharray: 90, 150;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: var(--el-color-primary);
    stroke-linecap: round;
  }
  @keyframes loading-rotate {
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loading-dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -40px;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -120px;
    }
  }
.BottomMenu{
  background-color: rgb(234, 233, 233,0.6);
  width: 96vw;
  margin-left: 2vw;
}
.Sdark-Card.BottomMenu{
  background-color: rgba(42, 42, 42, 0.6);
}
</style>

