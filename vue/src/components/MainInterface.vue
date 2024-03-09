<script setup>
import { ref } from 'vue'
import  NewView from './MainViews/NewView.vue'
import Computer from './NewViews/Computer.vue'
import Elephone from './NewViews/Elephone.vue'
import Watch from './NewViews/Watch.vue'
import Mouse from './NewViews/Mouse.vue'
import Jianpan from './NewViews/Jianpan.vue'
import Displayer from './NewViews/Displayer.vue'
import ShoppingCar from './MainViews/ShoppingCar.vue'
import About from './MainViews/About.vue'
import UserView from './MainViews/UserView.vue'
import Londing from './MainViews/Londing.vue'
const props = defineProps(['index'])
const awesome = ref(true)
</script>

  <template>
    
  <template v-if="index=='1'">
 <NewView />
  </template>
  <template v-if="index=='2-1'">
    <Computer></Computer>
  </template>
  <template v-if="index=='2-2'">
 <Elephone></Elephone>
  </template>
  <template v-if="index=='2-3'">
 <Watch></Watch>
  </template>
  <template v-if="index=='2-4-1'">
    <Mouse></Mouse>
  </template>
  <template v-if="index=='2-4-2'">
    <Jianpan></Jianpan>
  </template>
  <template v-if="index=='2-4-3'">
    <Displayer></Displayer>
  </template>
  <template v-if="index=='3'">
 <h1>界面3</h1>
  </template>
  <template v-if="index=='4'">
 <h1>界面4</h1>
  </template>
  <template v-if="index=='5'">
<ShoppingCar />
  </template>
  <template v-if="index=='6'">
<UserView />
  </template>
 
  <template v-if="index=='7'">
    <About />
  </template>
  <template v-if="index=='8'">
   
 <Londing />

</template>

</template>


