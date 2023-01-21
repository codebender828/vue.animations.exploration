import { NuxtLink } from '#components'
import MotionOneDialog from '~~/components/motionone/dialog'

export default defineComponent(() => {
  const route = useRoute()
  return () => (
    <div class={styles.home}>
      <NuxtLink class={styles.components.anchor} aria-current={route.path === "/" ? "page" : undefined} to="/">&larr; Return Home</NuxtLink>
      <MotionOneDialog />
    </div>
  )
})