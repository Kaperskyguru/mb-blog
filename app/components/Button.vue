<template>
  <!-- NuxtLink / External Link -->
  <div v-if="props.type.includes('link')">
    <a
      :href="props.link"
      :class="['btn', classNames]"
      :style="props.customStyle"
      :disabled="props.disabled || props.waiting"
      :aria-label="props.waiting ? 'Please wait…' : undefined"
      v-bind="attrs"
      v-on="listeners"
    >
      <div v-if="props.waiting" class="custom-icon" role="presentation">
        <svg
          class="-my-px"
          xmlns="http://www.w3.org/2000/svg"
          display="block"
          preserveAspectRatio="xMidYMid"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#fff"
            stroke-width="5"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#000"
            stroke-dasharray="140 85"
            stroke-width="5"
          >
            <animateTransform
              attributeName="transform"
              dur="1s"
              keyTimes="0;1"
              repeatCount="indefinite"
              type="rotate"
              values="0 50 50;360 50 50"
            />
          </circle>
        </svg>
      </div>

      <template v-else>
        <slot />
        <div v-if="slots.icon" class="custom-icon" role="presentation">
          <slot name="icon" />
        </div>
      </template>
    </a>
  </div>

  <!-- Button -->
  <button
    v-else
    :class="['btn', classNames]"
    :style="props.customStyle"
    :disabled="props.disabled || props.waiting"
    :aria-label="props.waiting ? 'Please wait…' : undefined"
    style="outline: none !important"
    v-bind="attrs"
    v-on="listeners"
  >
    <div v-if="props.waiting" class="custom-icon" role="presentation">
      <svg
        class="-my-px"
        xmlns="http://www.w3.org/2000/svg"
        display="block"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#fff"
          stroke-width="5"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#000"
          stroke-dasharray="140 85"
          stroke-width="5"
        >
          <animateTransform
            attributeName="transform"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="rotate"
            values="0 50 50;360 50 50"
          />
        </circle>
      </svg>
    </div>

    <template v-else>
      <slot />
      <div v-if="slots.icon" class="custom-icon" role="presentation">
        <slot name="icon" />
      </div>
    </template>
  </button>
</template>

<script setup>
import { useAttrs, useSlots } from 'vue'

const attrs = useAttrs()
const slots = useSlots()

const props = defineProps({
  appearance: {
    type: String,
    default: 'primary',
    validator: (value) =>
      [
        'primary',
        'secondary',
        'warning',
        'outline-primary',
        'primary-3',
        'outline-secondary',
        'purple',
        'none',
      ].includes(value),
  },
  size: {
    type: String,
    default: 'normal',
    validator: (value) => ['small', 'normal', 'large'].includes(value),
  },
  waiting: { type: Boolean, default: false },
  type: { type: String, default: 'btn' },
  link: { type: [Object, String], default: '#' },
  customStyle: { type: [String, Object], default: '' },
  disabled: { type: Boolean, default: false },
  active: { type: Boolean, default: false },
})

const listeners = attrs.on || {} // captures v-on events

const classNames = computed(() => {
  const classNames = [`m-btn-${props.appearance}`]

  if (props.active) classNames.push('active')
  if (props.appearance === 'none') classNames.push('disabled')
  if (props.disabled || props.waiting)
    classNames.push('opacity-50 pointer-events-none cursor-default')

  // height
  classNames.push(
    props.size === 'small'
      ? 'h-6'
      : props.size === 'normal'
      ? 'h-[2.1875rem]'
      : 'h-[2.625rem]'
  )

  // padding
  if (props.size === 'small') {
    classNames.push('px-1 lg:px-2 py-1 text-xs')
  } else if (props.size === 'normal') {
    classNames.push('px-3 lg:px-6 pb-1.5 pt-[0.4375rem] text-sm')
  } else {
    classNames.push('px-4 py-2 text-base')
  }

  // icon alignment
  if (!slots.icon || !slots.default || props.waiting) {
    classNames.push('justify-center')
  } else {
    classNames.push('justify-between')
  }

  return classNames.join(' ')
})
</script>

<style scoped>
/* Keep your original button styles */
.m-btn-primary {
  background: #0e1f33;
  color: #fff;
  border-radius: 5px;
  border: none;
}
.m-btn-outline-primary {
  border: 1px solid #9c4df4;
  color: #9c4df4;
  font-size: 0.7rem;
  transition: 0.5s ease;
}
.m-btn-outline-primary:hover {
  border: 1px dashed #9c4df4;
}
.custom-icon:not(:only-child) {
  margin-left: 0.9375em;
}
.custom-icon > svg {
  width: 1.5em;
  height: 1.5em;
  fill: currentColor;
}
</style>
