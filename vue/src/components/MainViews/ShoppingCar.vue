<template>
  <el-backtop :right="50" :bottom="100" />
  <div>
    <el-row>
    <el-col :span="6" :offset='16'>
      <el-autocomplete
      v-model="search"
      :fetch-suggestions="querySearchAsync"
      placeholder="Search"
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

  </el-col>
  </el-row>

    <el-table
      :data="filterTableData"
      style="width: 70%;margin-left: 15%;"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="Image">
        <template v-slot="scope">
          <img :src="scope.row.imageUrl" style="width: 100px; height: 100px;" alt="table image" />
        </template>
      </el-table-column>
      <el-table-column label="Date" prop="date"></el-table-column>
      <el-table-column label="Name" prop="name"></el-table-column>
      <el-table-column label="Price" prop="price"></el-table-column>
    <el-table-column>    
      <template v-slot="scope">
        <el-button
          link
          type="primary"
          size="small"
          @click.prevent="deleteRow(scope.$index, filterTableData)"
        >
          Remove
        </el-button>
        </template>
      </el-table-column>
  
    </el-table>

    <!-- 显示选中商品的总价格 -->
    
  </div>
  <el-affix position="bottom" :offset="10">
    <el-card class="BottomMenu">
    <div>Total Price: ${{ totalPrice }}</div>
    <div>Selected Items: {{ selectedRows.length }}</div>
  </el-card>
  </el-affix>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted } from 'vue'

interface User {
  date: string
  name: string
  imageUrl: string
  price: string
}

const search = ref('')
const selectedRows = ref<User[]>([])

import { reactive } from 'vue'
const tableData = reactive([
  //...你的数据
  {
    date: '2016-05-03',
    name: 'Tom',
    imageUrl:'.../../../picture/pms_1708570856.03118739.png',
    price:'100',
  },
  {
    date: '2016-05-02',
    name: 'John',
    imageUrl:'.../../../picture/pms_1708570856.03118739.png',
    price:'100',
  },
  {
    date: '2016-05-04',
    name: 'Morgan',
    imageUrl:'.../../../picture/pms_1708570856.03118739.png',
    price:'100',
  },
  {
    date: '2016-05-01',
    name: 'Jessy1',
    imageUrl:'.../../../picture/pms_1708570856.03118739.png',
    price:'100',
  },
  {
    date: '2016-05-01',
    name: 'Jessy2',
    imageUrl:'.../../../picture/pms_1708570856.03118739.png',
    price:'100',
  },
  {
    date: '2016-05-01',
    name: 'Jessy3',
    imageUrl:'.../../../picture/pms_1708570856.03118739.png',
    price:'100',
  },
  {
    date: '2016-05-01',
    name: 'Jessy4',
    imageUrl:'.../../../picture/pms_1708570856.03118739.png',
    price:'100',
  },
  {
    date: '2016-05-01',
    name: 'Jessy5',
    imageUrl:'.../../../picture/pms_1708570856.03118739.png',
    price:'100',
  },
  {
    date: '2016-05-01',
    name: 'Jessy6',
    imageUrl:'.../../../picture/pms_1708570856.03118739.png',
    price:'100',
  },
  {
    date: '2016-05-01',
    name: 'Jessy7',
    imageUrl:'.../../../picture/pms_1708570856.03118739.png',
    price:'100',
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
  background-color: rgb(234, 233, 233);
  width: 96vw;
  margin-left: 2vw;
}
</style>