import { Motion, Presence } from 'motion/vue'
import * as dialog from "@zag-js/dialog"
import { ClientOnly } from '#components'
import { normalizeProps, useMachine } from "@zag-js/vue"
import { computed, defineComponent, h, Fragment, Teleport } from "vue"

const ToggleButton = defineComponent((_, { slots }) => {
  return () => (
    <button class={buttonStyles} data-control>
      {slots.default?.()}
    </button>
  )
})

const variants = {
  backdrop: {
    initial: {
      opacity: 0,
      scale: 1.1,
    },
    animate: { opacity: 0.5, scale: 1 },
    exit: { opacity: 0, scale: 1.1 }
  },
  content: {
    initial: {
      opacity: 0,
      scale: 1.005,
      y: 10
    },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 1.005, y: 10 }
  }
}



const MotionOneDialog = defineComponent({
  name: "Dialog",
  setup() {
    const [state, send] = useMachine(dialog.machine({ id: "1", defaultOpen: true }))

    const apiRef = computed(() =>
      dialog.connect(state.value, send, normalizeProps),
    )

    return () => {
      const api = apiRef.value
      return (
        <ClientOnly>
          <Teleport to="body">
            <>
              <Presence>
                {api.isOpen && (
                  <Motion
                    {...variants.backdrop}
                    class={styles.components.dialog.backdrop}
                  >
                    <div {...api.backdropProps} />
                  </Motion>
                )}
              </Presence>

              <Presence>
                {api.isOpen && (
                  <Motion
                    {...variants.content}
                    class={styles.components.dialog.container}
                  >
                    <div {...api.containerProps} class={styles.components.dialog.content}>
                      <div {...api.contentProps}>
                        <h2 class={styles.components.dialog.header} {...api.titleProps}>Edit profile</h2>
                        <div {...api.descriptionProps} class={styles.components.dialog.body}>
                          Make changes to your profile here. Click save when you are
                          done.
                        </div>
                        <button class={styles.components.dialog.closeButton} {...api.closeTriggerProps}>x</button>
                        <div class={styles.components.dialog.footer}>
                          <input class={styles.components.input} placeholder="Enter name..." />
                          <button
                            style={{
                              marginInlineStart: "8px"
                            }}
                            class={buttonStyles} data-primary
                            onClick={() => api.close()}
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </Motion>
                )}
              </Presence>

              <ToggleButton {...api.triggerProps}>
                {api.isOpen ? "Hide" : "Show"}
              </ToggleButton>
            </>
          </Teleport>
        </ClientOnly>
      )
    }
  },
})

export default MotionOneDialog