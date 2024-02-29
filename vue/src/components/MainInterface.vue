<script setup>
import { ref } from 'vue'
import  NewView from './MainViews/NewView.vue'
const props = defineProps(['index'])
const awesome = ref(true)
</script>

  <template>
    
  <template v-if="index=='1'">
 <NewView />
  </template>
  <template v-if="index=='2-1'">
    2-1
  </template>
  <template v-if="index=='2-2'">
 <h1>界面2-2</h1>
  </template>
  <template v-if="index=='2-3'">
 <h1>界面2-3</h1>
  </template>
  <template v-if="index=='2-4-1'">
 <h1>界面2-4-1</h1>
  </template>
</template>


