import { onMounted, ref } from 'vue';
export default function useInput() {
  const inputRef = ref()

  onMounted(() => {
    inputRef.value?.focus()
    console.log(inputRef.value) // <input type="text">
  })
  return { inputRef }
}