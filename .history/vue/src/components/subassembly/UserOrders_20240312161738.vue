<template>
  <div :class="{ 'dark': isDark }">
<el-card style="max-width: 800px;" class="UserOrdersCrad" shadow="always">
    <template #header>
      <div class="card-header">
        <span>我的订单</span>
      </div>
    </template>
    <el-row :gutter="20">
  <el-col :span="2"></el-col>
  <el-col :span="4">
    <el-card 
  shadow="hover" 
  class="UMcard"
  @mouseover="isHovering1 = true"
  @mouseleave="isHovering1 = false"
  @click="$emit('select-card', 1)"
>
  <el-icon 
    :color="isHovering1 ? 'red' : 'inherit'" 
    size="70"
  >
    <CreditCard />
  </el-icon>
  <div style="margin-left: 10px;">
    已购买
  </div>
</el-card>
  </el-col>
  <el-col :span="4">
    <div :class="{ 'dark': isDark }">
    <el-card 
  shadow="hover" 
  class="UMcard"
  @mouseover="isHovering2 = true"
  @mouseleave="isHovering2 = false"
  @click="$emit('select-card', 2)"
>
  <el-icon 
    :color="isHovering2 ? 'red' : 'inherit'" 
    size="70"
  >
  <Box />
  </el-icon>
  <div style="margin-left: 10px;">
    待收货
  </div>
</el-card>
</div>
  </el-col>
  <el-col :span="4">
    <div :class="{ 'dark': isDark }">
    <el-card 
  shadow="hover" 
  class="UMcard"
  @mouseover="isHovering3 = true"
  @mouseleave="isHovering3 = false"
  @click="$emit('select-card', 3)"
>
  <el-icon 
    :color="isHovering3 ? 'red' : 'inherit'" 
    size="70"
  >
  <ChatLineSquare />
  </el-icon>
  <div style="margin-left: 18px;">
    评价
  </div>
</el-card>
</div>
  </el-col>
  <el-col :span="4">
    <div :class="{ 'dark': isDark }">
    <el-card 
  shadow="hover" 
  class="UMcard"
  @mouseover="isHovering4 = true"
  @mouseleave="isHovering4 = false"
  @click="$emit('select-card', 4)"
>
  <el-icon 
    :color="isHovering4 ? 'red' : 'inherit'" 
    size="70"
  >
  <CircleCheck />
  </el-icon>
  <div style="margin-left: 3px;margin-right: -7px;">
    退货售后
  </div>
</el-card>
</div>
  </el-col>
  <el-col :span="4">
    <div :class="{ 'dark': isDark }">
    <el-card 
  shadow="hover" 
  class="UMcard"
  @mouseover="isHovering5 = true"
  @mouseleave="isHovering5 = false"
  @click="$emit('select-card', 5)"
>
  <el-icon 
    :color="isHovering5 ? 'red' : 'inherit'" 
    size="70"
  >
  <Expand />
  </el-icon>
  <div style="margin-left: 3px;margin-right: -7px;">
    全部订单
  </div>
</el-card>
</div>
  </el-col>
  <el-col :span="2"></el-col>
</el-row>
  
  </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { isDark } from '~/composables';
export default defineComponent({
  setup() {
    const isHovering1 = ref(false);
    const isHovering2 = ref(false);
    const isHovering3 = ref(false);
    const isHovering4 = ref(false);
    const isHovering5 = ref(false);
    const isHovering6 = ref(false);
    return {
      isHovering1,
      isHovering2,
      isHovering3,
      isHovering4,
      isHovering5,
      isHovering6,
      isDark,
    };
  },
});
</script>
<style scoped>
.UMcard{
  border: none;
  background-color: aliceblue;
}
.UMcard:hover el-icon {
color: red; /* 尝试直接改变文字颜色 */

}
.UserOrdersCrad{
background-color: aliceblue;
}
.dark .UserOrdersCrad{
background-color: rgb(41, 41, 41);
}
.dark .UMcard{
background-color: rgb(41, 41, 41);
}
</style>
