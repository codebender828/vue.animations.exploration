import { useToggle } from "@vueuse/core"
import { NuxtLink } from '#components'

const Box = defineComponent(() => {
  return () => (
    <div class={boxStyles}>Box</div>
  )
})

const ToggleButton = defineComponent((_, { slots }) => {
  return () => (
    <button class={buttonStyles}>
      {slots.default?.()}
    </button>
  )
})

export default defineComponent(() => {
  const [isOpen, toggleIsOpen] = useToggle(true)
  return () => (
    <div class={styles.home}>
      <section>
        <h1 class={styles.components.heading}>Dialog Transition Comparison (Nuxt 3)</h1>
        <ul class={styles.components.list}>
          <li><NuxtLink to="/motionone/dialog">Motion</NuxtLink></li>
          <li><NuxtLink >VueUse Motion</NuxtLink></li>
        </ul>
      </section>
      <ToggleButton data-control onClick={() => toggleIsOpen()}>
        {isOpen.value ? "Remove" : "Open"}
      </ToggleButton>
    </div>
  )
})