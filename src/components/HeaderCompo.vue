<template>
  <div>
    <div class="flex items-start mb-4">
      <div class="flex-1 flex justify-center">
        <button
          v-on:click="handleLogo"
          class="rounded-lg bg-white border-red-400 border-solid border p-10"
        >
          Logo
        </button>
      </div>
      <div class="flex-1 flex justify-center mt-auto mb-auto relative">
        <input type="text" placeholder="Search..." class="border p-2 flex-1" />
        <button class="absolute top-3 right-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex justify-center my-auto">
        <div class="w-20 mx-auto justify-between flex">
          <button @click="handleClick">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
              />
            </svg>
          </button>
          <button class="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
              />
            </svg>
            <p
              class="badge bg-red-500 rounded-full text-white px-1 absolute -top-3 -right-3"
            >
              12
            </p>
          </button>
        </div>
      </div>
    </div>
    <hr class="w-auto -mx-60" />
  </div>
</template>

<script lang="ts" setup>
import router from '@/router';
const handleClick = () => {
  alert('dddd')
}
const handleLogo = () => {
 router.push('/about')
}
</script>
