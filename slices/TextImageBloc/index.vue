<script setup lang="ts">
import { Content } from "@prismicio/client"

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.TextImageBlocSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
)
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="bg-orange-400 w-full h-80 grid grid-cols-8 grid-rows-4"
  >
    <div class="h-full overflow-hidden col-span-3">
      <PrismicImage
        :field="slice.primary.image"
        class="h-full w-auto object-cover"
      />
    </div>
    <div>
      <p>{{ slice.primary.caption }}</p>
      <p>{{ slice.primary.text }}</p>
    </div>
  </section>
</template>
