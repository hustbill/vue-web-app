<script>
import { defineComponent } from '@vue/composition-api'
import { ref } from '@vue'

export default defineComponent({
    setup() {
        
    },
})

const header =  ref('Shopping List App')
</script>

<template> 
    <h1> {{ header}}  </h1>
</template>
