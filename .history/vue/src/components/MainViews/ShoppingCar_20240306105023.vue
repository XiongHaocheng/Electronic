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
          <img :src="scope.row.imageUrl" style="width: 100px; height: 100px;" alt="table image" />
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
          @click.prevent="deleteRow(scope.$index)"
        >
        <el-icon size="20"><Delete /></el-icon>
        </el-button>
        </template>
      </el-table-column>
      
    </el-table>

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
      <el-button type="danger" style="width: 130px;height: 60px;margin-top: -9px;margin-bottom: -9px;">购买</el-button>
    </el-col>
  </el-row>
  
  </el-card>
  </el-affix>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted } from 'vue'
import { isDark } from "../../composables/dark";
interface User {
    date: string,
    imageUrl:string,
    price:string,
    time:string,
    name:string
}
import ELogo from '../ELogo.vue';
const search = ref('')
const selectedRows = ref<User[]>([])

import { reactive } from 'vue'

const tableData = reactive([
  //...数据
  {
    date: '商品介绍1',
    imageUrl:'.../../../picture/pms_1708570856.03118739.png',
    price:'100',
    time:"2016-05-03",
    name:'商品名字1'
  },
  {
    date: '商品介绍2',
    imageUrl:'.../../../picture/pms_1708570856.03118739.png',
    price:'100',
    time:"2016-05-03",
    name:'商品名字2'
  },
  {
    date: '商品介绍3',
    imageUrl:'.../../../picture/pms_1708570856.03118739.png',
    price:'100',
    time:"2016-05-03",
    name:'商品名字3'
  },
  {
    date: '商品介绍4',
    imageUrl:'.../../../picture/pms_1708570856.03118739.png',
    price:'100',
    time:"2016-05-03",
    name:'商品名字4'
  },
  {
    date: '商品介绍5',
    imageUrl:'.../../../picture/pms_1708570856.03118739.png',
    price:'100',
    time:"2016-05-03",
    name:'商品名字5'
  },
  {
    date: '商品介绍6',
    imageUrl:'.../../../picture/pms_1708570856.03118739.png',
    price:'100',
    time:"2016-05-03",
    name:'商品名字6'
  },
  {
    date: '商品介绍7',
    imageUrl:'.../../../picture/pms_1708570856.03118739.png',
    price:'100',
    time:"2016-05-03",
    name:'商品名字7'
  },
 
])


const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value || data.name.toLowerCase().includes(search.value.toLowerCase())
  )
)

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
  console.log(item)
}

onMounted(() => {
  links.value = loadAll()
})
const deleteRow = (index: number) => {
  tableData.splice(index, 1)
}
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