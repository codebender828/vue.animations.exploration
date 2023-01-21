import { styles } from '~~/utils/styles'
import { defineComponent } from 'vue'

export default defineComponent((_, { slots }) => {
  return () => (
    <main class={styles.layout}>
      {slots.default?.()}
    </main>
  )
})