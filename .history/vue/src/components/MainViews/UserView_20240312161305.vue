<script setup lang="ts">
import UserOrders from '../subassembly/UserOrders.vue';
import UserWallet from '../subassembly/UserWallet.vue';
import NonPayment from '../subassembly/Non-payment.vue';
import { ref } from 'vue';
const selectedCardId = ref(1);

// 定义一个方法来处理接收到的 cardid
const handleSelectCard = (cardid: number) => {
  selectedCardId.value = cardid;
}
</script>

<template>
  <el-row>
    <el-col :span="19" :offset="2" ><UserWallet /></el-col>
  </el-row>
  <br>
  <el-row :gutter="20">
    <el-col :span="18" :offset="2" ><UserOrders @select-card="handleSelectCard" /></el-col>
     
  </el-row>
  <el-row>
    <el-col :span="20" :offset='2'>
      <template v-if="selectedCardId==0">
      <el-empty description="NoData" />
      </template>
      <template v-if="selectedCardId==1">
      <NonPayment />
      </template>
      <template v-if="selectedCardId==2">
      <el-empty description="NoData" />
      </template>
      <template v-if="selectedCardId==3">
      <el-empty description="NoData" />
      </template>
      <template v-if="selectedCardId==4">
      <el-empty description="NoData" />
      </template>
      <template v-if="selectedCardId==5">
      <el-empty description="NoData" />
      </template>
    </el-col>
  </el-row>

</template>
